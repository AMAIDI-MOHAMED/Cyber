# Project Cleanup & Re-Organization Plan

This document proposes a clear, beginner-friendly structure and what to keep / rename / remove. Implement gradually; test after each step.

---
## 1. Goals
- Single clear navigation component (remove outdated duplicates)
- Logical grouping: layout, global UI, domain data, content, utilities
- Consistent naming (kebab-case for data, PascalCase for components)
- Remove unused / redundant docs & legacy components
- Add guides for editors (already have CLIENT_GUIDE.md)

---
## 2. Current Issues
| Issue | Impact |
|-------|--------|
| Both `NavigationBar.astro` and `Navbar.astro` | Confusing which is in use (BaseLayout imports NavigationBar) |
| `MobileMenu.astro` separate but logic now embedded in `NavigationBar.astro` | Dead / divergent logic risk |
| Mixed placement of navigation helpers (`navigation.ts` + `menu.js`) | Harder for non-dev editors |
| Multiple README/STEP docs under navigation folder | Clutter |
| Unused MegaMenu component folder vs new dynamic menu | Possible duplication |
| Large script inside NavigationBar | Harder to maintain |

---
## 3. Target Structure (after cleanup)
```
src/
  components/
    layout/               # Layout-level wrappers
      BaseLayout.astro
    navigation/           # All nav + breadcrumbs in one place
      NavigationBar.astro
      Breadcrumbs.astro
      menu.config.ts      # Export structured menu object (replaces menu.js)
    footer/
      Footer.astro
      FooterExpanded.astro
    ui/                   # Generic UI primitives
      Button.astro
      icons/
    common/               # Reusable content blocks
      HeroSection parts, FeatureCard, etc.
  content/                # Markdoc content
  data/                   # Domain JSON / static dataset (spreadsheets, whitepapers)
  utils/
    seo.ts
    reading-time.ts
    format.ts (rename utils.ts)
```

---
## 4. Actions To Perform
1. Remove old: `src/components/sections/Navbar.astro`
2. Remove unused: `src/components/navigation/MobileMenu.astro` (logic merged)
3. Remove docs: `src/components/navigation/README_STEP_PLAN.md` (retain NAVIGATION.md at root for devs OR merge key info into CLIENT_GUIDE)
4. Rename folders:
   - Create `src/components/layout/` and move `BaseLayout.astro` there (update import path in pages if using alias; currently `@layout/*` exists)
   - Move footers into `src/components/footer/`
   - Move `Breadcrumbs.astro` into `navigation/`
5. Consolidate menu config:
   - Convert `src/data/menu.js` to TypeScript: `src/components/navigation/menu.config.ts`
   - Export typed structure; update import in `NavigationBar.astro`
6. Simplify `NavigationBar.astro` script:
   - Extract large JS blocks (dropdown + mobile logic) into a progressive enhancement file: `src/components/navigation/nav.client.ts` and load with `<script type="module" src={...} />`
7. Rename `utils/utils.ts` → `utils/format.ts` (update imports)
8. Keep `CLIENT_GUIDE.md`, add link from README.

---
## 5. Non-Destructive Migration Order
Apply in this order to avoid breakage:
1. Add new `menu.config.ts` (export same data) & update import
2. Extract nav JS into `nav.client.ts` and reference it
3. Remove obsolete components (Navbar, MobileMenu)
4. Move Footer & Breadcrumbs & BaseLayout into new folders and adjust path aliases (or extend tsconfig paths if keeping old aliases temporarily)
5. Rename utils file and update imports via search/replace
6. Delete redundant docs

---
## 6. Menu Config Type Example
```ts
// menu.config.ts
export interface MenuItem { label_fi: string; label_en: string; href: string | null; children: MenuItem[]; }
export const menu: MenuItem[] = [ /* copy from existing menu.js */ ];
```

Update in `NavigationBar.astro`:
```diff
-import { menu } from '@data/menu.js';
+import { menu } from '@components/navigation/menu.config';
```
(Adjust alias or relative path.)

---
## 7. Extraction of Navigation Script
Create `nav.client.ts`:
```ts
// Guard repeated init
if (!(window as any).__navInit) {
  (window as any).__navInit = true;
  // Move DOMContentLoaded logic body here (remove wrapper) and call init();
}
```
In component:
```astro
<script type="module" src={Astro.resolve('../navigation/nav.client.ts')} />
```
Remove inline `<script>` once tested.

Benefits:
- Smaller Astro file
- Reusable logic & easier testing

---
## 8. After Cleanup QA Checklist
- [ ] Dev server builds without import errors
- [ ] Desktop dropdown hover & click both work
- [ ] Mobile menu opens/closes, focus trap holds, accordions expand
- [ ] Language toggle still persists
- [ ] All pages render footer & breadcrumbs
- [ ] Lighthouse / performance unchanged or improved

---
## 9. Optional Future Enhancements
- Add unit tests for nav logic using Playwright component tests
- Add ARIA roles for menu navigation (menubar / menuitem semantics) if desired
- Implement smaller CSS file by moving repeated class strings to `@apply` utilities

---
## 10. Rollback Strategy
Each step is independent; commit after every action. If something breaks, revert the last commit only.

---
## 11. Summary
This plan removes redundancy, centralizes navigation, simplifies scripts, and clarifies structure for both developers and content editors.

Proceed when ready; request implementation if you want me to apply these changes automatically.

### Status Update (Navigation Cleanup Completed)
- Replaced BaseLayout with new `layouts/Layout.astro` across pages.
- Removed legacy nav components (NavigationBar, Navbar, old navigation/MobileMenu) and BaseLayout (pending physical deletion if not yet removed).
- Header + MobileMenu now source menu items from `data/menu.js`.
- Docs updated (CLIENT_GUIDE.md) to reflect new structure.

Next optional improvements:
1. Introduce TypeScript type for menu structure (`src/types/menu.ts`).
2. Extract any inline script from `Header.astro` if it grows.
3. Add SEO meta handling back (port selective pieces from old BaseLayout if needed).
4. Remove stale sections referenced only by deleted nav (verify before deletion).
