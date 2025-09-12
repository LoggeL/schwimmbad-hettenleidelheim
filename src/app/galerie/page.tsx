import Image from 'next/image'

export const metadata = {
	title: 'Galerie – Freibad Hettenleidelheim',
	description: 'Bildergalerie des Freibads Hettenleidelheim.'
}

function getGalleryImages() {
	// Static list to avoid runtime folder scanning
	const files = [
		'arbeitseinsatz.jpg',
		'begegnungsplatz.JPG',
		'bodentrampolin.JPG',
		'Durchschreitebecken2019.JPG',
		'eingebautes_Reck.JPG',
		'Einweihung_Weg.JPG',
		'fahrradstaender.JPG',
		'headermitlogo-60.jpg',
		'ibench.JPG',
		'index-70.jpg',
		'Ladestation.JPG',
		'logo-transparent-small.png',
		'nichtschwimmer.jpg',
		'plane_geschlossen.JPG',
		'schaukel_begegnungsplatz.JPG',
		'schwimmbad_2023.jpg',
		'skate2017.jpg',
		'SWRFernsehen.JPG',
		'tischtennisplatte.JPG',
		'Umkleiden.JPG',
		'umrandung.JPG',
		'wertschliessfaecher_aussen.JPG',
		'wertschliessfaecher_innen.JPG',
	]
	return files.sort((a, b) => a.localeCompare(b))
}

export default function GaleriePage() {
	const images = getGalleryImages()
	return (
		<div className='space-y-8'>
			<header>
				<h1 className='text-3xl font-bold tracking-tight'>Galerie</h1>
				<p className='mt-2 text-slate-600'>Einblicke in unser Freibad.</p>
			</header>
			{images.length === 0 ? (
				<p className='text-slate-600'>Keine Bilder vorhanden.</p>
			) : (
				<ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{images.map((file) => (
						<li key={file} className='group overflow-hidden rounded-lg ring-1 ring-slate-200 bg-white'>
							<a href={`/gallery/${file}`} target='_blank' rel='noopener noreferrer'>
								<div className='relative aspect-[4/3]'>
									<Image src={`/gallery/${file}`} alt={file} fill sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw' className='object-cover transition-transform duration-300 group-hover:scale-105' />
								</div>
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}