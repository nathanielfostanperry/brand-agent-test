# Marketing Website Design Checklist

## I. Core Design Philosophy & Strategy

- [ ] **Visitors First:** Prioritize clarity of value proposition, trust, and ease of scanning. Every element should help visitors understand, believe, or act.
- [ ] **Brand Clarity:** Present a consistent, memorable brand. Voice, visuals, and tone should align and feel intentional across the site.
- [ ] **Conversion-Oriented:** Design with clear paths to primary actions (sign-up, contact, demo, purchase). CTAs should be visible, understandable, and low-friction.
- [ ] **Trust & Credibility:** Use social proof, clear copy, and professional presentation to build confidence. Avoid clutter and gimmicks that undermine trust.
- [ ] **Speed & Performance:** Design for fast load times and smooth scrolling. Optimize images and critical path; performance directly affects bounce and conversion.
- [ ] **Simplicity & Clarity:** One primary idea per section. Clear headlines, scannable copy, and obvious next steps. Reduce cognitive load.
- [ ] **Consistency:** Maintain a uniform design language (colors, typography, components, patterns) across all pages and templates.
- [ ] **Accessibility (WCAG AA+):** Design for inclusivity. Sufficient color contrast, keyboard navigation, focus states, and screen reader compatibility. Accessible forms and CTAs.
- [ ] **SEO-Friendly Structure:** Use semantic HTML, clear heading hierarchy, and meaningful link text so content is findable and understandable to both users and crawlers.

## II. Design System Foundation (Tokens & Core Components)

- [ ] **Define a Color Palette:**
  - [ ] **Primary Brand Color:** Used for logos, key CTAs, and accent elements.
  - [ ] **Secondary/Accent Color:** For links, highlights, and secondary buttons.
  - [ ] **Neutrals:** A scale of grays (5–7 steps) for text, backgrounds, borders, and subtle UI.
  - [ ] **Semantic Colors:** Success (confirmations, positive feedback), Error (form errors, alerts), Warning (cautions). Use sparingly on marketing pages.
  - [ ] **Optional Dark Mode:** If the brand supports it, define an accessible dark palette for key pages or components.
  - [ ] **Accessibility Check:** All text/background combinations meet WCAG AA contrast ratios.
- [ ] **Establish a Typographic Scale:**
  - [ ] **Primary Font Family:** Choose a readable, on-brand font for headings (and optionally a complementary font for body).
  - [ ] **Modular Scale:** Define sizes for H1 (hero), H2 (section titles), H3–H4 (subsections), Body Large, Body (default), Body Small/Caption.
  - [ ] **Font Weights:** Use a limited set (e.g., Regular, Medium, SemiBold, Bold) for hierarchy and emphasis.
  - [ ] **Line Height & Measure:** Generous line height for body (e.g., 1.5–1.7); comfortable line length (e.g., 45–75 characters) for readability.
- [ ] **Define Spacing Units:**
  - [ ] **Base Unit:** Establish a base (e.g., 8px).
  - [ ] **Spacing Scale:** Use multiples for section padding, margins, and component spacing (e.g., 16px, 24px, 32px, 48px, 64px, 96px for section rhythm).
- [ ] **Define Border Radii:**
  - [ ] **Consistent Values:** Small radii for inputs and buttons; medium for cards and CTAs. Align with brand (sharp vs. rounded).
- [ ] **Develop Core Marketing Components (with states: default, hover, active, focus, disabled):**
  - [ ] **Buttons:** Primary CTA, secondary, tertiary/ghost, link-style; with optional icons.
  - [ ] **Forms (Lead/Contact):** Text inputs, textarea, select, checkbox (e.g., consent). Clear labels, placeholders, helper text, error messages, and success states.
  - [ ] **Cards:** Feature cards, testimonial cards, pricing cards, image+text blocks.
  - [ ] **Navigation:** Header (with optional mega menu or dropdowns), footer, mobile menu. Clear hierarchy and touch targets.
  - [ ] **CTAs & Banners:** Prominent call-to-action blocks; optional sticky or inline banners.
  - [ ] **Icons:** Single, consistent icon set (SVG preferred) for UI and decorative use.
  - [ ] **Badges/Tags:** For labels (e.g., “New,” “Popular”), categories, or status.
  - [ ] **Images & Media:** Guidelines for aspect ratios, overlays, and captions to keep visuals on-brand.

## III. Layout, Visual Hierarchy & Structure

