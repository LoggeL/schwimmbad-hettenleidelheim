'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200'>
			<div className='mx-auto max-w-7xl px-4 py-3 flex items-center gap-4'>
				<Link href='/' className='flex items-center gap-2 font-semibold text-slate-900'>
					<img src='/Bilder/logo-transparent-small.png' alt='Freibad Hettenleidelheim Logo' className='h-8 w-auto' />
					<span>Freibad Hettenleidelheim</span>
				</Link>
				<nav className='ml-auto hidden md:flex items-center gap-6 text-sm'>
					<Link href='/' className='hover:text-sky-600'>
						Startseite
					</Link>
					<Link href='/oeffnungszeiten' className='hover:text-sky-600'>
						Öffnungszeiten
					</Link>
					<Link href='/preise' className='hover:text-sky-600'>
						Preise
					</Link>
					<Link href='/galerie' className='hover:text-sky-600'>
						Galerie
					</Link>
					<Link href='/historie' className='hover:text-sky-600'>
						Historie
					</Link>
					<Link href='/kontakt' className='hover:text-sky-600'>
						Anfahrt & Kontakt
					</Link>
					<Link href='/foerderverein' className='hover:text-sky-600'>
						Förderverein
					</Link>
					<Link href='/downloads' className='hover:text-sky-600'>
						Downloads
					</Link>
				</nav>
				<button
					type='button'
					className='ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300'
					aria-label='Menü umschalten'
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20' fill='currentColor'>
						{open ? (
							<path d='M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z' />
						) : (
							<path d='M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z' />
						)}
					</svg>
				</button>
			</div>
			{open && (
				<div className='md:hidden border-t border-slate-200'>
					<nav className='mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 text-sm'>
						<Link href='/' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Startseite
						</Link>
						<Link href='/oeffnungszeiten' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Öffnungszeiten
						</Link>
						<Link href='/preise' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Preise
						</Link>
						<Link href='/galerie' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Galerie
						</Link>
						<Link href='/historie' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Historie
						</Link>
						<Link href='/kontakt' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Anfahrt & Kontakt
						</Link>
						<Link href='/foerderverein' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Förderverein
						</Link>
						<Link href='/impressum' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Impressum
						</Link>
						<Link href='/datenschutz' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Datenschutz
						</Link>
						<Link href='/downloads' onClick={() => setOpen(false)} className='hover:text-sky-600'>
							Downloads
						</Link>
					</nav>
				</div>
			)}
		</header>
	)
}

