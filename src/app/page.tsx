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
						<div className='aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm bg-white'>
							<img src='/Bilder/headermitlogo-60.jpg' alt='Freibad Hettenleidelheim – Willkommensbild' className='h-full w-full object-cover' />
						</div>
					</div>
				</div>
			</section>

			{/* Online-Tickets Hinweis */}
			<section className='flex justify-center'>
				<div className='w-full md:w-auto rounded-xl bg-sky-600 text-white shadow ring-1 ring-sky-700/30'>
					<div className='px-6 py-5'>
						<h3 className='text-lg font-semibold'>Eintrittskarte online beziehen!</h3>
						<p className='mt-1 text-sky-50'>Eintrittskarten können online unter folgendem Link erworben werden: <a className='underline font-medium' href='https://freibad.vg-l.de/' target='_blank' rel='noopener'>freibad.vg-l.de</a></p>
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

			{/* Großes Stimmungsbild */}
			<section className='-mx-4'>
				<img src='/Bilder/index-70.jpg' alt='Schwimmbad Hettenleidelheim – Panorama' className='w-full h-64 md:h-80 object-cover rounded-none md:rounded-xl ring-0 md:ring-1 md:ring-slate-200' />
			</section>

			{/* Begrüßungstext */}
			<section>
				<div className='prose max-w-none'>
					<p>
						Verehrte Besucherinnen und Besucher,<br />willkommen auf unserer Internetseite.
					</p>
					<p>
						Hier wollen wir Sie über unser Schwimmbad und unseren Förderverein informieren. Sie finden hier Informationen, Bilder und Berichte aus dem Schwimmbadalltag, ebenso wie von den zahlreichen vom und mit dem Förderverein durchgeführten Aktivitäten.
					</p>
					<p>
						Viel Freude beim virtuellen Gang durch das Schwimmbad Hettenleidelheim.
					</p>
					<p>
						Die Vorstandschaft des Fördervereins<br />
						Manfred Guth, Jens Vogel, Anja Fürst und Susanne Peters
					</p>
				</div>
			</section>
		</div>
	)
}

