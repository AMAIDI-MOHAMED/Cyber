import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon, b as $$Button } from '../../chunks/Layout_hPoMtle4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yhteystiedot - CyberSecurity.fi" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center max-w-4xl mx-auto"> <h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
Ota yhteyttä
</h1> <p class="text-xl text-slate-600 mb-8">
Olemme täällä auttaaksemme sinua tietoturva- ja vaatimustenmukaisuustarpeissasi
</p> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid lg:grid-cols-2 gap-12"> <!-- Contact Details --> <div> <h2 class="text-3xl font-bold text-slate-900 mb-8">
Yhteystiedot
</h2> <div class="space-y-6"> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin", "class": "w-6 h-6 text-teal-600 mt-1" })} <div> <h3 class="font-semibold text-slate-900">Toimisto</h3> <p class="text-slate-600">Helsinki, Suomi</p> </div> </div> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "w-6 h-6 text-teal-600 mt-1" })} <div> <h3 class="font-semibold text-slate-900">Puhelin</h3> <p class="text-slate-600">+358 XX XXX XXXX</p> </div> </div> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "email", "class": "w-6 h-6 text-teal-600 mt-1" })} <div> <h3 class="font-semibold text-slate-900">Sähköposti</h3> <p class="text-slate-600">info@cybersecurity.fi</p> </div> </div> </div> </div> <!-- Contact Form --> <div class="bg-slate-50 rounded-xl p-8"> <h2 class="text-2xl font-bold text-slate-900 mb-6">
Lähetä viesti
</h2> <form class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Nimi *</label> <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"> </div> <div> <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Sähköposti *</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"> </div> <div> <label for="company" class="block text-sm font-medium text-slate-700 mb-1">Yritys</label> <input type="text" id="company" name="company" class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"> </div> <div> <label for="message" class="block text-sm font-medium text-slate-700 mb-1">Viesti *</label> <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea> </div> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "className": "w-full" }, { "default": ($$result3) => renderTemplate`
Lähetä viesti
` })} </form> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/fi/contact.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/fi/contact.astro";
const $$url = "/fi/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
