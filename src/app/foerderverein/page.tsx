export const metadata = { title: 'Förderverein – Freibad Hettenleidelheim' }

export default function ClubPage() {
	return (
		<div className='space-y-8'>
			<h1 className='text-3xl font-bold'>Förderverein</h1>
			<div className='prose prose-slate max-w-none'>
				<h2>Ziele und Aufgaben</h2>
				<p>
					Der Förderverein Schwimmbad Hettenleidelheim e.V. setzt sich für den
					langfristigen Erhalt und die Weiterentwicklung des Freibads ein. Mit
					finanzieller Unterstützung, ehrenamtlichem Einsatz und Aktionen erhöhen
					wir die Attraktivität des Bads, fördern Schwimmausbildung und stärken die
					Gemeinschaft.
				</p>
				<ul>
					<li>Unterstützung bei Pflege‑ und Erhaltungsmaßnahmen</li>
					<li>Finanzielle Beiträge für Anschaffungen und Projekte</li>
					<li>Organisation von Veranstaltungen und Aktionen</li>
					<li>Förderung von Schwimmkursen und Sicherheit im Wasser</li>
				</ul>
				<h2>Mitglied werden</h2>
				<p>
					Wir freuen uns über neue Mitglieder! Jede Mitgliedschaft hilft, das
					Freibad zu erhalten und zu verbessern. Schreiben Sie uns eine E‑Mail an{' '}
					<a href='mailto:info@schwimmbad-hettenleidelheim.de'>
						info@schwimmbad-hettenleidelheim.de
					</a>
					.
				</p>
				<h2>Spenden</h2>
				<p>
					Gerne stellen wir für Ihre Spende eine Zuwendungsbestätigung aus. Wenden
					sie sich an den Vorstand.
				</p>
				<h2>Kontakt</h2>
				<p>
					Förderverein Schwimmbad Hettenleidelheim e.V.
					<br />Am Schwimmbad 25 · 67310 Hettenleidelheim
				</p>
			</div>
		</div>
	)
}

