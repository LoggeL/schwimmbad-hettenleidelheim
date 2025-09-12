import fs from 'node:fs'
import path from 'node:path'

export const metadata = { title: 'Downloads – Freibad Hettenleidelheim' }

type DownloadFile = { name: string; href: string; sizeKb: number }

function getAllPdfs(): DownloadFile[] {
  const publicDir = path.join(process.cwd(), 'public')

  function walk(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const files: string[] = []
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...walk(fullPath))
      } else if (/\.pdf$/i.test(entry.name)) {
        files.push(fullPath)
      }
    }
    return files
  }

  if (!fs.existsSync(publicDir)) return []
  const pdfPaths = walk(publicDir)
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return pdfPaths
    .map((absPath) => {
      const rel = absPath.replace(publicDir, '')
      const stat = fs.statSync(absPath)
      return {
        name: path.basename(absPath),
        href: `${prefix}${rel}`.replace(/\\/g, '/'),
        sizeKb: Math.max(1, Math.round(stat.size / 1024)),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

export default function DownloadsPage() {
  const files = getAllPdfs()
  const hasSatzung = files.find((f) => /satzung/i.test(f.name))
  const hasMitgliedsantrag = files.find((f) => /mitglied/i.test(f.name))

  return (
    <div className='space-y-8'>
      <header>
        <h1 className='text-3xl font-bold tracking-tight'>Downloads</h1>
        <p className='mt-2 text-slate-600'>Hier finden Sie Dokumente als PDF zum Herunterladen.</p>
      </header>

      <section className='space-y-4'>
        <h2 id='mitgliedsantrag' className='text-xl font-semibold'>Mitgliedsantrag</h2>
        {!hasMitgliedsantrag ? (
          <p className='text-slate-600'>Aktuell kein Dokument vorhanden.</p>
        ) : (
          <ul className='divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white'>
            {files
              .filter((f) => /mitglied/i.test(f.name))
              .map((f) => (
                <li key={f.href} className='flex items-center justify-between p-3'>
                  <a className='text-sky-700 hover:text-sky-900 underline' href={f.href} download>
                    {f.name}
                  </a>
                  <span className='text-xs text-slate-500'>{f.sizeKb} KB</span>
                </li>
              ))}
          </ul>
        )}
      </section>

      <section className='space-y-4'>
        <h2 id='satzung' className='text-xl font-semibold'>Satzung</h2>
        {!hasSatzung ? (
          <p className='text-slate-600'>Aktuell kein Dokument vorhanden.</p>
        ) : (
          <ul className='divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white'>
            {files
              .filter((f) => /satzung/i.test(f.name))
              .map((f) => (
                <li key={f.href} className='flex items-center justify-between p-3'>
                  <a className='text-sky-700 hover:text-sky-900 underline' href={f.href} download>
                    {f.name}
                  </a>
                  <span className='text-xs text-slate-500'>{f.sizeKb} KB</span>
                </li>
              ))}
          </ul>
        )}
      </section>

      <section className='space-y-4'>
        <h2 className='text-xl font-semibold'>Weitere Dokumente</h2>
        {files.length === 0 ? (
          <p className='text-slate-600'>Keine Dateien vorhanden.</p>
        ) : (
          <ul className='divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white'>
            {files.map((f) => (
              <li key={f.href} className='flex items-center justify-between p-3'>
                <a className='text-sky-700 hover:text-sky-900 underline' href={f.href} download>
                  {f.name}
                </a>
                <span className='text-xs text-slate-500'>{f.sizeKb} KB</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

