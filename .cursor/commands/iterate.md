# Iterate on Implementation

Fix the discrepancies found during the most recent `/review`. Work through every issue systematically, then re-verify.

## Instructions

### Step 1: Gather the issue list

Look at the most recent review output in this conversation. If no review has been run yet, tell the designer:
> *"I don't have a review to work from yet. Want me to run `/review` first to identify what needs fixing?"*

Collect every item from the "Must Fix" and "Minor Adjustments" lists.

### Step 2: Fix each issue

Work through the issues **one file at a time** to keep changes clean and trackable. For each fix:

1. **Open the relevant file**
2. **Make the specific change** — use brand.md tokens, not raw values
3. **Briefly note what you changed** in your response

Be precise. If the review says "card grid gap is 16px, should be 24px (`--spacing-lg`)," change exactly that — don't refactor the entire component.

### Step 3: Verify the fixes with Playwright

After all changes are made, take a fresh screenshot to confirm the fixes landed:

**Desktop verification:**
1. `browser_navigate` → `http://localhost:4321` (or the specific route)
2. `browser_resize` → `{ "width": 1440, "height": 900 }`
3. `browser_take_screenshot` → `{ "fullPage": true, "raw": true }`

**Mobile verification (if mobile issues were in the review):**
4. `browser_resize` → `{ "width": 375, "height": 812 }`
5. `browser_take_screenshot` → `{ "fullPage": true, "raw": true }`

Compare the new screenshots against the Figma design data. Confirm each fix is visible and check for regressions — did fixing one thing break another?

If the dev server needs a restart after file changes (rare with Astro's HMR, but possible), restart it before screenshotting.

### Step 4: Summary

Give the designer a clear summary:

> **Changes made:**
> - Updated hero padding from 32px to `--spacing-3xl` (64px) in `Hero.astro`
> - Changed headline weight from `font-bold` to `font-extrabold` (800) in `Hero.astro`
> - Increased card grid gap from `gap-4` to `gap-6` (`--spacing-lg`) in `CardGrid.astro`
> - Updated body text color to `#1E1E1E` in base styles
> - Fixed CTA button border-radius from `rounded-lg` to `rounded-sm` (4px)
>
> **All 5 review items addressed. Want me to run another `/review` to verify, or does this look good?**

### Iteration Loop

If the designer says it still doesn't look right, or runs `/review` again and new issues are found, repeat this process. Typically 2–3 iterations gets to a close match. If you're on iteration 4+, flag it:

> *"We've been through a few rounds — the remaining differences might be sub-pixel or related to browser rendering vs. Figma's renderer. Want to call this good, or should I keep refining?"*
