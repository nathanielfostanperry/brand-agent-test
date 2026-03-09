---
name: add-tailwind
description: Adds Tailwind CSS v4 to a project using the zero-config format (no tailwind.config file). Use when the user runs /add-tailwind or asks to add Tailwind v4, install Tailwind, or set up Tailwind in this project.
---

# Add Tailwind CSS v4

Adds [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4) using the simplified setup: no `tailwind.config` file, automatic content detection, and a single CSS import.

## Quick steps

1. **Install packages**
   ```bash
   npm i tailwindcss @tailwindcss/postcss
   ```

2. **Wire PostCSS**
   - If no PostCSS config exists, create `postcss.config.js` (or `postcss.config.mjs`):
     ```js
     export default {
       plugins: ["@tailwindcss/postcss"],
     };
     ```
   - If a config already exists (e.g. `postcss.config.cjs`), add the plugin to the `plugins` array:
     ```js
     require("@tailwindcss/postcss")
     ```
   - Place `@tailwindcss/postcss` after `postcss-import` (if present) so Tailwind runs on the resolved CSS.

3. **Import Tailwind in CSS**
   - In the project’s main stylesheet, add:
     ```css
     @import "tailwindcss";
     ```
   - **Order**: In CSS, `@import` must come before other rules. If the file already has `@import`s (e.g. variables, base styles), add `@import "tailwindcss";` **after** those imports and **before** any other rules.

   **Example** (imports first, then Tailwind):
   ```css
   @import "_variables.pcss";
   @import "_theme.pcss";

   @import "tailwindcss";
   ```

4. **No config file**
   - Do not create `tailwind.config.js`. v4 uses automatic content detection and optional CSS-based config.

## Optional: explicit content sources

If some template files are not scanned (e.g. in a monorepo or non-standard layout), add `@source` in the same CSS file, after `@import "tailwindcss";`:

```css
@import "tailwindcss";

@source "../packages/ui/**/*.tsx";
```

Paths are relative to the CSS file. Only add `@source` when automatic detection misses files.

## Vite projects

For Vite, the first-party plugin can be used instead of PostCSS:

```bash
npm i tailwindcss @tailwindcss/vite
```

In `vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), /* ... */],
});
```

CSS stays the same: `@import "tailwindcss";` in the main stylesheet. No `tailwind.config` file.

## Framework notes

- **Astro**: Use the PostCSS approach. Add `@tailwindcss/postcss` to the existing PostCSS config (e.g. in `astro.config.mjs` or `postcss.config.cjs`) and `@import "tailwindcss";` in the global stylesheet, after other `@import`s.
- **Next.js**: Use PostCSS; ensure the main CSS file that imports Tailwind is imported in the app (e.g. in `app/layout.js` or `pages/_app.js`).
- **Remix / SvelteKit / others**: Same pattern: install `tailwindcss` and `@tailwindcss/postcss`, add the plugin to PostCSS, then `@import "tailwindcss";` in the main CSS (after other `@import`s).

## Checklist

- [ ] `tailwindcss` and `@tailwindcss/postcss` (or `@tailwindcss/vite`) installed
- [ ] PostCSS config includes `@tailwindcss/postcss` (or Vite config includes `@tailwindcss/vite`)
- [ ] Main CSS file contains `@import "tailwindcss";` after any other `@import`s
- [ ] No `tailwind.config.js` or `tailwind.config.mjs` created
- [ ] Main CSS file is imported by the app (layout/entry)
