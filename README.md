# 0xhuo portfolio

Static, dependency-free portfolio for `https://0xhuo.dev/`.

## Local preview

From this directory, run:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html` — selected work, client work, capabilities and lab projects
- `work/atlas-energie/` — AtlasEnergie case study
- `work/vine/` — busapp case study
- `work/licto/` — Licto case study
- `tokens.css` — brand, typography and layout tokens
- `styles.css` — shared responsive styles
- `script.js` — persisted dark/light theme control
- `design.md` — locked design system and token exports
- `content-map.md` and `wireframe.md` — content and layout decisions

The visual system uses a locally served Geist Mono variable font, a narrow index-first homepage and long-form case-study documents. Project screenshots are intentionally reserved for case studies.

## Deployment

Publish the repository root as a static site with clean directory URLs enabled. The site expects to live at the root of `0xhuo.dev`; canonical URLs, Open Graph metadata, `robots.txt` and `sitemap.xml` already use that origin. Configure the host to serve `404.html` for missing routes.

Before launch, verify the linked public products.
