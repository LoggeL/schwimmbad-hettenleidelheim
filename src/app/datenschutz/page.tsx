export const metadata = { title: 'Datenschutz – Freibad Hettenleidelheim' }

export default function PrivacyPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Datenschutz</h1>
			<div className='prose prose-slate max-w-none'>
				<h2>Allgemeine Hinweise</h2>
				<p>
					Diese Website ist eine statische Informationsseite. Es werden keine
					personenbezogenen Daten durch Formulare erfasst, keine Tracking‑Cookies
					gesetzt und keine Analysedienste eingesetzt.
				</p>
				<h3>Server‑Logfiles</h3>
				<p>
					Beim Aufruf der Seite können technische Informationen (z. B.
					IP‑Adresse, Datum/Uhrzeit, abgerufene Datei) vom Hoster in
					Server‑Logfiles gespeichert werden. Diese Daten sind für die
					Bereitstellung der Website erforderlich.
				</p>
				<h3>Externe Inhalte</h3>
				<p>
					Auf der Seite <em>Anfahrt & Kontakt</em> wird eine Karte von Google
					Maps eingebunden. Mit Aufruf der Seite werden Daten an Google
					übertragen. Hinweise unter{' '}
					<a href='https://policies.google.com/privacy?hl=de' target='_blank' rel='noopener'>
						Google Datenschutzerklärung
					</a>
					.
				</p>
				<h3>Kontaktaufnahme</h3>
				<p>Bei Kontakt per Telefon oder E‑Mail werden die Daten ausschließlich zur Bearbeitung Ihres Anliegens verwendet.</p>
				<h3>Verantwortlicher</h3>
				<p>
					Förderverein Schwimmbad Hettenleidelheim e.V., Am Schwimmbad 25,
					67310 Hettenleidelheim, E‑Mail:{' '}
					<a href='mailto:info@schwimmbad-hettenleidelheim.de'>
						info@schwimmbad-hettenleidelheim.de
					</a>
				</p>
			</div>
		</div>
	)
}

