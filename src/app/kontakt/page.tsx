import Image from 'next/image'
export const metadata = { title: 'Anfahrt & Kontakt – Freibad Hettenleidelheim' }

export default function ContactPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Anfahrt & Kontakt</h1>
			<div className='grid gap-8 md:grid-cols-2'>
				<div>
					<h2 className='text-xl font-semibold'>Adresse</h2>
					<p className='mt-2 text-slate-700'>Am Schwimmbad 25<br />67310 Hettenleidelheim</p>
					<h3 className='mt-6 font-semibold'>Kontakt</h3>
					<p className='mt-2'>
						<a className='hover:text-sky-600' href='tel:+496351124174'>Telefon: 06351 12 41 74</a>
						<br />
						<a className='hover:text-sky-600' href='mailto:info@schwimmbad-hettenleidelheim.de'>E‑Mail: info@schwimmbad-hettenleidelheim.de</a>
					</p>
					<div className='mt-6 flex flex-wrap gap-3'>
						<a className='inline-flex items-center rounded-md bg-sky-500 px-4 py-2.5 text-white hover:bg-sky-600' href='https://www.google.com/maps/dir/?api=1&destination=Am+Schwimmbad+25%2C+67310+Hettenleidelheim' target='_blank' rel='noopener'>
							Route planen
						</a>
						<a className='inline-flex items-center rounded-md bg-white px-4 py-2.5 text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50' href='#karte'>
							Karte anzeigen
						</a>
					</div>
				</div>
				<div id='karte' className='rounded-xl overflow-hidden ring-1 ring-slate-200'>
					<iframe title='Karte Hettenleidelheim' loading='lazy' referrerPolicy='no-referrer-when-downgrade' className='h-80 w-full' src='https://www.google.com/maps?q=Am%20Schwimmbad%2025%2C%2067310%20Hettenleidelheim&output=embed' />
				</div>
			</div>
			<div className='grid gap-4 sm:grid-cols-3'>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/fahrradstaender.JPG'} alt='Fahrradständer' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/Ladestation.JPG'} alt='Ladestation' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/begegnungsplatz.JPG'} alt='Begegnungsplatz' fill className='object-cover' />
				</div>
			</div>
		</div>
	)
}

