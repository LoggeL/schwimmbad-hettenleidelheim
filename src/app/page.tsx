export default function HomePage() {
	return (
		<div className='space-y-12'>
			<section className='relative overflow-hidden rounded-xl ring-1 ring-slate-200 bg-gradient-to-b from-sky-50 to-white'>
				<div className='mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 items-center gap-10'>
					<div>
						<h1 className='text-4xl font-extrabold tracking-tight text-slate-900'>
							Sommer, Sonne, Schwimmen – willkommen im Freibad Hettenleidelheim
						</h1>
						<p className='mt-4 text-lg text-slate-600'>
							Badespaß für die ganze Familie: 50‑Meter‑Becken, Nichtschwimmer‑ und
							Kinderbereich, große Liegewiese und mehr.
						</p>
						<div className='mt-8 flex flex-wrap gap-3'>
							<a className='inline-flex items-center rounded-md bg-sky-500 px-4 py-2.5 text-white hover:bg-sky-600' href='/oeffnungszeiten'>
								Öffnungszeiten
							</a>
							<a className='inline-flex items-center rounded-md bg-white px-4 py-2.5 text-sky-600 ring-1 ring-inset ring-sky-200 hover:ring-sky-400' href='/preise'>
								Preise ansehen
							</a>
							<a className='inline-flex items-center rounded-md bg-white px-4 py-2.5 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50' target='_blank' rel='noopener' href='https://freibad.vg-l.de/'>
								Online‑Tickets
							</a>
						</div>
						<p className='mt-4 text-sm text-slate-500'>Saison voraussichtlich: Mai – September. Änderungen vorbehalten.</p>
					</div>
					<div className='relative'>
						<div className='aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm bg-gradient-to-br from-sky-200 via-sky-100 to-white flex items-center justify-center'>
							<svg className='h-24 w-24 text-sky-500' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
								<path d='M2 16c4-3 8-3 12 0s8 3 8 0V6c-4 3-8 3-12 0S2 3 2 6v10z' />
							</svg>
						</div>
					</div>
				</div>
			</section>

			<section className='grid gap-6 md:grid-cols-3'>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h3 className='text-lg font-semibold'>50‑Meter‑Becken</h3>
					<p className='mt-2 text-slate-600'>Perfekt zum Bahnenschwimmen – sportlich oder entspannt.</p>
				</div>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h3 className='text-lg font-semibold'>Familienfreundlich</h3>
					<p className='mt-2 text-slate-600'>Nichtschwimmer‑ und Kinderbereich, Spiel & Spaß für Groß und Klein.</p>
				</div>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h3 className='text-lg font-semibold'>Große Liegewiese</h3>
					<p className='mt-2 text-slate-600'>Viel Platz zum Entspannen, Sonnen und Spielen.</p>
				</div>
			</section>

			<section className='grid gap-8 md:grid-cols-2 items-center'>
				<div>
					<h2 className='text-2xl font-semibold'>Anfahrt</h2>
					<p className='mt-2 text-slate-600'>Am Schwimmbad 25, 67310 Hettenleidelheim. Gute Parkmöglichkeiten direkt am Bad.</p>
					<div className='mt-4 flex gap-3'>
						<a className='inline-flex items-center rounded-md bg-sky-500 px-4 py-2.5 text-white hover:bg-sky-600' href='/kontakt#karte'>
							Karte öffnen
						</a>
						<a className='inline-flex items-center rounded-md bg-white px-4 py-2.5 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50' href='/kontakt'>
							Kontakt
						</a>
					</div>
				</div>
				<div className='rounded-xl overflow-hidden ring-1 ring-slate-200'>
					<iframe title='Karte Hettenleidelheim' loading='lazy' referrerPolicy='no-referrer-when-downgrade' className='h-72 w-full' src='https://www.google.com/maps?q=Am%20Schwimmbad%2025%2C%2067310%20Hettenleidelheim&output=embed' />
				</div>
			</section>
		</div>
	)
}

