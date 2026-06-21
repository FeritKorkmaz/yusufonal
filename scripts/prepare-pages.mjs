import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const rootDir = process.cwd()
const outDir = path.join(rootDir, 'out')
const docsDir = path.join(rootDir, 'docs')
const cname = 'demo.haliwork.com'

try {
  await access(outDir)
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.error('out klasörü bulunamadı. Önce next build çalıştırılmalı.')
    process.exit(1)
  }

  throw error
}

await rm(docsDir, { recursive: true, force: true })
await cp(outDir, docsDir, { recursive: true })
await mkdir(docsDir, { recursive: true })
await writeFile(path.join(docsDir, '.nojekyll'), '')
await writeFile(path.join(docsDir, 'CNAME'), `${cname}\n`)

console.log(`GitHub Pages çıktısı docs klasörüne hazırlandı: ${cname}`)
