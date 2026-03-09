# Brand Visual Reference — Principal Mineral
_Brand Guardian reference file. Load when checking colors, typography, spacing, or component specs._

---

## Color Palette

### Approved Colors (complete list)

| Token | Name | Hex | Role | Strictness |
|-------|------|-----|------|-----------|
| `--color-cobalt` | Cobalt | `#2C4AC6` | Primary brand blue — CTAs, links, active states | 🔴 HIGH |
| `--color-keystone` | Keystone | `#1F285F` | Dark navy — headings, dark backgrounds, footer | 🔴 HIGH |
| `--color-oxide` | Oxide | `#C53131` | Brand red — accents, emphasis, alerts, errors | 🔴 HIGH |
| `--color-stratum` | Stratum Red | `#6B0303` | Deep red — hover states on Oxide, rich backgrounds | 🔴 HIGH |
| `--color-powder` | Powder Blue | `#BFCFF7` | Light blue — tinted backgrounds, info highlights | 🟡 MEDIUM |
| `--color-highlight` | Highlight | `#4C7FE8` | Supporting blue — eyebrows, links, lighter blue accents | 🟡 MEDIUM |
| `--color-nickel` | Nickel | `#EDECEB` | Neutral — page backgrounds, cards, surfaces | 🟡 MEDIUM |
| `--color-copper` | Copper | `#B65B48` | Secondary — illustrations and occasional highlights only | 🟡 MEDIUM |
| `--color-earth` | Earth | `#6B2D15` | Secondary — illustrations and occasional highlights only | 🟡 MEDIUM |
| — | White | `#FFFFFF` | Base — primary backgrounds, text on dark | 🔴 HIGH |

### Warm Gray Scale (canonical neutral system)

| Token | Hex | Notes |
|-------|-----|-------|
| `--gray-0` | `#FFFFFF` | Pure white |
| `--gray-1` | `#F5F4F2` | Near-white warm |
| `--gray-2` | `#EDECEB` | **Nickel** (brand neutral anchor) |
| `--gray-3` | `#DDDBD9` | Light warm gray |
| `--gray-4` | `#C5C3C0` | Mid-light warm gray |
| `--gray-5` | `#ABA9A6` | Mid warm gray |
| `--gray-6` | `#8B8986` | True mid warm gray |
| `--gray-7` | `#706E6B` | Mid-dark warm gray |
| `--gray-8` | `#5C5A57` | Dark warm gray |
| `--gray-9` | `#46443F` | Near-dark warm gray |
| `--gray-10` | `#312F2C` | Very dark warm gray |
| `--gray-11` | `#1C1B19` | Near-black warm |
| `--gray-12` | `#0A0A09` | Near-black |

**Rule**: Use warm grays only. Do not mix with pure-neutral gray scales (e.g., Tailwind default grays like `#6B7280`).

### Validation Rules

- Any hex value not in the approved palette = 🔴 FLAG
- Hard-coded hex in component code instead of CSS variable = 🔴 FLAG
- Pure-neutral grays (not warm-shifted) = 🔴 FLAG
- Copper/Earth used outside of illustrations = ⚠️ FLAG (Medium: confirm use case)
- Oxide used for anything other than emphasis/alerts/errors = ⚠️ FLAG

### Approved Color Combinations

| Background | Text/Foreground | Contrast | Use |
|-----------|----------------|---------|-----|
| White | Keystone | 12.5:1 (AAA) | Body copy, headings |
| White | Cobalt | 5.3:1 (AA) | CTAs, links |
| Nickel | Keystone | 10.3:1 (AAA) | Body on neutral |
| Dark (Keystone bg) | White | 12.5:1 (AAA) | Reversed sections |

---

## Typography

### Approved Fonts

| Font | Use | Weight | Strictness |
|------|-----|--------|-----------|
| **Commuters Sans** | Headlines, subheads, eyebrows, labels | ExtraBold (800) primary | 🔴 HIGH |
| **Geologica** | Body copy, UI, CTAs | Light (300) for body | 🔴 HIGH |
| **Montserrat** | Fallback for Commuters Sans only (no Adobe Fonts) | — | 🟡 MEDIUM |

Any font outside this list = 🔴 FLAG.

### Type Styles (from typography PDF)

