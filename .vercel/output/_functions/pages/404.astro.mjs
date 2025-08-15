import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_hPoMtle4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const seo = {
    title: "Page Not Found - CyberSecurity Finland",
    description: "Sorry, we couldn't find the page you're looking for. Explore our cybersecurity resources or go back to the homepage."
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    name: "Page Not Found",
    description: "Sorry, we couldn't find the page you're looking for. Explore our cybersecurity resources or go back to the homepage.",
    isPartOf: {
      "@type": "WebSite",
      url: `${Astro2.site}`,
      name: "CyberSecurity Finland",
      description: "CyberSecurity Finland provides comprehensive cybersecurity compliance services including ISO 27001, NIS2, GDPR, and DORA implementation for Finnish organizations."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found", "seo": seo, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24"> <div class="mx-auto max-w-xl px-4 text-center"> <h1 class="text-5xl font-bold tracking-tight text-slate-900 mb-6">404</h1> <p class="text-lg text-slate-600 mb-8">Page not found.</p> <a href="/" class="inline-flex items-center gap-2 rounded bg-teal-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Go Home</a> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/404.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
