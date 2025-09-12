# Freibad Hettenleidelheim – Statische Website

Moderne statische Website mit Tailwind (per CDN). Kein Build erforderlich.

## Lokal ansehen

```bash
cd /workspace/site
python3 -m http.server 8080
# Jetzt im Browser: http://localhost:8080
```

## Seitenstruktur

- index.html – Startseite
- oeffnungszeiten.html – Öffnungszeiten
- preise.html – Eintrittspreise
- kontakt.html – Anfahrt & Kontakt (Google‑Maps Lazy‑Load)
- foerderverein.html – Förderverein
- impressum.html – Impressum
- datenschutz.html – Datenschutz
- favicon.svg, robots.txt, sitemap.xml
- public/ – Assets

## Deployment

Als rein statische Seite auf jedem Static‑Hoster nutzbar (z. B. GitHub Pages, Netlify, Vercel Static, Cloudflare Pages, eigener Webserver). Dokumenten‑Root auf dieses Verzeichnis zeigen lassen.

### Beispiel Netlify
- Neues Projekt → „Deploy without build“
- Publish Directory: Projektwurzel (z. B. /workspace/site)

### Beispiel GitHub Pages
- Repository anlegen, Dateien committen
- Pages: Deploy from branch (main), Ordner /

## Hinweise

Preise/Zeiten ohne Gewähr; maßgeblich sind Aushänge/Infos der Verbandsgemeinde. Die Karte wird aus Datenschutzgründen erst nach Klick geladen.