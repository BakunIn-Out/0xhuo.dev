# Design — 0xhuo

<!-- Hallmark · studied: yes · DNA-source: url + live screenshot · source: https://hudovich.com/ -->

A locked design system for the 0xhuo portfolio. Every page reads this file before visual changes are made.

## Genre

Technical editorial. The site is a compact personal profile and project index, not a studio landing page.

## Macrostructure family

- Homepage: **Index-First** with a compact first-person profile introduction.
- Case studies: **Long Document** with screenshots kept inside the reading measure.
- Navigation: **N9 Edge-aligned minimal** — mark at left, theme control at right, no link row.
- Footer: **Ft2 Inline rule single line**.

## Theme

Studied DNA from the public Hudovich reference, adapted to the 0xhuo mark.

- Dark paper: `oklch(22.57% 0.0194 280.2)`
- Dark card: `oklch(24.25% 0.0177 279.8)`
- Dark ink: `oklch(87.11% 0.0055 286.3)`
- Dark muted ink: `oklch(78.41% 0.007 286.2)`
- Rule/surface: `oklch(27.39% 0.0055 286)`
- Accent: `oklch(78.59% 0.1674 70)`
- Accent footprint: at most 5% of a viewport.
- Light mode keeps cool-tinted paper and the same amber anchor.

## Typography

- Display, body and labels: **Geist Mono**, variable 100–900.
- This is a deliberate single-font technical system.
- Body: 16px / 1.6.
- Page title: 24px / 1.3; case title may reach 28px.
- Section labels: 14px, uppercase, 0.05em tracking.
- No oversized display type and no italic headings.

## Spacing

4-point scale in `tokens.css`. Main reading shell is 44rem including 1rem mobile / 2rem desktop gutters. Major homepage blocks use 3rem separation; internal spacing uses 0.5–1.25rem.

## Motion

- The page is present immediately; no load or scroll reveals.
- Interactions use colour, border-colour or opacity only.
- Focus rings appear instantly.
- Reduced motion removes non-essential transitions.

## Microinteractions stance

- Cards receive one quiet border/ring change; they never lift or scale.
- Project categories use a neutral surface; project states keep the amber signal.
- Text links thicken their amber underline.
- Theme changes are immediate and persisted locally.
- Every interactive target is at least 44×44px.

## CTA voice

- Primary: compact amber rectangle, direct verb.
- Secondary: compact raised neutral rectangle.
- Inline case-study actions: amber underline with a short arrow.

## Per-page allowances

- Homepage has no project screenshots; project names and statuses carry recognition without initial marks.
- Case studies may use one real cover screenshot plus factual diagrams.
- 404 remains typography-only.

## What pages MUST share

- 0xhuo mark and wordmark.
- Geist Mono throughout.
- The same dark/light palette and amber accent placement.
- 44rem shell, compact controls and section rhythm.
- N9 header and Ft2 footer.

## What pages MAY differ on

- Homepage uses compact two-column project cards; case pages use continuous prose.
- Case pages may include inline screenshots, decision rows and system diagrams inside the reading measure.

## Provenance

Extracted from `https://hudovich.com/` as a public reference for the user's own 0xhuo brand on 2026-09-04. Dark tokens and font declarations were read from the public CSS; rhythm was verified from live desktop and mobile screenshots. The system carries structural DNA, not source content or imagery.

## Exports

### tokens.css

