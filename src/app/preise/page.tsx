import Image from 'next/image'
export const metadata = { title: 'Eintrittspreise – Freibad Hettenleidelheim' }

export default function PricesPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Eintrittspreise</h1>
			<div className='grid gap-6 md:grid-cols-2'>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h2 className='text-xl font-semibold'>Tageskarten</h2>
					<ul className='mt-4 space-y-2 text-slate-700'>
						<li>• Erwachsene (ab 18 J.): 5,00 €</li>
						<li>• Kinder & Jugendliche (u18): 2,50 €</li>
						<li>• Feierabendkarte (ab 17 Uhr): 3,00 €</li>
					</ul>
				</div>
				<div className='rounded-xl border border-slate-200 p-6'>
					<h2 className='text-xl font-semibold'>Mehrfach‑ und Dauerkarten</h2>
					<ul className='mt-4 space-y-2 text-slate-700'>
						<li>• 12er‑Karte Erwachsene: 50,00 €</li>
						<li>• 12er‑Karte Kinder/Jugendliche: 25,00 €</li>
						<li>• Dauerkarte Erwachsene: 75,00 €</li>
						<li>• Dauerkarte Kinder/Jugendliche (1. Kind): 35,00 €</li>
						<li>• Dauerkarte je weiteres Kind: 15,00 €</li>
						<li>• Familienkarte (Eltern + Kinder u18): 150,00 €</li>
					</ul>
				</div>
			</div>
			<div className='rounded-xl border border-amber-200 bg-amber-50 p-6'>
				<h2 className='text-lg font-semibold text-amber-800'>Ermäßigungen</h2>
				<p className='mt-2 text-amber-900'>50% Ermäßigung für Schwerbehinderte, Empfänger von Sozialleistungen und Personen in Ausbildung. Kinder unter 6 Jahren: frei.</p>
				<p className='mt-2 text-sm text-amber-900'>Angaben ohne Gewähr. Maßgeblich sind die Aushänge bzw. Informationen der Verbandsgemeinde.</p>
			</div>
			<div className='grid gap-4 sm:grid-cols-3'>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/wertschliessfaecher_innen.JPG'} alt='Wertschließfächer innen' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/Umkleiden.JPG'} alt='Umkleiden' fill className='object-cover' />
				</div>
				<div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200'>
					<Image src={'/gallery/ibench.JPG'} alt='Sitzbank im Bad' fill className='object-cover' />
				</div>
			</div>
		</div>
	)
}

