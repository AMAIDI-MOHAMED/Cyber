import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, e as renderScript } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_hPoMtle4.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$ContactFormAlt = createComponent(($$result, $$props, $$slots) => {
  const formStrings = {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Submit",
    licenseTypeLabel: "License Type",
    licenseTypes: [
      "Essential Edition",
      "Advanced Edition",
      "Subscription License",
      "Other / Unsure"
    ]
  };
  return renderTemplate`${maybeRenderHead()}<form class="p-4"> <div class="space-y-4">  <div class="relative"> <input type="text" id="input-name" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.name, "placeholder")} required aria-labelledby="input-name-label"> <label id="input-name-label" for="input-name" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600">${formStrings.name}</label> </div>  <div class="relative"> <input type="text" id="input-firm" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.company, "placeholder")} required aria-labelledby="input-company-label"> <label id="input-company-label" for="input-firm" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600">${formStrings.company}</label> </div>  <div class="relative"> <input type="email" id="input-email" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.email, "placeholder")} required aria-labelledby="input-email-label"> <label id="input-email-label" for="input-email" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600">${formStrings.email}</label> </div>  <div class="relative"> <select id="license-type" class="peer block w-full rounded-lg border border-transparent p-4 pe-9 text-sm autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6" required aria-labelledby="license-type-label"> ${formStrings.licenseTypes.map((type) => renderTemplate`<option>${type}</option>`)} </select> <label for="license-type" id="license-type-label" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-500">${formStrings.licenseTypeLabel}</label> </div>  <div class="relative"> <textarea id="input-message" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.message, "placeholder")} required aria-labelledby="input-message-label"></textarea> <label id="input-message-label" for="input-message" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600">${formStrings.message}</label> </div> </div>  <div class="mt-8"> <button type="submit" class="inline-flex items-center text-nowrap rounded-lg bg-teal-100 px-6 py-2 font-medium text-slate-700 transition-colors duration-300 hover:bg-teal-700/80 hover:text-white focus:bg-teal-700/80 focus:outline-hidden"> ${formStrings.submit} </button> </div> </form>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/ui/forms/ContactFormAlt.astro", void 0);

const $$RequestQuote = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Request a Quote";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-teal-50 to-white"> <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6"> ${pageTitle} </h1> <p class="text-lg text-slate-600 max-w-2xl mx-auto">
Provide your contact details, the required number of licenses/users, and any
        additional information or questions. We’ll send you a tailored quote promptly.
</p> </div> </section> <section class="bg-linear-to-bl/oklch from-teal-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] px-4 pb-28 pt-48 sm:px-6 lg:px-8"> <div class="mb-10 max-w-2xl lg:mb-14"></div> <div class="w-full lg:w-[48%]"> <div class="rounded-xl bg-teal-400 pb-10 md:order-2 md:pb-0"> ${renderComponent($$result2, "ContactFormAlt", $$ContactFormAlt, {})} </div> </div> </div> </section> ${renderScript($$result2, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/request-quote.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/request-quote.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/request-quote.astro";
const $$url = "/downloads/request-quote";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestQuote,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
