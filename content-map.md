<!-- Hallmark · macrostructure: Index-First / Long Document · theme: studied-DNA (source: https://hudovich.com/) · nav: N9 · footer: Ft2 -->

# 0xhuo — content map v2

Date: 2026-09-04
Status: implemented; Romanian-only
Paired document: [wireframe.md](./wireframe.md)

## Purpose

The site presents 0xhuo as an independent software engineer who turns difficult operational material into products people can use. It is a compact work index, not a CV or a generic agency landing page.

- Primary audience: founders, small product teams, agencies and technical operators.
- Primary action: open a case study and inspect the work.
- Secondary action: email `contact@0xhuo.dev`.
- Positioning: products, automation, backend, data systems and operational interfaces.
- Voice: first person, technical, direct and calm.
- Editorial rule: outcome before stack; evidence before adjectives; limits stated explicitly.

## Public selection

| Level | Project | Portfolio role | Public format | Status |
| --- | --- | --- | --- | --- |
| Client | AtlasEnergie | end-to-end product, public-data integration and marketplace | case study + live link | Client |
| Personal | busapp | product judgement, realtime state and uncertainty | case study + live link | Personal · Live beta |
| Client | Licto | operational automation, deterministic scoring and observability | case study, no public demo | Client · Privat |
| Client | Orion Grid | focused B2B web delivery | external live link | Client |
| Lab | Flipper Tracker | local-first resale operations | short text entry | In development |
| Lab | Vechi Bun | trust-first marketplace exploration | short text entry | Prototype |

Held back from v1: Mineral Recovery, `web_serv`, `pep_store`, empty/incomplete variants and any sensitive Atlas material. Credentials, client records and secrets never enter public copy, screenshots or source control.

## Route map

```text
/
├── #projects
├── Ce fac
├── În lucru
└── Contact

/work/atlas-energie/
/work/busapp/
/work/licto/

External
└── https://oriongrid.ro/

Utility
├── /404.html
├── /robots.txt
├── /sitemap.xml
└── /site.webmanifest
```

There are no separate About, Services, Contact, Work-index or Lab pages in v1. The homepage already performs those jobs without duplicating content.

## Homepage content

### Header

- `0xhuo` brand link.
- Dark/light theme control.
- No menu, hamburger, sticky navigation or promotional CTA.

### Profile

- Heading: `Salut, sunt 0xhuo.`
- Line 1: `Sunt dezvoltator de software independent, din România.`
- Line 2: `Construiesc aplicații web, automatizări și sisteme de date care rezolvă probleme concrete.`
- Actions: `Vezi proiectele` and `Scrie-mi`.

### Projects

Fixed order:

1. AtlasEnergie — `Hartă interactivă și marketplace pentru proiecte energetice din România.`
2. busapp — `Sosiri în timp real pentru transportul public din București–Ilfov, fără confuzie între datele live și orar.`
3. Licto — `Monitorizare automată a licitațiilor SEAP, cu rezultate relevante și ușor de verificat.`
4. Orion Grid — `Site de prezentare pentru o companie de infrastructură de înaltă tensiune.`

Each item contains only a title, status and outcome sentence. AtlasEnergie, busapp and Licto open local case studies; Orion Grid opens the live client site. Homepage screenshots are intentionally omitted.

### Ce fac

| Label | Public description |
| --- | --- |
| Flux | Automatizări și integrări care elimină munca repetitivă. |
| Interfață | Interfețe web rapide și clare, ușor de folosit zi de zi. |
| Nucleu | Sisteme backend, baze de date și API-uri adaptate proiectului. |
| Sistem | Arhitectură, deploy, monitorizare și documentație pentru predare. |

### În lucru

- Flipper Tracker — `Un spațiu de lucru local-first pentru găsirea, listarea și urmărirea produselor de revânzare.`
- Vechi Bun — `Un prototip de marketplace bazat pe încredere, pentru obiecte vintage și poveștile lor.`

No “coming soon” links are shown when no real destination exists.

### Contact and footer

- Visible email: `contact@0xhuo.dev`.
- Location: România.
- No social profiles, phone number or availability claim.

## Case-study content model

All three studies follow the same evidence-led order:

1. Project label, title and one-line outcome.
2. Status, domain, role and live link when one exists.
3. Real product capture with factual caption and snapshot date.
4. Outcome.
5. Context.
6. Constraints.
7. What shipped.
8. System view or state model.
9. Key decisions and tradeoffs.
10. Proof.
11. Limits.
12. Role and stack.
13. Next study.

Project-specific rules:

- AtlasEnergie: preserve provenance and source limitations; do not imply current national completeness. Its external `noindex` state remains a launch gate if discoverability is intended.
- busapp: distinguish live evidence from timetable; dynamic health statements need a dated snapshot.
- Licto: use only sanitized system views; never expose credentials, client records or private demo access.

## Media and claims policy

- Product captures appear only in case studies and use stable desktop/mobile crops.
- Captions identify whether a view is live or sanitized and state the capture date.
- No invented metrics, testimonials, awards or client claims.
- Dynamic numbers are published only with a verification date.
- Orion Grid receives a case study only when enough process evidence exists.

## Launch checklist

- Recheck all external destinations.
- Decide whether AtlasEnergie should remove its live `noindex` directive.
- Confirm snapshots still match public products.
- Verify no sensitive Licto or Atlas material is present.
- Re-run responsive, keyboard, theme, contrast and reduced-motion checks.
