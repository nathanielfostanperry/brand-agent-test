# Principal Mineral Brand Guidelines

**Status**: 🔄 Draft
**Last Updated**: 2026-02-23
**Version**: 1.1
**Source**: Principal Mineral Brand Guidelines (January 2026); extends Identity Design Review (December 17, 2025)
**Extends**: docs/design/design-principles.md

---

## Brand Overview

### Mission

Principal Mineral develops and scales domestic production of strategic metals, high-performance alloys, and advanced materials. Serving the critical minerals industry as a manufacturer, distributor, and broker, Principal Mineral is reducing foreign dependencies and single points of failure in America's most critical supply chains.

### Brand Positioning

Principal Mineral walks a deliberate line:

- **A young company, built by deeply credentialed and proven veterans.** Not a startup pitching futures — a team that has already done the work.
- **Industrial ambition, without the arrogance of a fund-first approach.** Not private equity extracting value — builders creating capability.
- **Nationally vital, but not overly militarized.** American purpose without performative patriotism.
- **Flexible and scalable, yet capable today.** Real operations, not vaporware.

### Brand Personality

**Adjectives**: Trusted, Strategic, Resilient, Capable, Experienced, Unwavering, Mission-aligned

**Tone**: Confident and direct without being aggressive. Industrial and authentic — never corporate-speak or financial jargon. Shows capability through clarity, not volume. Steady hands solving hard problems without drama.

**Audience**:

- **Defense & Government**: National security stakeholders evaluating domestic supply chain partners
- **Energy & Manufacturing**: Industrial buyers committing to long-term material supply relationships
- **Technology**: Advanced materials consumers in semiconductors, batteries, aerospace
- **Investors**: Capital partners who need to distinguish real industrial capability from vaporware
- **Portfolio Companies**: Brands operating under the Principal Mineral platform

### Creative Strategy Pillars

**1. Symbolic Strength**
This isn't a brand that needs to shout. What matters is trust, clarity, and showing you know how things work. The identity signals capability, not flash. Steady hands and an experienced team well-equipped to solve hard problems without drama.

**2. Future-Proof for Growth**
Principal Mineral isn't tied to one material, facility, or project. It's a growing system of operations and partnerships. The brand is flexible enough to carry that growth — not locked into one story, but consistent across many.

**3. Modern American Industrial**
Principal Mineral operates in real-world systems — industrial, national, complex. The brand reflects that. It feels American, but not performative. Built to serve defense, energy, tech, and manufacturing with a clear sense of purpose and scale.

---

## Visual Identity

### Color Palette

> **Project Strictness**: 🔴 HIGH — Use only the named palette colors. These were refined through two rounds of stakeholder review. The original copper/earth tones were replaced with oxide reds for a clearer red/white/blue expression with Keystone (dark navy) as the anchor.

#### Primary Colors

```css
/* Cobalt — Primary brand blue */
--color-cobalt: #2c4ac6;
```

- **Usage**: Primary brand color, CTAs, links, active states, brand moments
- **Strictness**: 🔴 HIGH
- **CMYK**: 93, 78, 0, 0 (print)
- **PANTONE**: 2728 C
- **Contrast**: 5.3:1 on white (passes AA), 3.9:1 on Nickel

```css
/* Keystone — Dark navy anchor */
--color-keystone: #1f285f;
```

- **Usage**: Dark backgrounds, headings on light backgrounds, footer, high-contrast text
- **Strictness**: 🔴 HIGH
- **CMYK**: 98, 95, 30, 20 (print)
- **PANTONE**: 2119 C
- **Contrast**: 12.5:1 on white (passes AAA), 10.3:1 on Nickel

#### Secondary Colors (UI / Digital)

> ⚠️ **Note**: The January 2026 Brand Guidelines PDF defines the primary palette as navy, royal blue, light gray, and white, and the secondary palette as copper and earth tones. Oxide and Stratum below are from the December 2025 identity and are retained for digital/UI accents (CTAs, alerts, errors). Confirm with stakeholders if these should remain or be phased out.

```css
/* Oxide — Brand red */
--color-oxide: #c53131;
```

- **Usage**: Accents, emphasis, secondary CTAs, alerts, important callouts
- **Strictness**: 🔴 HIGH
- **CMYK**: 16, 95, 90, 5
- **Contrast**: 5.1:1 on white (passes AA)

```css
/* Stratum Red — Deep red */
--color-stratum: #6b0303;
```

- **Usage**: Dark red accents, hover states on Oxide, rich background treatment
- **Strictness**: 🔴 HIGH
- **CMYK**: 33, 100, 100, 49
- **Contrast**: 11.2:1 on white (passes AAA)

