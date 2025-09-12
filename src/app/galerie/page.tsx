import Image from 'next/image'
import Link from 'next/link'
import fs from 'node:fs'
import path from 'node:path'

export const metadata = {
	title: 'Galerie – Freibad Hettenleidelheim',
	description: 'Bildergalerie des Freibads Hettenleidelheim.'
}

function getGalleryImages() {
	const galleryDir = path.join(process.cwd(), 'public', 'gallery')
	try {
		const files = fs.readdirSync(galleryDir)
		return files
			.filter((file) => /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(file))
			// Exclude historical dia images here; they go to Historie page
			.filter((file) => !/^dia\d+\.(?:jpe?g|png|webp|gif|avif|svg)$/i.test(file))
			.sort((a, b) => a.localeCompare(b))
	} catch (err) {
		return []
	}
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
							<Link href={`/gallery/${file}`} target='_blank' rel='noopener noreferrer'>
								<div className='relative aspect-[4/3]'>
									<Image src={`/gallery/${file}`} alt={file} fill sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw' className='object-cover transition-transform duration-300 group-hover:scale-105' />
								</div>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}