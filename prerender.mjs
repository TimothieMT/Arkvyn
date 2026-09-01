// prerender.mjs
// Runs after `vite build` — starts a preview server, visits each route with
// Puppeteer, and writes the fully-rendered HTML back into dist/.
// Nginx's `try_files $uri $uri/ /index.html` will then serve the prerendered
// files directly to Googlebot without needing JS execution.

import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

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

async function main() {
  console.log('\n🔍 Prerendering routes...')

  const server = await preview({
    preview: { port: 4174, open: false },
  })

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    for (const route of routes) {
      const page = await browser.newPage()

      await page.goto(`http://localhost:4174${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30_000,
      })

      // Wait until React has mounted something inside #root
      await page.waitForSelector('#root > *', { timeout: 10_000 })

      const html = await page.content()

      if (route === '/') {
        writeFileSync(resolve(__dirname, 'dist/index.html'), html, 'utf-8')
      } else {
        const dir = resolve(__dirname, `dist${route}`)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html, 'utf-8')
      }

      console.log(`  ✓ ${route}`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.httpServer.close()
  }

  console.log('Prerendering complete.\n')
}

main().catch(err => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
