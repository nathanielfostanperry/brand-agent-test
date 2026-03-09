# Brand Audit

Scan the implementation for brand compliance against `brand.md`. This is a code-level audit — not a visual comparison. Use this to catch hard-coded values, wrong tokens, and accessibility issues.

## Instructions

### Step 1: Identify the scope

Determine what to audit:
- If the designer specifies a file or component → audit that file
- If no file is specified → audit the most recently created or modified component(s) in this conversation
- If asked to audit broadly → scan all `.astro` files in `src/components/` and `src/pages/`

### Step 2: Run the audit

Read each file and check for violations across these categories:

#### Colors (Strictness: 🔴 HIGH)

- [ ] **No hard-coded hex colors.** Every color must use `var(--color-*)` or `var(--gray-*)` or the corresponding Tailwind class. Flag any raw hex value.
- [ ] **Only palette colors used.** Check that every color resolves to a named brand color (Cobalt, Keystone, Oxide, Stratum, Powder Blue, Nickel, Highlight, Copper, Earth, White) or the warm gray scale (`--gray-0` through `--gray-12`).
- [ ] **No pure neutral grays.** The project uses warm-tinted grays. Flag any `#808080`, `#ccc`, `#f5f5f5`, `gray-400`, `gray-200`, or similar pure grays.
- [ ] **Semantic colors correct.** Success = `#10b981`, Warning = `#fbbf24`, Error = Oxide, Info = Cobalt.

#### Typography (Strictness: 🔴 HIGH)

- [ ] **Correct font families.** Headings use `var(--font-headings)` / Commuters Sans. Body uses `var(--font-body)` / Geologica. No other font families.
- [ ] **Correct font weights.** Headlines = ExtraBold (800). Body = Light (300) or Regular (400). Buttons = SemiBold (600). No weights outside the defined scale.
- [ ] **Sizes from the token scale.** All font sizes must map to `--font-size-*` or `--font-size-heading-*`. No arbitrary values like `text-[17px]`.
- [ ] **Type styles match brand.md table.** Check that Headline, Subhead, Eyebrow, Body, and CTA elements use the correct combination of font/weight/size/line-height/letter-spacing/case from the type styles table.

#### Spacing (Strictness: 🔴 HIGH)

- [ ] **All spacing uses tokens.** Padding, margin, and gap values must map to `--spacing-*` tokens. Flag arbitrary values like `p-[13px]` or `mt-[22px]`.
- [ ] **Section spacing in range.** Vertical section spacing should be `--spacing-3xl` (64px) to `--spacing-5xl` (96px).
- [ ] **Component padding in range.** Internal component padding should be `--spacing-md` (16px) to `--spacing-lg` (24px).

#### Border Radius (Strictness: 🔴 HIGH)

- [ ] **Default radius is sm to md.** Most components should use `--radius-sm` (4px) to `--radius-md` (8px). Flag anything above `--radius-md` unless it's a tag, badge, or avatar.
- [ ] **No `rounded-full` pills** except on tags, avatar badges, or explicitly approved patterns.

#### Shadows

- [ ] **Uses shadow tokens.** All shadows must use `--shadow-*` tokens. No arbitrary `shadow-[...]` values.
- [ ] **Correct elevation for context.** Cards at rest = sm/md. Cards on hover = lg. Modals = xl. Dropdowns = lg.

#### Accessibility

- [ ] **Color contrast passes WCAG AA.** Text on backgrounds meets 4.5:1 for normal text, 3:1 for large text. Key pairs: Cobalt on white = 5.3:1 ✓, Keystone on white = 12.5:1 ✓, Oxide on white = 5.1:1 ✓.
- [ ] **Touch targets ≥ 44px.** All interactive elements (buttons, links, inputs) have at least 44px tap target.
- [ ] **Semantic HTML.** Proper use of `<section>`, `<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`. Headings in correct hierarchy (no skipping levels).
- [ ] **Alt text on images.** Every `<img>` has a descriptive `alt` attribute.
- [ ] **Reduced motion respected.** Animations wrapped in `prefers-reduced-motion` check or use CSS that respects it.
- [ ] **Input fields have labels.** All form inputs have associated `<label>` elements.

### Step 3: Report

Present the audit results clearly:

> ## Brand Audit: [Component/File Name]
>
> **Score: 8/10** — Mostly compliant. Found 4 issues (2 high, 2 medium).
>
> ### 🔴 Must Fix (brand.md HIGH strictness)
> - **Line 23**: Hard-coded `#2c4ac6` → Use `var(--color-cobalt)` instead
> - **Line 45**: Font weight `font-bold` (700) on headline → Should be `font-extrabold` (800) per brand.md type styles
>
> ### 🟡 Should Fix
> - **Line 67**: Gap value `gap-5` (20px) doesn't match spacing scale → Use `gap-6` (24px / `--spacing-lg`)
> - **Line 12**: Using `rounded-lg` (12px) on card → Brand default is `--radius-md` (8px)
>
> ### ✅ Passing
> - Color palette: All colors from brand palette ✓
> - Typography: Correct font families ✓
> - Accessibility: Semantic HTML, proper heading hierarchy ✓
> - Touch targets: All interactive elements ≥ 44px ✓
>
> *Want me to fix the flagged issues?*
