// prerender.mjs
// Runs after `vite build` — starts a static server with SPA fallback, visits
// each route with Puppeteer, and writes the fully-rendered HTML into dist/.
// Nginx's `try_files $uri $uri/index.html /index.html` then serves the
// prerendered files directly to Googlebot without needing JS execution.

import puppeteer from 'puppeteer'
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, 'dist')
const PORT = 4174

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
]

function startServer() {
  return new Promise((res) => {
    const server = createServer((req, rsp) => {
      const url = req.url.split('?')[0]

      // Try exact file, then dir/index.html, then SPA fallback
      const candidates = [
        resolve(DIST, url.slice(1)),
        resolve(DIST, url.slice(1), 'index.html'),
        resolve(DIST, 'index.html'),
      ]

      const isFile = f => existsSync(f) && statSync(f).isFile()
      const file = candidates.find(isFile) ?? resolve(DIST, 'index.html')

      const mime = MIME[extname(file)] ?? 'text/plain'
      rsp.setHeader('Content-Type', mime)
      createReadStream(file).pipe(rsp)
    })
    server.listen(PORT, () => res(server))
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
    } else {
      const dir = resolve(DIST, route.slice(1))
      mkdirSync(dir, { recursive: true })
      writeFileSync(resolve(dir, 'index.html'), html, 'utf-8')
    }
    console.log(`  ✓ ${route}`)
  } finally {
    await page.close()
  }
}

async function main() {
  console.log('\n🔍 Prerendering routes...')
  const server = await startServer()

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
