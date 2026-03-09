# Design System Documentation

**Welcome to the Design System Documentation**

This directory contains design documentation, brand guidelines, and design principles for the Principal Mineral marketing site. Not every referenced document or folder may exist yet; see **Core Documents** and section notes for what is present in this repo.

---

## 📚 Documentation Structure

### Core Documents

| Document                                             | Purpose                                                          | Status                             |
| ---------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------- |
| **[`brand.md`](./brand.md)**                         | Brand guidelines, colors, typography, spacing, components        | 🔄 Draft (needs stakeholder input) |
| **[`design-principles.md`](./design-principles.md)** | Core design philosophy and standards checklist (marketing sites) | ✅ Complete                        |
| **[`AGENTS.md`](../../AGENTS.md)**                   | Project-wide AI/agent guidance (in repo root)                    | ✅ Complete                        |

### Design Reviews

When you add design reviews, store them in **`reviews/`** (create the folder if needed) using this naming convention:

```
YYYY-MM-DD-[feature]-[type].md
```

**Review types:** `creative`, `art`, `compliance`, `ui-analysis`, `accessibility`, `brand-audit`, `workflow-summary`

### Templates

Templates for creating new design documents are in [`templates/`](./templates/):

- **[`template_brand.md`](./templates/template_brand.md)** — Brand guidelines template

### Reference Materials

- **[`stakeholder-interviews.md`](./stakeholder-interviews.md)** — Synthesis and insights from stakeholder interviews (expertise, trust, solutions-provider narrative, market context)
- **[`content-outline.md`](./content-outline.md)** — Content outline and copy doc for the Principal Mineral site; navigation and page-level copy structure
- **[`cloudcannon-rules.md`](./cloudcannon-rules.md)** — CloudCannon CMS integration guidance (collections, inputs, structures, editable regions)
- **[`astro-rules.md`](./astro-rules.md)** — Astro 5+ and Islands Architecture guidance; AI assistant and development rules

---

## 🎨 Design System Overview

### Brand Identity

**Primary Colors:**

- **Cobalt** `#2C4AC6` — Primary brand blue, CTAs, active states
- **Keystone** `#1F285F` — Dark navy anchor, headings, dark backgrounds
- **Oxide** `#C53131` — Brand red, accents, emphasis, alerts
- **Stratum Red** `#6B0303` — Deep red accents, hover states
- **Powder Blue** `#BFCFF7` — Light tinted backgrounds, info highlights
- **Nickel** `#EDECEB` — Near-white neutral, page backgrounds, cards

**Typography:**

- **Headings**: Commuters Sans (Dharma Type) — via Adobe Fonts (Creative Cloud)
- **Body**: Geologica (Google Fonts, OFL-1.1) — free, variable font
- **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)
- **Scale**: Responsive scale from `--font-size-xs` (12px) to `--font-size-heading-4xl` (88px)

**Spacing:**

- **Scale**: `--spacing-xs` (4px) through `--spacing-6xl` (112px)

**Status**: See [`brand.md`](./brand.md) for complete specifications and gaps requiring stakeholder input.

---

## 🤖 Design Agents (Optional)

If your environment uses Cursor design agents (e.g. Brand Guardian, Creative Director, Art Director, UI Analyzer, Accessibility Champion), their commands and workflows may be configured in `.cursor/agents/design/` or via Cursor rules. For general development and AI guidance, see **[AGENTS.md](../../AGENTS.md)** in the project root.

---

## 🚀 Quick Start Guide

### For Developers

