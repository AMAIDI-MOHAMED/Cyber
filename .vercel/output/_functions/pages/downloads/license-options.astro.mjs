import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_hPoMtle4.mjs';
export { renderers } from '../../renderers.mjs';

const $$LicenseOptions = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "License Options";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-teal-50 to-white"> <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">${pageTitle}</h1> <p class="text-lg text-slate-600 max-w-2xl mx-auto">Content coming soon.</p> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/license-options.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/license-options.astro";
const $$url = "/downloads/license-options";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LicenseOptions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
