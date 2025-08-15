# Project Guide (Client Version)

Keep this document for non-technical editors. It explains only what you need to update content and run the site.

---
## 1. Running the Site Locally

Prerequisites:
- Install Node.js (https://nodejs.org) LTS version.

Steps:
1. Download (or clone) the project folder.
2. Open a terminal inside the project root (where `package.json` is).
3. Install dependencies:
```
npm install
```
4. Start the local server:
```
npm run dev
```
5. Open the shown URL (usually http://localhost:4321) in your browser.
6. Stop the server any time with CTRL + C in the terminal.

---
## 2. Editing Text & Pages

Most page content lives in:
- `src/pages/` → Individual pages (e.g. `about.astro`, `contact.astro`).
- `src/content/articles/` → Article / blog style content (Markdoc `.mdoc` files).
- `src/content/reference/` → Reference style entries.

Simple Edits:
1. Open the file that matches the page URL. Example: `/about` = `src/pages/about.astro`.
2. Change the visible text inside the HTML / component tags.
3. Save the file – the browser refreshes automatically.

Articles:
- Each article is a `.mdoc` file in `src/content/articles/`.
- Edit the frontmatter (top between `---`) for `title`, `description`, etc.
- Write body content in Markdown.

Reference Entries:
- Same idea as articles but inside `src/content/reference/`.

Breadcrumbs:
- Generated automatically from the URL path – no manual edit needed.

---
## 3. Editing the Menu (Navigation)

Main navigation items are defined in:
- `src/data/menu.js`

Each item has Finnish and English labels:
```
{
  label_fi: "PALVELUT",
  label_en: "SERVICES",
  href: "/services",
  children: [ ... ]
}
```
To Add a New Top Item:
1. Add a new object to the array with both languages.
2. Set `href` to the page path (create a page under `src/pages/` if needed).
3. Use `children: []` if it has no submenu.

To Add a Dropdown Item:
- Put objects inside `children`.
- For group headings in the Services mega menu use `href: null` and a `children` array of service links.

---
## 4. Editing Footer Links

Footer content is in the components:
- `src/components/sections/Footer.astro`
- (Optional alternative) `src/components/sections/FooterExpanded.astro`

Find the link blocks and change text or URLs directly. Save to update.

---
## 5. Editing Images

Images live in: `src/assets/images/` (and subfolders).
Steps to Replace an Image:
1. Keep the same filename to avoid updating code references OR
2. Add a new file and update the `<img src="...">` or component prop where it is used.
3. Use `.webp` or `.png` for best results.

Favicons / App Icons:
- Located in `public/` (e.g. `icon.svg`, `icon-512.png`). Replacing these updates the deployed site automatically.

---
## 6. Language (FI / EN)

The site detects Finnish pages by the `/fi` prefix. To create a Finnish page:
1. Copy an existing page (e.g. `about.astro`) to a folder: `src/pages/fi/about.astro`.
2. Adjust its content to Finnish.
3. Add / verify Finnish labels in `menu.js`.

---
## 7. Buttons / Calls To Action (CTA)

Primary & secondary CTAs in the navigation are set in `NavigationBar.astro` near the top:
```
const primaryCTA = { text: 'Free Assessment', href: '/contact?assessment=true' }
const secondaryCTA = { text: 'Download ISO Toolkit', href: '/resources/templates-toolkits' }
```
Update the `text` or `href` to change them.

---
## 8. Site Settings / SEO

Global metadata and fonts are set in:
- `src/layout/BaseLayout.astro`

Page-specific SEO:
- Pass a `seo` object to the layout inside a page if needed (ask a developer if unsure).

---
## 9. Building for Production

When you are ready to build a deployable version:
```
npm run build
```
Output goes to `.vercel/` (for Vercel server output) or the adapter's target.
To preview the production build locally:
```
npm run preview
```

---
## 10. Cleaning Unused Files (Developer Note)

Potential removals (only if not referenced):
- Legacy `Navbar.astro` (use `NavigationBar.astro` instead)
- Any unused mega menu config under `src/utils/megaMenu/`
- Placeholder images in `src/assets/images/` not used on pages

Always search the project before deleting a file.

---
## 11. Common Problems

| Issue | Fix |
|-------|-----|
| Changes not showing | Make sure dev server is running (`npm run dev`). |
| Menu item not appearing | Check `menu.js` syntax (commas, brackets). |
| 404 for new page | Ensure the file exists in `src/pages/` and restart dev server. |
| Wrong language | Confirm `/fi/` prefix and Finnish labels are added. |

---
## Navigation

The site now uses `src/components/Header.astro` + `src/components/MobileMenu.astro` inside the global `src/layouts/Layout.astro`.

Legacy files removed:
- `src/layout/BaseLayout.astro`
- `src/components/sections/NavigationBar.astro`
- `src/components/sections/Navbar.astro`
- `src/components/navigation/MobileMenu.astro`

Update CTAs or menu labels in `src/components/Header.astro` (for structural tweaks) and the data-driven items in `src/data/menu.js`.

---
Need more help? Provide this repo to a developer and reference this guide.