#### Light / Neutral Colors

```css
/* Powder Blue — Light blue */
--color-powder: #bfcff7;
```

- **Usage**: Tinted backgrounds, subtle highlights, light surface treatments, info states
- **Strictness**: 🟡 MEDIUM
- **CMYK**: 24, 15, 0, 0 (print)
- **PANTONE**: 2120 C

```css
/* Nickel — Near-white neutral */
--color-nickel: #edeceb;
```

- **Usage**: Page backgrounds, cards, subtle borders, neutral surfaces
- **Strictness**: 🟡 MEDIUM
- **CMYK**: 3, 3, 6, 7 (print)
- **PANTONE**: Warm Gray 1 CP

#### Semantic Color Mapping

```css
--color-success: #10b981; /* Green — positive outcomes */
--color-warning: #fbbf24; /* Amber — caution states */
--color-error: var(--color-oxide); /* Oxide red — errors, destructive actions */
--color-info: var(--color-cobalt); /* Cobalt — informational states */
```

> ⚠️ **Needs Confirmation**: Success, warning colors are proposed defaults. Confirm with stakeholders whether these should align more closely with the brand palette or remain standard semantic colors.

#### Neutral Palette (Warm Gray Scale)

Grays are shifted warm to harmonize with the Nickel (#EDECEB) brand neutral. The existing starter's pure-neutral grays should be replaced with these warm-tinted values.

```css
--gray-0: #ffffff; /* Pure white */
--gray-1: #f5f4f2; /* Near-white warm */
--gray-2: #edeceb; /* Nickel (brand neutral) */
--gray-3: #dddbd9; /* Light warm gray */
--gray-4: #c5c3c0; /* Mid-light warm gray */
--gray-5: #aba9a6; /* Mid warm gray */
--gray-6: #8b8986; /* True mid warm gray */
--gray-7: #706e6b; /* Mid-dark warm gray */
--gray-8: #5c5a57; /* Dark warm gray */
--gray-9: #46443f; /* Near-dark warm gray */
--gray-10: #312f2c; /* Very dark warm gray */
--gray-11: #1c1b19; /* Near-black warm */
--gray-12: #0a0a09; /* Near-black */
```

**Key mapping**: `--gray-2` aligns with Nickel (#EDECEB) from the brand palette, anchoring the scale.

**Strictness**: 🔴 HIGH — Use these values; do not mix with pure-neutral grays

#### Secondary Palette (Illustrations & Occasional Highlights)

Per the January 2026 guidelines, the secondary palette consists of copper and brown earth tones. Use sparingly in illustrations and occasional highlights.

```css
/* Copper */
--color-copper: #b65b48;
```

- **CMYK**: 23, 76, 89, 12 | **PANTONE**: 7592 C

```css
/* Earth */
--color-earth: #6b2d15;
```

- **CMYK**: 37, 77, 78, 44 | **PANTONE**: 175 C

**Gradient**: Cobalt to Keystone — approved for backgrounds and large-format applications.

#### Supporting Accent (website-colors PDF)

From the website-colors PDF; use for eyebrows, links, and highlights when a lighter blue than Cobalt is desired.

```css
/* Highlight — Lighter blue accent */
--color-highlight: #4c7fe8;
```

- **Usage**: Eyebrows, links, highlights (optional; Cobalt remains primary for CTAs and primary links)
- **Strictness**: 🟡 MEDIUM — confirm with stakeholders if aligning with PDF

#### UI / Text Colors (website-colors PDF)

For cross-reference with the official website-colors PDF. The **warm gray scale** above is the canonical neutral system for design tokens; these hex values are for matching the PDF when needed.

| Name                | Hex       | Use |
| ------------------- | --------- | --- |
| **Black**           | `#1E1E1E` | Strong text, headings on light |
| **Gray**            | `#85858A` | Muted UI text |
| **Body (on white)** | `#75757A` | Body copy on white background |
| **Body (on nickel)** | `#646468` | Body copy on Nickel (#EDECEB) background |
| **Light gray**      | `#D9D9D9` | Borders, dividers, subtle UI |

#### Print Reference (Quick Reference)

Use **RGB** in digital; use **CMYK** and **Pantone** for print.

| Name        | RGB (hex) | CMYK (approx) | Pantone   |
| ----------- | --------- | ------------- | --------- |
| Keystone    | `#1F285F` | 98, 95, 30, 20 | 2119 C   |
| Cobalt      | `#2C4AC6` | 93, 78, 0, 0  | 2728 C   |
| Nickel      | `#EDECEB` | 3, 3, 6, 7    | Warm Gray 1 C |
| Powder Blue | `#BFCFF7` | 24, 15, 0, 0  | 2120 C   |
| Oxide       | `#C53131` | 16, 95, 90, 5 | —        |
| Stratum Red | `#6B0303` | 33, 100, 100, 49 | —     |
| Copper      | `#B65B48` | 23, 76, 89, 12 | 7592 C   |
| Earth       | `#6B2D15` | 37, 77, 78, 44 | 175 C    |

#### Color Palette Summary

| Name        | Hex       | Role                           | Usage                               |
| ----------- | --------- | ------------------------------ | ----------------------------------- |
| Cobalt      | `#2C4AC6` | Primary                        | CTAs, links, active states, brand   |
| Keystone    | `#1F285F` | Primary Dark                   | Headings, dark backgrounds, footer  |
| Oxide       | `#C53131` | Secondary                      | Accents, emphasis, alerts           |
| Stratum Red | `#6B0303` | Secondary Dark                 | Deep accents, hover states          |
| Powder Blue | `#BFCFF7` | Light Accent                   | Tinted backgrounds, info highlights |
| Highlight   | `#4C7FE8` | Supporting (PDF)               | Eyebrows, links, highlights (optional) |
| Nickel      | `#EDECEB` | Neutral                        | Page backgrounds, cards, surfaces   |
| Copper      | `#B65B48` | Secondary (print/illustration) | Sparingly in illustrations          |
| Earth       | `#6B2D15` | Secondary (print/illustration) | Sparingly in illustrations          |
| White       | `#FFFFFF` | Base                           | Primary backgrounds, text on dark   |

#### Implementation

- **CSS variables**: See `src/styles/variables/_colors.pcss` and `src/styles/themes/` for design tokens. Map palette colors to `--color-*` (e.g. `--color-cobalt`, `--color-keystone`) and use those in components.
- **Usage**: Prefer `var(--color-*)` over raw hex in components. Do not hard-code palette hex values.
- **Contrast**: Use Keystone/Cobalt on Nickel or white for text; use white or Nickel for text on Keystone/Cobalt. See contrast notes in each color above.

---

### Typography

> Source: Principal Mineral Brand Guidelines (January 2026); Identity deck slide 33. Type styles: [`principal-mineral-website-typography.pdf`](./principal-mineral-website-typography.pdf).

**January 2026 specification**: Use **Commuters Sans ExtraBold** for headlines and labels, and **Geologica Light** for body copy.

#### Font Stack

```css
/* HEADINGS — Commuters Sans (Dharma Type) */
--font-headings: "Commuters Sans", system-ui, -apple-system, sans-serif;

/* BODY — Geologica (Google Fonts, variable) */
--font-body: "Geologica", system-ui, -apple-system, sans-serif;

/* FALLBACK when Adobe Fonts unavailable — open-source alternative to Commuters Sans */
--font-headings-fallback: "Montserrat", system-ui, -apple-system, sans-serif;

/* MONOSPACE (if needed) */
--font-mono: "Fira Code", "Courier New", Consolas, monospace;
```

**Commuters Sans** — Bold geometric sans-serif for headings and display text. Designed by Ryoichi Tsunekawa (Dharma Type, 2017). 8 weights + italics (16 styles total).

- **Licensing**: Commercial — licensed via Adobe Fonts (fonts.adobe.com). Web embedding via Adobe Fonts web project.
- **Available Weights**: Thin, ExtraLight, Light, Regular, SemiBold, Bold, ExtraBold, Heavy
- **Recommended for project**: ExtraBold (800) for headlines and labels; Bold (700), SemiBold (600), Regular (400) as needed
- **Fallback**: If no Adobe account, use **Montserrat** (open-source, Google Fonts) as the heading font alternative.

**Geologica** — Humanist-geometric sans-serif for body text and UI. Designed by Monokrom (Sindre Bremnes, Frode Helland). Variable font with Weight, Slant, Sharpness, and Cursive axes.

- **Licensing**: Open-source (OFL-1.1). Free via Google Fonts (fonts.google.com).
- **Available Weights**: Thin (100) through Black (900)
- **Recommended for project**: **Light (300)** for body copy per Jan 2026 guidelines; Regular (400), Medium (500), SemiBold (600), Bold (700) for UI and emphasis

**Strictness**: 🔴 HIGH — Only use fonts from this approved stack

#### Type Scale

> Base size: 16px | Scale ratio: to be confirmed from identity materials

The existing project tokens define a responsive type scale:

```css
/* Body text sizes */
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-md: 1rem; /* 16px — base */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.375rem; /* 22px */
--font-size-2xl: 1.625rem; /* 26px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */

/* Heading sizes */
--font-size-heading-xs: 1.125rem; /* 18px */
--font-size-heading-sm: 1.375rem; /* 22px */
--font-size-heading-md: 1.75rem; /* 28px */
--font-size-heading-lg: 2.25rem; /* 36px */
--font-size-heading-xl: 2.875rem; /* 46px */
--font-size-heading-2xl: 3.75rem; /* 60px */
--font-size-heading-3xl: 4.625rem; /* 74px */
--font-size-heading-4xl: 5.5rem; /* 88px */
```

These scale down on mobile via `@media (--to-sm)`.

**Strictness**: 🔴 HIGH — Only use sizes from this scale

#### Font Weights

```css
--font-weight-light: 300; /* Body copy (Geologica Light) per Jan 2026 guidelines */
--font-weight-normal: 400; /* Body text (Geologica Regular) */
--font-weight-medium: 500; /* UI labels, secondary emphasis (Geologica Medium) */
--font-weight-semibold: 600; /* Subheadings, buttons (both fonts) */
--font-weight-bold: 700; /* Headings, primary CTAs (both fonts) */
--font-weight-extrabold: 800; /* Display headings, labels (Commuters Sans ExtraBold) per Jan 2026 */
```

**Usage Guidelines**:

- **Display / Hero Headings**: Commuters Sans ExtraBold (800) or Bold (700)
- **Section Headings / Labels**: Commuters Sans ExtraBold (800) or Bold (700) per Jan 2026 guidelines
- **Subheadings / UI Labels**: Geologica SemiBold (600) or Medium (500)
- **Body Text**: Geologica Light (300) per Jan 2026 guidelines; Geologica Regular (400) acceptable
- **Buttons / CTAs**: Geologica SemiBold (600)

**Strictness**: 🔴 HIGH

#### Type Styles (from typography PDF)

Reference: [`principal-mineral-website-typography.pdf`](./principal-mineral-website-typography.pdf)

| Style             | Font           | Weight   | Size | Line height | Letter spacing | Case     | Notes                    |
| ----------------- | -------------- | -------- | ---- | ----------- | -------------- | -------- | ------------------------ |
| **Headline**      | Commuters Sans | ExtraBold| 40px | 1.10        | 0              | Sentence | Main page headlines      |
| **Headline (large)** | Commuters Sans | ExtraBold | 65px | 1.00 | 0 | All-Caps | Hero / display |
| **Subhead**       | Commuters Sans | ExtraBold| 24px | 1.10        | 0              | All-Caps | Up to two short lines    |
| **Eyebrow**       | Commuters Sans | ExtraBold| 20px | 1.10        | 0              | All-Caps | Short labels (16px variant in PDF) |
| **Body**          | Geologica      | Light    | 18px | 1.45        | 3              | Sentence | Default body             |
| **Body (large)**  | Geologica      | Light    | 20px | 1.45        | 3              | Sentence | Emphasized body          |
| **CTA**           | Geologica      | Regular  | 18px | 1.45        | 3              | Sentence | One line only            |

- **Text decoration:** None for these styles.
- **Paragraph spacing:** 0 (handled by component/layout).

#### Typography Implementation

- **CSS variables:** Font families and sizes in `src/styles/variables/_fonts.pcss`; theme and base typography in `src/styles/base/_typography.pcss`.
- **Commuters Sans:** Load via Adobe Fonts (e.g. Typekit); fallback to Montserrat if no Adobe account.
- **Geologica:** Load from Google Fonts; variable font supported.
- **Scale mapping:** Map PDF sizes (16px, 18px, 20px, 24px, 40px, 65px) to `--font-size-*` / `--font-size-heading-*` tokens where applicable.

---

### Spacing System

> Implements existing project spacing tokens

#### Spacing Scale

```css
--spacing-none: 0;
--spacing-xs: 0.25rem; /* 4px */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */
--spacing-xl: 2rem; /* 32px */
--spacing-2xl: 3rem; /* 48px */
--spacing-3xl: 4rem; /* 64px */
--spacing-4xl: 5rem; /* 80px */
--spacing-5xl: 6rem; /* 96px */
--spacing-6xl: 7rem; /* 112px */
```

**Common Uses**:

- Component internal padding: `--spacing-md` to `--spacing-lg` (16–24px)
- Element gaps: `--spacing-sm` to `--spacing-md` (8–16px)
- Section vertical spacing: `--spacing-3xl` to `--spacing-5xl` (64–96px)
- Button padding: `--spacing-sm` horizontal, `--spacing-md` vertical

**Strictness**: 🔴 HIGH — Only use tokens from this scale

---

### Layout System

#### Content Widths

```css
--content-width-xs: 350px;
--content-width-sm: 640px;
--content-width-md: 768px;
--content-width-lg: 1024px;
--content-width-xl: 1280px;
--content-width-2xl: 1440px;
--content-width-3xl: 1536px;
```

#### Breakpoints

```css
@custom-media --to-sm (max-width: 639px); /* Mobile */
@custom-media --sm (min-width: 640px); /* Mobile landscape / Small tablet */
@custom-media --to-md (max-width: 767px);
@custom-media --md (min-width: 768px); /* Tablet portrait */
@custom-media --to-lg (max-width: 1023px);
@custom-media --lg (min-width: 1024px); /* Tablet landscape / Desktop */
@custom-media --to-xl (max-width: 1279px);
@custom-media --xl (min-width: 1280px); /* Large desktop */
@custom-media --to-2xl (max-width: 1535px);
@custom-media --2xl (min-width: 1536px); /* Extra large desktop */
```

**Mobile-First Approach**: Design for mobile first, enhance for larger screens.

**Strictness**: 🔴 HIGH

---

### Elevation & Depth

#### Border Radius

```css
--radius-none: 0;
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-3xl: 32px;
--radius-4xl: 64px;
--radius-full: 9999px;
```

**Brand Guidance**: The logo uses a shield/badge form with **softened corners**, not sharp or heavily rounded. Components should mirror this: use `--radius-sm` to `--radius-md` (4–8px) as default. Avoid `--radius-full` pills except for specific UI patterns (tags, avatar badges).

#### Shadow System

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

**Usage**:

- Cards at rest: `--shadow-sm` to `--shadow-md`
- Cards on hover: `--shadow-lg`
- Modals/Dialogs: `--shadow-xl`
- Dropdowns: `--shadow-lg`

**Brand Guidance**: Shadows should be subtle and grounding. This is an industrial brand — depth should feel structural, not decorative.

---

## Logo

### Logo Concept

The Principal Mineral mark is a **shield/badge** form with softened corners. It communicates:

- **A seal of authority** in the strategic materials space (trust, stewardship, standards)
- **A presence marker**: established capability, not extraction
- **Strong American resonance** — eagle reference as a subtle layer, not the headline

#### Mark Construction

| Element         | Symbolism                                                                               |
| --------------- | --------------------------------------------------------------------------------------- |
| **Shield**      | Security, trust, protection, resilience, reliability                                    |
| **Top Half**    | Abstract "P" letterform; references pickaxe or eagle head/beak — American strength      |
| **Bottom Half** | Abstract "M" letterform; references American flag stripes, eagle wings, mining pathways |

The mark was refined in Round 2 to:

- Strengthen the shield/badge shape with softened corners
- Reduce unintended downward directional read while keeping the core structure
- Preserve the top-left corner matching the "P" shape

### Logo Variants (Six Varieties)

The Principal Mineral logo is available in six varieties. Each has specific use cases and color options.

| #   | Variant                | Role                                                                                                                                                                     | Color options                       |
| --- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| 1   | **Horizontal**         | Primary lockup; default across brand communications. Use whenever space allows.                                                                                          | Full Color, Navy, White, Light Blue |
| 2   | **Vertical**           | Secondary; use when vertical space is limited or a stacked format suits the layout.                                                                                      | Full Color, Navy, White, Light Blue |
| 3   | **One-Line**           | Secondary; use in narrow layouts, navigation bars, and horizontal formats where a one-line wordmark improves readability.                                                | Full Color, Navy, White, Light Blue |
| 4   | **Logo Mark**          | Secondary; use when the brand is already established or a simplified, emblem-style application is preferred (e.g. merchandise).                                          | Full Color, Navy, White, Light Blue |
| 5   | **Word Mark**          | Supporting; not for frequent standalone use. Use when simplicity is required (typographic-only), space is extremely limited, or the mark must appear without the symbol. | Navy, White, Light Blue             |
| 6   | **One-Line Word Mark** | Supporting; same use cases as Word Mark in a single-line format.                                                                                                         | Navy, White, Light Blue             |

**Background rules**: Use full-color logos on white or light gray; navy on white, light gray, or light blue; white and light blue on navy or gradient backgrounds. Do not use white or light blue on light backgrounds, or full-color/navy on dark backgrounds.

#### File Formats

| Format   | Use case                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------- |
| **PDF**  | Vector; print production, documents. Preferred for final art to printers.                      |
| **PNG**  | Transparency; web, PowerPoint. Use for digital where transparency is needed.                   |
| **JPEG** | Web photos, email graphics, banner ads; silkscreen requests. Do not scale above original size. |
| **SVG**  | Web (preferred for scalable UI).                                                               |

#### Logo Files (Pending)

The following files need to be added to the project. Replace the Astro starter placeholders currently in these locations.

**SVG (preferred for web):**

| File                      | Path                                        | Description                                                 |
| ------------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| `logo.svg`                | `src/icons/library/logo.svg`                | Primary logo — full color (Cobalt/Keystone) on transparent  |
| `logo-light.svg`          | `src/icons/library/logo-light.svg`          | Light variant — white on transparent (for dark backgrounds) |
| `logo-mark.svg`           | `src/icons/library/logo-mark.svg`           | Shield mark only — full color on transparent                |
| `logo-mark-light.svg`     | `src/icons/library/logo-mark-light.svg`     | Shield mark only — white on transparent                     |
| `logo-wordmark.svg`       | `src/icons/library/logo-wordmark.svg`       | Wordmark only — Keystone on transparent                     |
| `logo-wordmark-light.svg` | `src/icons/library/logo-wordmark-light.svg` | Wordmark only — white on transparent                        |

**Raster (for social/OG/favicon):**

| File            | Path                              | Description                                  |
| --------------- | --------------------------------- | -------------------------------------------- |
| `logo.png`      | `src/assets/images/logo.png`      | Primary logo, 1200×630px (OG image use)      |
| `logo-mark.png` | `src/assets/images/logo-mark.png` | Shield mark, 512×512px (app icon use)        |
| `favicon.svg`   | `public/favicon.svg`              | Shield mark, optimized for 32×32px rendering |

> ⚠️ **Pending**: Logo files will be added later. Once available, also update references in `src/data/seo.json` and `src/data/mainNav.json`.

### Minimum Clear Space

Allow space (padding) on all sides of the logo.

- **Lockups and word marks**: Clear space equal to the height of the **"P"** in "Principal Mineral" on all sides.
- **Logo mark only**: Clear space equal to the central shape's width (**x**) on all sides. Because of the logo's triangular base, optically center using the midpoint.

### Minimum Sizes

Adhere to these minimum sizes in digital and print. The "Principal Mineral" text in the primary lockup is approximately 12pt.

| Variant            | Minimum height (digital) | Minimum height (print) |
| ------------------ | ------------------------ | ---------------------- |
| Horizontal         | 20 px                    | 0.28 in                |
| Vertical           | 48.5 px                  | 0.67 in                |
| One-Line           | 20 px                    | 0.28 in                |
| Logo Mark          | 20 px                    | 0.28 in                |
| Word Mark          | 20 px                    | 0.28 in                |
| One-Line Word Mark | 9 px                     | 0.125 in               |

### Logo Usage Guidelines

**Do**:

- Respect the minimum clear space (see above)
- Use full-color logos on white or light gray backgrounds
- Use navy logos on white, light gray, or light blue backgrounds
- Use white and light blue logos on navy or gradient backgrounds
- Scale proportionally; use approved color variations only

**Don't**:

- Don't adjust the size relationship of any logo elements
- Don't skew, warp, rotate, or change positioning of the logos or elements
- Don't alter the colors of the logos or add effects (drop shadows, outlines, glows)
- Don't use white or light blue logos on light backgrounds
- Don't use full-color or navy logos on dark backgrounds
- Don't combine the mark with other logos in a lockup without approval

### Portfolio Differentiation

The Principal Mineral identity must stand clearly apart from portfolio brands (e.g., Camden Copper). The shield form and Cobalt/Keystone palette establish Principal Mineral as the parent platform. Portfolio brands should use their own distinct marks and color treatments while Principal Mineral maintains visual hierarchy as the overarching entity.

---

## Tone & Voice

### Brand Voice

**Core Characteristics**: Authoritative, Direct, Trustworthy, Substantive, Clear

The voice of Principal Mineral comes from the interview insights:

> "Being trustworthy and authentic is actually really important. And you have to understand the nuance of the industry to gain it."

> "The ambition of the platform needs to be communicated clearly."

### Writing Principles

- **Lead with capability, not claims.** Show what's built, not what's promised.
- **Be specific.** Numbers, materials, facilities, outcomes — not adjectives.
- **Use active voice.** Principal Mineral builds, scales, delivers — not "solutions are provided."
- **Avoid startup/VC language.** No "disrupting," "synergies," "unlocking value." This is industrial.
- **Avoid military cosplay.** American purpose is inherent, not performed. No flags-and-eagles rhetoric.
- **Keep it clear.** Technical accuracy without unnecessary jargon. ~10th grade reading level for public-facing content.

### Tone by Context

| Context                  | Tone                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| **Corporate / About**    | Confident, measured, authoritative. Emphasize track record and team. |
| **Products / Materials** | Technical, precise, solution-oriented. Material specs are clear.     |
| **Investors**            | Substantive, strategic, growth-focused without hype.                 |
| **Government / Defense** | Mission-aligned, capability-focused, security-conscious.             |
| **Careers / Team**       | Purpose-driven, collaborative, building something that matters.      |
| **Errors / Issues**      | Direct, transparent, constructive. Own it, fix it.                   |

### Voice Examples

**Good**:

- "Domestic production of copper foil at commercial scale." (specific, factual)
- "We design and scale bespoke solutions across minerals and materials." (capability-focused)
- "Proven team. Real operations. National impact." (direct, substantive)

**Bad**:

- "Revolutionizing the critical minerals space" (startup-speak)
- "Synergistic supply chain optimization solutions" (jargon)
- "Proudly defending American freedom through minerals" (performative)
- "Unlocking value across the materials ecosystem" (PE-speak)

---

## Imagery

> ⚠️ **Needs Development**: The identity deck included moodboard and mockup slides that were visual-only and could not be extracted from the PDF. The following guidelines are inferred from the creative strategy.

### Photography

**Style**: Documentary, authentic — real facilities, real materials, real people at work
**Mood**: Grounded, purposeful, industrially beautiful. Not sterile or stock-photo clean.
**Subject Matter**:

- Industrial facilities, manufacturing processes, materials at various stages
- Team members in working environments (not posed corporate headshots)
- Raw and processed materials — the tactile, physical reality of the business
- American landscapes where operations take place

**Guidelines**:

- Favor natural and industrial lighting over studio setups
- Show scale — facilities, equipment, operations convey capability
- Authentic color grading aligned with palette (Keystone darks, warm Nickel neutrals)
- Avoid generic stock photography — every image should feel earned

### Illustrations

**Style**: Minimal, technical, diagrammatic
**Color Treatment**: Brand palette only (Cobalt, Keystone, Oxide for emphasis)
**Use Cases**: Supply chain diagrams, process flows, material properties, data visualization

### Icons

**Style**: Outlined, consistent weight
**Base Size**: 24px
**Stroke Weight**: 1.5–2px
**Source**: [Confirm icon set — Lucide, Heroicons, or custom]

**Guidelines**:

- Clean, legible at small sizes
- Consistent style across the full set
- No decorative or illustrative icons — functional and clear

---

## Motion & Animation

### Animation Principles

**Purpose-Driven**: Every animation serves a function — feedback, orientation, or transition
**Restrained**: This is an industrial brand. Animations should feel mechanical and precise, not playful or bouncy.
**Performant**: GPU-accelerated properties only (transform, opacity)

### Timing

```css
--animation-fast: 100ms; /* Immediate feedback (hovers, focus) */
--animation-normal: 200ms; /* Standard transitions (color, border) */
--animation-slow: 500ms; /* Emphasized animations (modals, page transitions) */
```

**Easing**: Use `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state changes. Avoid spring/bounce easing — it conflicts with the brand's measured character.

### Accessibility

**Critical**: Respect `prefers-reduced-motion` preference.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Components

> Implements design-principles.md "Components" section (Strictness: 🟡 MEDIUM)

### Buttons

#### Primary Button

```css
background: var(--color-cobalt);
color: var(--color-white);
padding: var(--spacing-sm) var(--spacing-md);
border-radius: var(--radius-sm);
font-weight: var(--font-weight-semibold);

/* States */
hover: background var(--color-keystone);
active: background var(--color-keystone);
disabled: opacity 50%;
focus: outline 3px solid var(--color-cobalt) with 2px offset;
```

#### Secondary Button

```css
background: transparent;
border: 2px solid var(--color-cobalt);
color: var(--color-cobalt);

hover: background var(--color-powder);
```

#### Danger Button

```css
background: var(--color-oxide);
color: var(--color-white);

hover: background var(--color-stratum);
```

### Input Fields

```css
height: 44px;
padding: var(--spacing-xs) var(--spacing-sm);
border: 2px solid var(--color-gray-300);
border-radius: var(--radius-sm);
font-size: var(--font-size-md);

focus: border-color var(--color-cobalt);
error: border-color var(--color-oxide);
disabled:
  background var(--color-nickel),
  opacity 60%;
```

### Cards

```css
background: var(--color-white);
padding: var(--spacing-lg);
border-radius: var(--radius-md);
border: 1px solid var(--color-nickel);
box-shadow: var(--shadow-sm);

hover: box-shadow var(--shadow-md);
transition: box-shadow var(--animation-normal) ease;
```

---

## Resources

### Design Files

**Brand Guidelines (primary)**: `docs/design/PrincipalMineral_BrandGuidelines_Jan2026.pdf` (January 2026)
**Identity Deck**: `[Shared] Principal Mineral - Identity Design Review.pdf` (December 17, 2025)
**Figma**: [Link to Figma file — confirm]

### Asset Library

**Logos**: `src/assets/images/` (needs Principal Mineral logo files)
**Icons**: `src/icons/` (needs icon set confirmation)

### Code Resources

**Design Tokens**: `src/styles/variables/` (`_colors.pcss`, `_fonts.pcss`, `_spacing.pcss`)
**Theme Files**: `src/styles/themes/` (`_default.pcss`, `_contrast.pcss`)
**Component Library**: `src/components/`

---

## Gaps Requiring Action

### Resolved

| #     | Item                                | Resolution                                                                                                                                              |
| ----- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~1~~ | ~~Typography — font families~~      | Commuters Sans (headings) + Geologica (body) confirmed; Jan 2026: ExtraBold for headlines, Geologica Light for body; Montserrat as open-source fallback |
| ~~2~~ | ~~Neutral gray scale~~              | Warm grays adopted, anchored to Nickel (#EDECEB) at `--gray-2`                                                                                          |
| ~~3~~ | ~~Logo variants and minimum sizes~~ | Six variants and min sizes (20px / 9px one-line word mark) from Jan 2026 PDF documented                                                                 |

### Critical (Blocks Full Implementation)

| #     | Gap                                | Source                | Action                                                         |
| ----- | ---------------------------------- | --------------------- | -------------------------------------------------------------- |
| 1     | **Logo files**                     | Identity deck mockups | Obtain SVG/PNG exports — file names and paths documented above |
| ~~2~~ | ~~**Commuters Sans web license**~~ | ~~Commercial font~~   | Covered by Adobe Creative Cloud subscription                   |

### High Priority

| #   | Gap                               | Source                                      | Action                                                     |
| --- | --------------------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| 3   | **Semantic colors**               | Not in deck                                 | Confirm success/warning colors or adopt proposed defaults  |
| 4   | **Icon set**                      | Not in deck                                 | Select icon library (Lucide, Heroicons, or custom)         |
| 5   | **Dark theme mapping**            | Existing contrast theme needs update        | Map brand palette + warm grays to `_contrast.pcss`         |
| 6   | **Moodboard / imagery direction** | Identity deck slides 3, 14–22 (visual only) | Get image assets or detailed descriptions from design team |

### Nice to Have

| #   | Gap                                          | Notes                                          |
| --- | -------------------------------------------- | ---------------------------------------------- |
| 7   | Photography guidelines with reference images | Inferred from strategy — confirm with examples |
| 8   | Illustration style with examples             | Not in deck                                    |
| 9   | Brand animation patterns                     | Proposed above — confirm with stakeholders     |

---

## Governance

### Update Process

1. Propose change in design review
2. Document rationale for change
3. Update this file with new version number
4. Update design tokens in `src/styles/variables/` and `src/styles/themes/`
5. Communicate changes to team
6. Update component library if needed

### Approval Authority

**Minor Updates** (spacing tweaks, component refinements): Design lead
**Major Changes** (colors, typography, logo usage): Stakeholder approval required

---

## Agent Usage Notes

### For Brand Guardian

- Enforce 🔴 HIGH strictness items: palette colors, font weights, spacing scale
- Flag any hard-coded color values not in the palette
- Verify portfolio brand differentiation (Principal Mineral vs. subsidiary brands)

### For Creative Director

- Reference brand positioning (the "narrow line" Principal Mineral walks)
- Use creative strategy pillars for strategic decisions
- Voice should balance authority with approachability — never vaporware, never cold

### For Art Director

- Shield/badge motif can inform UI patterns (badges, status indicators, section frames)
- Cobalt + Keystone is the primary pairing; Oxide for emphasis only
- Powder Blue for light/informational surfaces; Nickel for neutral backgrounds

### For UI Analyzer

- Validate all colors against the 7-color palette
- Check contrast ratios: Cobalt on White (5.3:1 AA), Keystone on White (12.5:1 AAA)
- Verify border-radius stays within `--radius-sm` to `--radius-md` default range

### For Accessibility Champion

- Minimum contrast: WCAG AA (4.5:1 for text, 3:1 for large text)
- Touch targets: minimum 44px
- Verify `prefers-reduced-motion` is respected in all animations

---

_This brand.md aligns with the Principal Mineral Brand Guidelines (January 2026) and the Identity Design Review (December 2025)._
_Gaps flagged above require stakeholder input before design tokens and themes are updated._
_Last Updated: 2026-02-23_
_Version: 1.1_
