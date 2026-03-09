# Build from Figma

The designer has provided a Figma link. Your job is to turn it into a production-ready Astro component that matches the design while enforcing `brand.md` as the source of truth.

## Instructions

### Step 1: Pull the Figma design

Use the Figma MCP to retrieve the design from the provided link. Extract:
- The full layer/node hierarchy and structure
- Layout direction, spacing, padding, and alignment (auto-layout properties)
- All text content, font sizes, weights, and styles
- Colors (fills, strokes, backgrounds)
- Border radius, shadows, and effects
- Image/asset references
- Component names and variants (if applicable)
- Responsive behavior hints (constraints, min/max sizes)

Summarize what you see in plain language for the designer: what sections exist, what the layout looks like, and what content is present.

### Step 2: Cross-reference with brand.md

Before writing any code, compare the Figma design values against `brand.md`. Check:

| Figma value | Check against brand.md |
|---|---|
| Colors (hex values) | Map to nearest named palette color (`--color-cobalt`, `--color-keystone`, etc.) or warm gray (`--gray-0` through `--gray-12`) |
| Font families | Must be Commuters Sans (headings) or Geologica (body) |
| Font sizes | Map to `--font-size-*` or `--font-size-heading-*` tokens |
| Font weights | Map to `--font-weight-*` tokens (300, 400, 500, 600, 700, 800) |
| Spacing/padding | Map to `--spacing-*` tokens (4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 112px) |
| Border radius | Map to `--radius-*` tokens (default range: sm 4px to md 8px) |
| Shadows | Map to `--shadow-*` tokens |

**If a Figma value doesn't match a brand.md token**, use the closest brand.md token and note the discrepancy.

Report all conflicts to the designer in a clear list:
> **Brand conflicts found:**
> - Figma uses `#3B5CC6` for the header background → Using `--color-cobalt` (`#2C4AC6`) per brand.md
> - Figma uses 14px border-radius on cards → Using `--radius-md` (8px) per brand.md
> - Figma body text appears to be Inter → Using Geologica Light (300) per brand.md

### Step 3: Build the component

Create an Astro component (`.astro` file) that:

1. **Matches the Figma layout** — structure, hierarchy, and content should be faithful to the design
2. **Uses brand.md tokens** — all colors, fonts, spacing, radii, and shadows use CSS custom properties or Tailwind classes mapped to the token system
3. **Is responsive** — implement mobile-first per brand.md breakpoints (`--to-sm`, `--sm`, `--md`, `--lg`, `--xl`, `--2xl`)
4. **Is accessible** — semantic HTML, proper heading hierarchy, alt text, focus states, 44px touch targets, color contrast (Cobalt on white = 5.3:1 AA, Keystone on white = 12.5:1 AAA)
5. **Uses the right type styles** — reference the type styles table in brand.md (Headline, Subhead, Eyebrow, Body, CTA)

Place the component in the appropriate directory within the project's component structure.

### Step 4: Preview with Playwright

Before reporting to the designer, take a quick screenshot of your work:

1. Ensure the dev server is running (`npm run dev` or `astro dev`)
2. `browser_navigate` → the route where the component is rendered (e.g., `http://localhost:4321`)
3. `browser_resize` → `{ "width": 1440, "height": 900 }`
4. `browser_take_screenshot` → `{ "fullPage": true, "raw": true }`

Glance at the screenshot yourself. If you see anything obviously broken (white screen, missing sections, layout collapse), fix it before showing the designer.

### Step 5: Tell the designer what you built

After creating the component, give the designer:
1. **What you built**: A one-sentence description
2. **Where the file is**: The file path
3. **How to preview it**: How to see it in the browser (e.g., which route or page to visit)
4. **Brand conflicts**: Reiterate any places where you overrode Figma values with brand.md values
5. **Questions**: Anything ambiguous in the design that you made a judgment call on

Then ask: *"Want me to review the output against the Figma design, or does this look good?"*
