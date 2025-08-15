import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, e as renderScript } from '../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../chunks/Layout_hPoMtle4.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const formStrings = {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit"
  };
  return renderTemplate`${maybeRenderHead()}<form class="p-4" aria-labelledby="form-title">  <fieldset class="space-y-4"> <legend id="form-title" class="sr-only">${formStrings.submit}</legend>  <div class="relative"> <input type="text" id="input-name" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.name, "placeholder")} required aria-required="true" aria-labelledby="input-name-label"> <label id="input-name-label" for="input-name" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.name} </label> </div>  <div class="relative"> <input type="email" id="input-email" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.email, "placeholder")} required aria-required="true" aria-labelledby="input-email-label" aria-invalid="false"> <label id="input-email-label" for="input-email" class="pointer-events-none absolute start-0 top-0 h-full w-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.email} </label> </div>  <div class="relative"> <textarea id="input-message" class="peer block w-full rounded-lg border border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-teal-700/80 focus:pb-2 focus:pt-6 focus:outline-hidden focus:ring-2 focus:ring-teal-700/80 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6"${addAttribute(formStrings.message, "placeholder")} required aria-required="true" aria-labelledby="input-message-label"></textarea> <label id="input-message-label" for="input-message" class="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-slate-600 transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-slate-600 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600"> ${formStrings.message} </label> </div> </fieldset>  <div class="mt-8"> <button type="submit" class="inline-flex items-center text-nowrap rounded-lg bg-teal-100 px-6 py-2 font-medium text-slate-700 transition-colors duration-300 hover:bg-teal-700/80 hover:text-white focus:bg-teal-700/80 focus:outline-hidden"${addAttribute(formStrings.submit, "aria-label")}> ${formStrings.submit} </button> </div> </form>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/ui/forms/ContactForm.astro", void 0);

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const addressHeading = "Our address:";
  const emailHeading = "Contact us by email:";
  const knowledgeBaseHeading = "Knowledge base";
  const contactDetails = {
    addressLine1: "1234 1st Ave Ste 300",
    addressLine2: "Seattle, WA 98104, USA",
    email: "info@datanova.com"
  };
  const knowledgeBaseDetails = {
    description: "Browse through all of our knowledge base articles.",
    linkText: "Search the knowledge base",
    linkUrl: "/support/knowledge-base"
  };
  const title = "Contact us";
  const subTitle = "Questions, Comments or Feedback.";
  ({
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    isPartOf: {
      url: `${Astro2.site}`}
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 pb-28 pt-48 sm:px-6 lg:px-8"> <div class="mb-10 max-w-3xl lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h2> <p class="ml-1 mt-1 text-slate-600">${subTitle}</p> </div> <div class="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16"> <div class="mb-10 rounded-xl bg-teal-400 pb-10 md:order-2 md:mb-0 md:pb-0"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> <div class="space-y-14"> <div class="flex gap-x-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} <div class="grow"> <h4 class="font-semibold text-slate-600">${addressHeading}</h4> <address class="mt-1 text-sm not-italic text-slate-500"> ${contactDetails.addressLine1} <br> ${contactDetails.addressLine2} </address> </div> </div> <div class="flex gap-x-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "email", "class": "size-6 shrink-0 text-slate-600" })} <div class="grow"> <h4 class="font-semibold text-slate-600">${emailHeading}</h4> <a class="mt-1 text-sm text-slate-500 transition-colors duration-300 hover:text-slate-400 focus:text-slate-400 focus:outline-hidden"${addAttribute(`mailto:${contactDetails.email}`, "href")}> ${contactDetails.email} </a> </div> </div> <div class="flex gap-x-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "info", "class": "size-6 shrink-0 text-slate-600" })} <div class="grow"> <h4 class="font-semibold text-slate-600">${knowledgeBaseHeading}</h4> <p class="mt-1 text-sm text-slate-500"> ${knowledgeBaseDetails.description} </p> <p class="mt-2"> <a class="group inline-flex items-center gap-x-2 text-sm font-medium text-slate-600 decoration-2 transition duration-300 hover:underline focus:underline focus:outline-hidden"${addAttribute(knowledgeBaseDetails.linkUrl, "href")}> ${knowledgeBaseDetails.linkText} ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight" })} </a> </p> </div> </div> </div> </div> </div> ${renderScript($$result2, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
