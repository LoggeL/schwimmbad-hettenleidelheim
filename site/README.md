## Schwimmbad Hettenleidelheim – Static Site

Plain HTML/CSS rebuild using existing images. No JS framework.

### Structure
- `index.html` and content pages: `bad.html`, `oeffnungszeiten.html`, `eintrittspreise.html`, `foerderverein.html`, `historie.html`, `anfahrt.html`, `impressum.html`, `datenschutz.html`
- `assets/css/styles.css` – responsive styles
- `assets/images/Bilder/` – original images and icons
- `assets/foerderverein/Beitrittserklärung.pdf`
- `robots.txt`, `sitemap.xml`

### Local preview
```bash
python3 -m http.server 8080 -d .
# Open http://localhost:8080/
```

### Deployment
Any static host works. Options:
- GitHub Pages: push this folder, enable Pages. Root: `/`, custom domain optional.
- Netlify: drag-and-drop or connect repo. Build command: none. Publish dir: `new_site/` or repository root containing these files.
- Vercel: Import as static site. Framework preset: Other. Output: project root.

Ensure domain config points to the chosen host and that `sitemap.xml`/`robots.txt` are accessible at the site root.

