
export const metadata = { title: 'Downloads – Freibad Hettenleidelheim' }

type DownloadFile = { name: string; href: string; sizeKb: number }

function getAllPdfs(): DownloadFile[] {
  // Static list of PDFs relative to public root
  const files: { path: string; sizeKb: number }[] = [
    // Example entries (update as needed when adding PDFs)
    // { path: '/mitgliedsantrag.pdf', sizeKb: 123 },
    // { path: '/satzung.pdf', sizeKb: 456 },
  ]
  return files
    .map(({ path, sizeKb }) => ({ name: path.split('/').pop() || path, href: path, sizeKb }))
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

