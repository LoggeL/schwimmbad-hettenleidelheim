import Image from 'next/image'
export const metadata = { title: 'Impressum – Freibad Hettenleidelheim' }

export default function ImpressumPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Impressum</h1>
			<div className='prose prose-slate max-w-none'>
				<h2>Angaben gemäß § 5 TMG</h2>
				<p>
					Förderverein Schwimmbad Hettenleidelheim e.V.
					<br />Am Schwimmbad 25
					<br />67310 Hettenleidelheim
				</p>
				<h3>Vertreten durch</h3>
				<p>den Vorstand. Kontakt auf Anfrage.</p>
				<h3>Kontakt</h3>
				<p>
					Telefon: 06351 12 41 74
					<br />E‑Mail:{' '}
					<a href='mailto:info@schwimmbad-hettenleidelheim.de'>
						info@schwimmbad-hettenleidelheim.de
					</a>
				</p>
				<h3>Haftung für Inhalte</h3>
				<p>
					Alle Angaben wurden mit größter Sorgfalt zusammengestellt. Für
					Aktualität, Vollständigkeit und Richtigkeit kann keine Gewähr
					übernommen werden. Änderungen vorbehalten.
				</p>
				<h3>Haftung für Links</h3>
				<p>
					Für Inhalte verlinkter Seiten ist stets der jeweilige Anbieter
					verantwortlich.
				</p>
				<h3>Urheberrecht</h3>
				<p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht.</p>
			</div>
			<div className='grid gap-4 sm:grid-cols-3'>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={`/gallery/headermitlogo-60.jpg`} alt='Logo im Header' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={`/gallery/index-70.jpg`} alt='Bad Übersicht' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={`/gallery/SWRFernsehen.JPG`} alt='SWR Fernsehen' fill className='object-cover' />
				</div>
			</div>
		</div>
	)
}

