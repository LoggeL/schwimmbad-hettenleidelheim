import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
	title: 'Freibad Hettenleidelheim',
	description:
		'Freibad Hettenleidelheim – Öffnungszeiten, Preise, Anfahrt, Förderverein und mehr.',
	metadataBase: new URL('https://www.schwimmbad-hettenleidelheim.de'),
	openGraph: {
		title: 'Freibad Hettenleidelheim',
		description:
			'Badespaß für die ganze Familie. Öffnungszeiten, Preise, Anfahrt, Förderverein.',
		type: 'website',
		images: ['/favicon.svg'],
	},
	icons: {
		icon: ['/favicon.svg'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='de' data-theme='light' suppressHydrationWarning>
			<body className='min-h-screen flex flex-col bg-white text-slate-800'>
				<Header />
				<main className='mx-auto max-w-7xl px-4 py-8 flex-1'>{children}</main>
				<footer className='border-t border-slate-200 py-8 text-sm text-slate-600'>
					<div className='mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-between gap-4'>
						<span>© {new Date().getFullYear()} Freibad Hettenleidelheim</span>
						<div className='flex items-center gap-4'>
							<Link href='/impressum' className='hover:text-sky-600'>
								Impressum
							</Link>
							<Link href='/datenschutz' className='hover:text-sky-600'>
								Datenschutz
							</Link>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}