| Style | Font | Weight | Size | Line Height | Letter Spacing | Case |
|-------|------|--------|------|-------------|---------------|------|
| Headline (large) | Commuters Sans | ExtraBold | 65px | 1.00 | 0 | ALL-CAPS |
| Headline | Commuters Sans | ExtraBold | 40px | 1.10 | 0 | Sentence |
| Subhead | Commuters Sans | ExtraBold | 24px | 1.10 | 0 | ALL-CAPS |
| Eyebrow | Commuters Sans | ExtraBold | 20px (16px variant) | 1.10 | 0 | ALL-CAPS |
| Body (large) | Geologica | Light | 20px | 1.45 | 3 | Sentence |
| Body | Geologica | Light | 18px | 1.45 | 3 | Sentence |
| CTA | Geologica | Regular | 18px | 1.45 | 3 | Sentence |

### Font Weight Rules

| Token | Value | Use |
|-------|-------|-----|
| `--font-weight-light` | 300 | Body copy (Geologica Light) |
| `--font-weight-normal` | 400 | Body text, CTAs |
| `--font-weight-medium` | 500 | UI labels, secondary emphasis |
| `--font-weight-semibold` | 600 | Subheadings, buttons |
| `--font-weight-bold` | 700 | Headings, primary CTAs |
| `--font-weight-extrabold` | 800 | Display headings, labels (Commuters Sans) |

---

## Spacing System

### Spacing Scale

| Token | Value | Use |
|-------|-------|-----|
| `--spacing-none` | 0 | — |
| `--spacing-xs` | 4px | Tight inline gaps |
| `--spacing-sm` | 8px | Component internal padding |
| `--spacing-md` | 16px | Standard gaps |
| `--spacing-lg` | 24px | Section spacing |
| `--spacing-xl` | 32px | Layout spacing |
| `--spacing-2xl` | 48px | Large section gaps |
| `--spacing-3xl` | 64px | Page-level gaps |
| `--spacing-4xl` | 96px | Hero/major section gaps |
| `--spacing-5xl` | 128px | Maximum spacing |

**Rule**: Use only tokens from this scale. Arbitrary px values = 🔴 FLAG (for consistent spacing units).

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Buttons, inputs, small elements |
| `--radius-md` | 8px | Cards, modals, medium components |
| `--radius-lg` | 16px | Large containers, feature sections |
| `--radius-xl` | 24px | Decorative/large radius uses |
| `--radius-full` | 9999px | Pills, circular badges |

**Default range**: `--radius-sm` to `--radius-md` for most components.

---

## Animation Rules

**Brand character**: Mechanical and precise — not playful or bouncy.

| Token | Duration | Use |
|-------|----------|-----|
| `--animation-fast` | 100ms | Hover, focus |
| `--animation-normal` | 200ms | Color, border transitions |
| `--animation-slow` | 500ms | Modals, page transitions |

**Easing**: `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state changes. **No spring/bounce easing** — conflicts with brand character.

**Accessibility**: Must respect `prefers-reduced-motion`.

---

## Component Specs (Quick Reference)

### Primary Button
```
background: --color-cobalt
color: white
padding: --spacing-sm --spacing-md
border-radius: --radius-sm
font-weight: --font-weight-semibold
hover: background --color-keystone
```

### Secondary Button
```
background: transparent
border: 2px solid --color-cobalt
color: --color-cobalt
hover: background --color-powder
```

### Danger Button
```
background: --color-oxide
hover: background --color-stratum
```

### Cards
```
background: white
padding: --spacing-lg
border-radius: --radius-md
border: 1px solid --color-nickel
box-shadow: --shadow-sm
hover: box-shadow --shadow-md
```

---

## Semantic Color Mapping

```
success:  #10B981 (green — confirm with stakeholders)
warning:  #FBBF24 (amber — confirm with stakeholders)
error:    --color-oxide (#C53131)
info:     --color-cobalt (#2C4AC6)
```

Note: Success and warning colors are proposed defaults pending stakeholder confirmation. Flag if used without confirmation.

---

## Validation Checklist

When auditing a design or component:

- [ ] All colors in approved palette?
- [ ] No hard-coded hex values (use CSS variables)?
- [ ] No pure-neutral (cool-toned) grays?
- [ ] Cobalt on White ≥ 5.3:1? Keystone on White ≥ 12.5:1?
- [ ] Only Commuters Sans + Geologica (or Montserrat fallback)?
- [ ] Heading font is ExtraBold (800)?
- [ ] Body font is Light (300)?
- [ ] Spacing uses only scale tokens?
- [ ] Border radius within sm–md default range?
- [ ] No spring/bounce animations?
- [ ] `prefers-reduced-motion` respected?
- [ ] Touch targets ≥ 44px?
