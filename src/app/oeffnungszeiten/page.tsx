import Image from 'next/image'
export const metadata = { title: 'Öffnungszeiten – Freibad Hettenleidelheim' }

export default function HoursPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Öffnungszeiten</h1>
			<div className='grid gap-6 md:grid-cols-2'>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h2 className='text-xl font-semibold'>Saison</h2>
					<p className='mt-2 text-slate-700'>In der Regel: Mai – September.</p>
					<ul className='mt-4 space-y-2 text-slate-700'>
						<li>• Täglich voraussichtlich: 9:00 – 19:00 Uhr</li>
						<li>• In den Sommerferien ggf. erweiterte Zeiten</li>
					</ul>
					<p className='mt-4 text-sm text-slate-500'>Angaben ohne Gewähr. Änderungen vorbehalten.</p>
				</div>
				<div className='rounded-xl border border-slate-200 p-6 bg-slate-50'>
					<h2 className='text-xl font-semibold'>Hinweise bei Wetter</h2>
					<p className='mt-2 text-slate-700'>Bei sehr schlechtem Wetter kann das Bad geschlossen bleiben. Bitte prüfen Sie kurzfristige Änderungen über die Verbandsgemeinde.</p>
					<a className='mt-4 inline-flex items-center rounded-md bg-sky-500 px-4 py-2.5 text-white hover:bg-sky-600' target='_blank' rel='noopener' href='https://freibad.vg-l.de/'>Online‑Tickets</a>
				</div>
			</div>
			<div className='grid gap-4 sm:grid-cols-3'>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/nichtschwimmer.jpg'} alt='Nichtschwimmerbereich' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/umrandung.JPG'} alt='Anlagen im Bad' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/schwimmbad_2023.jpg'} alt='Freibad 2023' fill className='object-cover' />
				</div>
			</div>
		</div>
	)
}