```css
:root {
  --color-paper: oklch(22.57% 0.0194 280.2);
  --color-paper-2: oklch(24.25% 0.0177 279.8);
  --color-paper-3: oklch(27.39% 0.0055 286);
  --color-ink: oklch(87.11% 0.0055 286.3);
  --color-ink-2: oklch(78.41% 0.007 286.2);
  --color-rule: oklch(27.39% 0.0055 286);
  --color-accent: oklch(78.59% 0.1674 70);
  --color-accent-ink: oklch(14.08% 0.0044 285.8);
  --color-focus: oklch(84% 0.15 70);
  --font-display: "Geist Mono", ui-monospace, monospace;
  --font-body: "Geist Mono", ui-monospace, monospace;
  --font-outlier: "Geist Mono", ui-monospace, monospace;
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.25rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --text-xs: 0.875rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 1.75rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms;
  --dur-short: 180ms;
  --dur-long: 300ms;
  --rule-hair: 1px;
  --rule-fine: 2px;
  --radius-card: 0.5rem;
  --radius-pill: 999px;
  --radius-input: 0.375rem;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(22.57% 0.0194 280.2);
  --color-paper-2: oklch(24.25% 0.0177 279.8);
  --color-paper-3: oklch(27.39% 0.0055 286);
  --color-ink: oklch(87.11% 0.0055 286.3);
  --color-ink-2: oklch(78.41% 0.007 286.2);
  --color-rule: oklch(27.39% 0.0055 286);
  --color-accent: oklch(78.59% 0.1674 70);
  --color-focus: oklch(84% 0.15 70);
  --font-display: "Geist Mono", ui-monospace, monospace;
  --font-body: "Geist Mono", ui-monospace, monospace;
  --font-outlier: "Geist Mono", ui-monospace, monospace;
  --spacing-3xs: 0.25rem;
  --spacing-2xs: 0.5rem;
  --spacing-xs: 0.75rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.25rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --text-xs: 0.875rem;
  --text-base: 1rem;
  --text-xl: 1.5rem;
  --radius-card: 0.5rem;
  --radius-pill: 999px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(22.57% 0.0194 280.2)", "$type": "color" },
    "paper-2": { "$value": "oklch(24.25% 0.0177 279.8)", "$type": "color" },
    "ink": { "$value": "oklch(87.11% 0.0055 286.3)", "$type": "color" },
    "ink-2": { "$value": "oklch(78.41% 0.007 286.2)", "$type": "color" },
    "rule": { "$value": "oklch(27.39% 0.0055 286)", "$type": "color" },
    "accent": { "$value": "oklch(78.59% 0.1674 70)", "$type": "color" },
    "focus": { "$value": "oklch(84% 0.15 70)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Geist Mono, ui-monospace, monospace", "$type": "fontFamily" },
    "body": { "$value": "Geist Mono, ui-monospace, monospace", "$type": "fontFamily" }
  },
  "space": {
    "xs": { "$value": "0.75rem", "$type": "dimension" },
    "sm": { "$value": "1rem", "$type": "dimension" },
    "lg": { "$value": "1.5rem", "$type": "dimension" },
    "2xl": { "$value": "3rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "180ms", "$type": "duration" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97.5% 0.004 280;
  --foreground: 18.79% 0.0146 272.5;
  --card: 95% 0.006 280;
  --card-foreground: 18.79% 0.0146 272.5;
  --primary: 78.59% 0.1674 70;
  --primary-foreground: 14.08% 0.0044 285.8;
  --secondary: 92.5% 0.006 280;
  --secondary-foreground: 18.79% 0.0146 272.5;
  --muted: 88% 0.006 280;
  --muted-foreground: 45% 0.01 280;
  --border: 88% 0.006 280;
  --input: 88% 0.006 280;
  --ring: 72% 0.17 70;
  --radius: 0.5rem;
}

.dark {
  --background: 22.57% 0.0194 280.2;
  --foreground: 87.11% 0.0055 286.3;
  --card: 24.25% 0.0177 279.8;
  --card-foreground: 87.11% 0.0055 286.3;
  --primary: 78.59% 0.1674 70;
  --primary-foreground: 14.08% 0.0044 285.8;
  --secondary: 27.39% 0.0055 286;
  --secondary-foreground: 87.11% 0.0055 286.3;
  --muted: 27.39% 0.0055 286;
  --muted-foreground: 78.41% 0.007 286.2;
  --border: 27.39% 0.0055 286;
  --input: 27.39% 0.0055 286;
  --ring: 84% 0.15 70;
}
```

## Notes

Do not carry over `transition-all` from the reference. Do not reintroduce the previous oversized hero, 70rem container, mosaic screenshot grid, scroll reveal, proof table or statement footer.
