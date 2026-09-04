<!-- Hallmark · macrostructure: Index-First / Long Document · theme: studied-DNA (source: https://hudovich.com/) · nav: N9 · footer: Ft2 -->

# 0xhuo — wireframe v2

Date: 2026-09-04
Status: implemented
Paired document: [content-map.md](./content-map.md)

## Design direction

- Homepage: **Index-First**, narrow and text-led.
- Case studies: **Long Document**, one readable vertical sequence.
- Navigation: **N9 Edge-aligned** — brand at the left edge, theme control at the right edge.
- Footer: **Ft2 Inline** — copyright and location only on the homepage; contact metadata on case studies.
- Type: Geist Mono throughout.
- Theme: indigo-charcoal with amber signal; complete light counterpart.
- Media rule: no screenshots on the homepage. Real product captures appear only where they support a case-study claim.
- Motion rule: no entrance animation or scroll reveal; only immediate hover, focus and pressed feedback.

## Homepage — desktop

```text
┌──────────────────────────────────────────────────────────────────────────┐
│  [mark] 0xhuo                                             [theme]       │
│                                                                          │
│                         ([mark])                                         │
│                         Hey, I’m 0xhuo.                                  │
│                         Independent software engineer based in Romania.  │
│                         I build products, automations and data systems…  │
│                         [View projects] [Send email]                      │
│                                                                          │
│                         PROJECTS                                         │
│                         Selected products and client work…               │
│                         ┌ AtlasEnergie  ┐ ┌ busapp     ┐                 │
│                         │ outcome/status│ │ outcome/... │                 │
│                         └───────────────┘ └─────────────┘                 │
│                         ┌ Licto         ┐ ┌ Orion Grid ┐                 │
│                         │ outcome/status│ │ outcome/... │                 │
│                         └───────────────┘ └─────────────┘                 │
│                                                                          │
│                         WHAT I DO                                        │
│                         Flow      description                            │
│                         Surface   description                            │
│                         Core      description                            │
│                         System    description                            │
│                                                                          │
│                         IN THE LAB                                       │
│                         Flipper Tracker · In development                 │
│                         Vechi Bun · Prototype                            │
│                                                                          │
│                         GET IN TOUCH                                     │
│                         contact@0xhuo.dev                                │
│                                                                          │
│  © 2026 0xhuo                                               Romania     │
└──────────────────────────────────────────────────────────────────────────┘
```

The full-width header and footer frame a 44rem content column. The inner reading area is 40rem after desktop gutters. Project cards form a compact 2×2 index, with no featured-card hierarchy and no marketing-style hero.

## Homepage — mobile

```text
┌──────────────────────────────┐
│ [mark] 0xhuo        [theme]  │
│                              │
│ ([mark])                     │
│ Hey, I’m 0xhuo.              │
│ Short profile copy           │
│ [View projects] [Send email] │
│                              │
│ PROJECTS                     │
│ ┌ AtlasEnergie · status  ┐   │
│ │ outcome                │   │
│ └────────────────────────┘   │
│ ┌ busapp · status        ┐   │
│ │ outcome                │   │
│ └────────────────────────┘   │
│ ┌ Licto · status         ┐   │
│ │ outcome                │   │
│ └────────────────────────┘   │
│ ┌ Orion Grid · status    ┐   │
│ │ outcome                │   │
│ └────────────────────────┘   │
│                              │
│ WHAT I DO                    │
│ label     description        │
│ ...                          │
│                              │
│ IN THE LAB                   │
│ two compact entries          │
│                              │
│ GET IN TOUCH                 │
│ contact@0xhuo.dev            │
│                              │
│ © 2026 0xhuo       Romania  │
└──────────────────────────────┘
```

At widths below 40rem the project index becomes one column. The 16px outer gutter remains constant; no element uses `100vw`, and all controls keep a 44px target.

## Case-study template

```text
┌──────────────────────────────────────────────────────┐
│ [mark] 0xhuo / Work                         [theme]  │
│                                                      │
│ 01 / TYPE                                            │
│ Project name                                         │
│ One-line outcome                                     │
│ ───────────────────────────────────────────────────  │
│ Status        value                                  │
│ Domain        value                                  │
│ Role          value                                  │
│ Open live product ↗                                  │
│                                                      │
│ [REAL PRODUCT CAPTURE]                               │
│ caption + snapshot date                              │
│                                                      │
│ OUTCOME                                              │
│ narrative                                            │
│                                                      │
│ CONTEXT                                              │
│ narrative                                            │
│                                                      │
│ CONSTRAINTS / WHAT SHIPPED / SYSTEM / DECISIONS      │
│ one vertical evidence-led document                   │
│                                                      │
│ PROOF / LIMITS / ROLE & STACK                        │
│                                                      │
│ Next system                                      →   │
│                                                      │
│ 0xhuo · Romania · contact@0xhuo.dev        © 2026   │
└──────────────────────────────────────────────────────┘
```

The case document uses the same narrow shell and typography as the homepage. Structured material becomes bordered rows or simple panels; screenshots are evidence, not decoration.

## Responsive checkpoints

| Width | Layout decision |
| --- | --- |
| 320px | one-column cards; compact facts; hidden `/ Work` context if necessary |
| 375–414px | one reading column; 4:3 screenshot crop; inline footer where it fits |
| 640px | homepage project index becomes two columns; case diagrams may use two columns |
| 768–1440px | fixed 44rem shell; outer whitespace grows, type and cards do not inflate |

## Interaction states

- Full project card hit area with visible keyboard focus on the card boundary.
- Underline/colour feedback for text links.
- Background feedback for buttons and theme control.
- Pressed controls move by one pixel.
- Theme preference persists locally and follows the OS until the visitor chooses one.
- Reduced-motion preference removes transition duration.