1. **Check Brand Guidelines** — Review [`brand.md`](./brand.md) for colors, typography, spacing, and logo usage
2. **Apply Design Principles** — Use [`design-principles.md`](./design-principles.md) for marketing-site standards
3. **Design Tokens** — Colors and themes live in `src/styles/variables/` and `src/styles/themes/` (see [Key Resources](#-key-resources))
4. **Check Design Reviews** — When present, look in `reviews/` for similar features

### For Designers

1. **Understand Brand** — Start with [`brand.md`](./brand.md)
2. **Use Design Principles** — Reference [`design-principles.md`](./design-principles.md) for layout, CTAs, and imagery
3. **Templates** — Use [`templates/template_brand.md`](./templates/template_brand.md) for new brand-related docs
4. **Document Decisions** — Save reviews in `reviews/` with naming `YYYY-MM-DD-[feature]-[type].md` when you add that folder

### For Product / Content

1. **Design Standards** — [`design-principles.md`](./design-principles.md) and [`brand.md`](./brand.md) define how the site should look and feel
2. **Reviews** — When design reviews exist, they live in `reviews/`

---

## 📋 Design System Status

### ✅ Complete

- [x] Design principles documentation ([`design-principles.md`](./design-principles.md), marketing-site focused)
- [x] Brand identity (color palette, logo concept, positioning, voice) in [`brand.md`](./brand.md)
- [x] Brand personality and tone
- [x] Color palette and secondary palette (Copper, Earth, gradient) per Jan 2026 guidelines
- [x] Logo variants, clear space, minimum sizes, and usage (Jan 2026)
- [x] Typography (Commuters Sans, Geologica; Montserrat fallback)
- [x] Warm gray scale anchored to Nickel

### 🔄 In Progress / Gaps

See **[`brand.md`](./brand.md)** “Gaps Requiring Action” for the full list. Summary:

- [ ] **Logo files** — SVG/PNG exports (paths documented in brand.md)
- [ ] **Dark theme mapping** — Map brand palette to `src/styles/themes/_contrast.pcss`
- [ ] **Icon set** — Confirm Lucide, Heroicons, or custom
- [ ] **Semantic colors** — Confirm success/warning defaults

---

## 🔗 Key Resources

### Design Files

- **Brand Guidelines (PDF)**: `docs/design/PrincipalMineral_BrandGuidelines_Jan2026.pdf` (January 2026)
- **Prepared logos**: `public/logos/` — approved logo files (variants, formats) for use across the site
- **Design Tokens**: `src/styles/variables/` — `_colors.pcss`, `_fonts.pcss`, `_spacing.pcss`, `_content-widths.pcss`, etc.
- **Themes**: `src/styles/themes/_default.pcss` (light), `src/styles/themes/_contrast.pcss` (dark)
- **Base styles**: `src/styles/base/`, `src/styles/style.pcss`

### Code Integration

- **Styling**: PostCSS with cascade layers (see root [AGENTS.md](../../AGENTS.md) for layer order)
- **Components**: `src/components/` (building-blocks, navigation, page-sections)
- **Design tokens**: CSS custom properties in `src/styles/variables/` and `src/styles/themes/`

### Standards

- **Accessibility**: WCAG 2.1 Level AA minimum (see [`design-principles.md`](./design-principles.md) and [`brand.md`](./brand.md))

---

## 📖 Documentation Standards

### Naming Conventions

**Design Reviews:**

```
YYYY-MM-DD-[feature]-[type].md
```

**Examples:**

- `2025-11-19-onboarding-review.md`
- `2025-01-27-suppliers-index-creative.md`
- `2025-01-27-suppliers-index-accessibility.md`

### File Organization

- **Core docs**: `docs/design/` (brand.md, design-principles.md, README.md)
- **Reference**: `docs/design/` (stakeholder-interviews.md, content-outline.md, cloudcannon-rules.md, astro-rules.md)
- **Reviews**: `docs/design/reviews/` (create when needed)
- **Templates**: `docs/design/templates/` (template_brand.md)
- **Logo assets**: `public/logos/` (prepared logo files for the site)

### Version Control

- All design documents should be versioned
- Include "Last Updated" date in documents
- Document rationale for major changes

---

## 🎯 Design Principles Summary

[`design-principles.md`](./design-principles.md) defines the marketing-site checklist: visitors first, brand clarity, conversion-oriented design, trust and credibility, accessibility (WCAG AA+), and consistent use of the design system. Use it together with [`brand.md`](./brand.md) for full standards.

---

## 🤝 Contributing

### Adding New Design Reviews

1. Use templates from [`templates/`](./templates/) (e.g. `template_brand.md`)
2. Follow naming: `YYYY-MM-DD-[feature]-[type].md`
3. Save in `reviews/` (create the folder if needed)
4. Reference [`brand.md`](./brand.md) and [`design-principles.md`](./design-principles.md) as needed

### Updating Brand Guidelines

1. Propose change in design review (or stakeholder review)
2. Document rationale
3. Update [`brand.md`](./brand.md) with new version number
4. Update design tokens in `src/styles/variables/` and `src/styles/themes/`
5. Communicate changes to the team

---

## 📞 Getting Help

### Documentation in This Repo

- **Development & patterns**: [AGENTS.md](../../AGENTS.md) (project root)
- **Brand guidelines**: [`brand.md`](./brand.md)
- **Design principles**: [`design-principles.md`](./design-principles.md)
- **Templates**: [`templates/template_brand.md`](./templates/template_brand.md)
- **Reference**: [`stakeholder-interviews.md`](./stakeholder-interviews.md), [`content-outline.md`](./content-outline.md), [`cloudcannon-rules.md`](./cloudcannon-rules.md), [`astro-rules.md`](./astro-rules.md)

### Design Reviews

When the `reviews/` folder exists, use it for creative direction, art direction, brand compliance, UI analysis, and accessibility reviews. Name files `YYYY-MM-DD-[feature]-[type].md`.

---

## 🔄 Maintenance

### Regular Reviews

- **Brand Guidelines**: Review quarterly or as needed
- **Design Reviews**: Archive old reviews, keep active ones accessible
- **Agent System**: Update agent files as capabilities evolve

### Keeping Current

- Update "Last Updated" dates when making changes
- Version documents for major updates
- Document rationale for significant changes
- Keep design reviews organized by date

---

_This README provides an overview of the design system. For specific details, refer to the individual documents referenced above._

**Last Updated**: 2026-02-23
**Version**: 1.2
