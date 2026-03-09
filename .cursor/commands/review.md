# Review Implementation

Compare the current coded implementation against the original Figma design. Your goal is to identify every visual discrepancy so they can be fixed.

## Instructions

### Step 1: Ensure the dev server is running

Check that the Astro dev server is active. If it's not running, start it:

```
npm run dev
```

Wait for the server to be ready (default: `http://localhost:4321`). If a different port is used, note the actual URL.

### Step 2: Screenshot the implementation with Playwright

Capture the current state at both breakpoints:

**Desktop (1440px):**
1. `browser_navigate` → `http://localhost:4321` (or the specific route, e.g. `/about`)
2. `browser_resize` → `{ "width": 1440, "height": 900 }`
3. `browser_take_screenshot` → `{ "fullPage": true, "raw": true }`

**Mobile (375px):**
4. `browser_resize` → `{ "width": 375, "height": 812 }`
5. `browser_take_screenshot` → `{ "fullPage": true, "raw": true }`

Review both screenshots carefully before proceeding to comparison.

### Step 3: Pull the Figma design for comparison

Use the Figma MCP to re-pull the original design node(s). Extract the same properties you used during the build — layout, spacing, colors, typography, sizing, and content.

If the designer originally provided a specific Figma link or node ID, use that same reference.

### Step 3: Systematic comparison

Compare the implementation against the Figma design across these dimensions. Be specific — vague feedback like "spacing looks off" is not useful. Give exact values.

**Layout & Structure**
- Is the overall page/section structure correct? (correct number of columns, rows, sections)
- Are elements in the right order and hierarchy?
- Is the content width correct relative to the viewport?

**Spacing & Sizing**
- Compare padding and margins on each major element against Figma values (mapped to `--spacing-*` tokens)
- Compare gaps between elements
- Compare element heights and widths
- Check section vertical spacing

**Typography**
- Correct font family on each text element? (Commuters Sans for headings, Geologica for body)
- Correct font weight? (ExtraBold 800 for headlines, Light 300 for body, etc.)
- Correct font size mapped to the `--font-size-*` scale?
- Correct line height and letter spacing per the type styles table?
- Correct text casing? (All-Caps for Subhead and Eyebrow, Sentence case for Headline and Body)

**Color**
- Background colors match (mapped to brand palette)?
- Text colors match?
- Border/stroke colors match?
- Button and CTA colors correct?

**Visual Details**
- Border radius correct (should be `--radius-sm` to `--radius-md` range)?
- Shadows correct (using `--shadow-*` tokens)?
- Any decorative elements, dividers, or background treatments present in Figma but missing in code?
- Image/placeholder sizing and aspect ratios correct?

**Responsive Behavior**
- Compare the mobile screenshot (375px) against Figma's mobile variant (if one exists)
- Check stacking order, font size scaling, and hidden/shown elements at mobile

### Step 4: Optionally check the accessibility tree

Use `browser_snapshot` to get the accessibility tree of the page. Quickly verify:
- Heading hierarchy is correct (h1 → h2 → h3, no skipped levels)
- Interactive elements have accessible names
- Landmark roles are present (`navigation`, `main`, `contentinfo`)

This is a quick sanity check, not a full audit. Flag anything obviously wrong.

### Step 5: Report findings

Present your findings as a prioritized checklist the designer can understand:

**Example output format:**

> ## Review: [Component Name]
>
> **Overall**: The layout structure is solid. Found 6 discrepancies, mostly spacing and typography.
>
> ### Must Fix
> - [ ] Hero section top padding is ~32px, should be `--spacing-3xl` (64px) to match Figma
> - [ ] Headline font weight renders as Bold (700), Figma shows ExtraBold (800) — needs `font-weight: var(--font-weight-extrabold)`
> - [ ] Card grid gap is 16px, Figma shows ~24px — change to `--spacing-lg`
>
> ### Minor Adjustments
> - [ ] Body text color is pure black (#000), should be `#1E1E1E` per brand.md UI text color
> - [ ] CTA button border-radius looks like 12px, should be `--radius-sm` (4px) per brand.md
>
> ### Looks Good
> - ✓ Overall layout structure and hierarchy
> - ✓ Color palette usage (Cobalt, Keystone, Nickel all correct)
> - ✓ Content and copy matches Figma
>
> *Want me to fix these issues? Say "iterate" or run `/iterate`.*