- [ ] **Responsive Grid System:** Use a responsive grid (e.g., 12-column) for consistent alignment and breakpoint behavior across devices.
- [ ] **Strategic White Space:** Use ample spacing between sections and elements to improve clarity, focus, and perceived quality.
- [ ] **Clear Visual Hierarchy:** Guide the eye with typography (size, weight, color), spacing, and placement. One clear focal point per section.
- [ ] **Above-the-Fold:** Hero or first section should communicate who you are and what you offer, with a clear primary CTA when appropriate.
- [ ] **Scroll Flow:** Order sections logically (e.g., problem → solution → proof → CTA). Use section titles and contrast to create rhythm.
- [ ] **Content Width:** Constrain long-form text and key content to a readable width (e.g., max-width container); allow full-bleed for impact where needed.
- [ ] **Mobile-First:** Design for small screens first; enhance for tablet and desktop. Touch targets large enough (e.g., 44px min); navigation and forms usable on all devices.

## IV. Marketing-Specific Section Design

### A. Heroes & Landing Headlines

- [ ] **Single Clear Message:** One main headline and one primary CTA. Supporting subtext should clarify, not compete.
- [ ] **Visual Impact:** Strong imagery or video that supports the message without overwhelming copy.
- [ ] **CTA Visibility:** Primary button or link is obvious and actionable (contrast, size, placement).
- [ ] **Responsive Behavior:** Headlines and CTAs scale and stack appropriately; imagery crops or swaps for mobile if needed.

### B. Call-to-Action (CTA) Sections

- [ ] **Clear Intent:** Copy explains the benefit of the action (e.g., “Get the guide,” “Start free trial”).
- [ ] **Low Friction:** Only ask for what’s needed; reduce form fields when possible.
- [ ] **Consistent Placement:** Repeat primary CTAs in logical places (end of sections, sticky header, footer) without feeling spammy.
- [ ] **Contrast & Hierarchy:** Primary vs. secondary CTAs are visually distinct; one primary action per block.

### C. Trust & Social Proof

- [ ] **Testimonials & Quotes:** Clear attribution (name, role, company/photo when appropriate). Layout is scannable (cards, carousel, or grid).
- [ ] **Logos & Partners:** Use recognizable logos where permitted; keep sizing and grayscale/color consistent.
- [ ] **Credentials & Badges:** Certifications, awards, or security badges placed where they support trust (e.g., near sign-up or footer).
- [ ] **Avoid Clutter:** Fewer, stronger proof points beat long lists of weak ones.

### D. Forms (Lead Capture, Contact)

- [ ] **Labels & Instructions:** Every field has a visible label; placeholders complement, not replace, labels. Helper text for complex fields.
- [ ] **Validation & Errors:** Inline or near-field error messages; clear success state (e.g., thank-you message or redirect).
- [ ] **Privacy & Consent:** Checkboxes and links for terms/privacy are visible and accessible.
- [ ] **Mobile-Friendly:** Large touch targets; appropriate input types (e.g., email, tel) and optional autocomplete attributes.

### E. Navigation & Footer

- [ ] **Header:** Logo, primary links, and main CTA are easy to find. Consider sticky header for long pages; ensure it doesn’t obscure content.
- [ ] **Footer:** Key links (product, company, legal, contact), optional newsletter sign-up, and social links. Structured and consistent across pages.
- [ ] **Mobile Navigation:** Hamburger or similar pattern is recognizable; menu opens/closes clearly; no critical links buried.

## V. Interaction Design & Motion

- [ ] **Purposeful Motion:** Use subtle animation for hovers, focus states, and section reveals. Motion should support hierarchy and feedback, not distract.
- [ ] **Performance:** Prefer CSS transforms and opacity; avoid layout-thrashing animations. Respect `prefers-reduced-motion` where possible.
- [ ] **Loading & Feedback:** Clear loading states for form submission and any dynamic content; success/error feedback is immediate and visible.
- [ ] **Keyboard & Focus:** All interactive elements (links, buttons, form fields) are keyboard accessible with visible focus styles.
- [ ] **Links vs. Buttons:** Use links for navigation, buttons for actions (submit, sign up). Style them consistently with the design system.

## VI. CSS & Styling Architecture

- [ ] **Choose a Scalable Approach:**
  - [ ] **Utility-First (e.g., Tailwind):** Define design tokens in config; apply via utilities. Good for consistency and iteration.
  - [ ] **Component + Tokens (e.g., BEM + variables):** Use a structured naming system and shared variables for colors, spacing, typography.
- [ ] **Integrate Design Tokens:** Colors, fonts, spacing, and radii should be centralized and used across components.
- [ ] **Layers & Specificity:** Use cascade layers or a clear convention so base, components, and overrides don’t conflict.
- [ ] **Performance:** Optimize CSS delivery; avoid unused styles; consider critical CSS for above-the-fold content.

## VII. General Best Practices

- [ ] **Iterative Design & Testing:** Test key flows (e.g., sign-up, contact) with real users; use analytics to refine placement and copy.
- [ ] **Clear Information Architecture:** Organize content and navigation so visitors can find product info, pricing, and next steps quickly.
- [ ] **Responsive Design:** Site is fully usable and on-brand on phones, tablets, and desktops.
- [ ] **Documentation:** Keep design system and component usage documented so marketing pages stay consistent and maintainable.
