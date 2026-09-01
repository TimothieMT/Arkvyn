// prerender.mjs
// Runs after `vite build` — starts a static server with SPA fallback, visits
// each route with Puppeteer, and writes the fully-rendered HTML into dist/.
// Nginx's `try_files $uri $uri/index.html /index.html` then serves the
// prerendered files directly to Googlebot without needing JS execution.

import puppeteer from 'puppeteer'
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { resolve, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, 'dist')
const HOST = process.env.PRERENDER_HOST || '127.0.0.1'
const PORT = Number(process.env.PRERENDER_PORT || 4174)

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.ico':  'image/x-icon',
}

const routes = [
  '/',
  '/webdesign',
  '/homepage-erstellen-lassen',
  '/ki-integration',
  '/full-stack-entwicklung',
  '/backend-entwicklung',
  '/devops-infrastruktur',
  '/api-integration',
  '/it-beratung',
  '/impressum',
  '/datenschutz',
  '/__not-found__',
]

function startServer(shellHtml) {
  return new Promise((res, reject) => {
    const server = createServer((req, rsp) => {
      let url
      try {
        const requestUrl = new URL(req.url || '/', `http://${HOST}`)
        url = decodeURIComponent(requestUrl.pathname)
      } catch {
        rsp.statusCode = 400
        rsp.end('Bad request')
        return
      }
      const file = resolve(DIST, `.${url}`)

      // Nur Dateien innerhalb von dist ausliefern (auch bei manipulierten URLs).
      if (file !== DIST && !file.startsWith(`${DIST}/`)) {
        rsp.statusCode = 400
        rsp.end('Bad request')
        return
      }

      // Jede HTML-Route startet mit der unveränderten Vite-Shell. So können
      // bereits gerenderte Helmet-Tags einer Route nicht in die nächste lecken.
      if (!extname(url)) {
        rsp.setHeader('Content-Type', 'text/html; charset=utf-8')
        rsp.end(shellHtml)
        return
      }

      if (existsSync(file) && statSync(file).isFile()) {
        rsp.setHeader('Content-Type', MIME[extname(file)] ?? 'application/octet-stream')
        createReadStream(file).pipe(rsp)
        return
      }

      rsp.statusCode = 404
      rsp.end('Not found')
    })
    server.once('error', reject)
    server.listen(PORT, HOST, () => res(server))
  })
}

async function renderRoute(browser, route) {
  const page = await browser.newPage()
  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30_000,
    })
    await page.waitForSelector('#root > *', { timeout: 15_000 })
    const html = await page.content()
    if (route === '/') {
      writeFileSync(resolve(DIST, 'index.html'), html, 'utf-8')
    } else if (route === '/__not-found__') {
      writeFileSync(resolve(DIST, '404.html'), html, 'utf-8')
    } else {
      const dir = resolve(DIST, route.slice(1))
      mkdirSync(dir, { recursive: true })
      writeFileSync(resolve(dir, 'index.html'), html, 'utf-8')
    }
    console.log(`  ✓ ${route === '/__not-found__' ? '/404.html' : route}`)
  } finally {
    await page.close()
  }
}

async function main() {
  console.log('\n🔍 Prerendering routes...')
  const shellHtml = readFileSync(resolve(DIST, 'index.html'), 'utf-8')
  const server = await startServer(shellHtml)

  // Split into two batches to avoid Puppeteer memory pressure
  const mid = Math.ceil(routes.length / 2)
  const batches = [routes.slice(0, mid), routes.slice(mid)]

  try {
    for (const batch of batches) {
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })
      try {
        for (const route of batch) {
          await renderRoute(browser, route)
        }
      } finally {
        await browser.close()
      }
    }
  } finally {
    server.close()
  }

  console.log('Prerendering complete.\n')
}

main().catch(err => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
