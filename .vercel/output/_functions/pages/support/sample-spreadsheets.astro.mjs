import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_hPoMtle4.mjs';
import { a as getCollection } from '../../chunks/_astro_content_JtomFrSD.mjs';
export { renderers } from '../../renderers.mjs';

const pageContent = {
  pageTitle: "Sample Spreadsheets",
  tableHeadings: {
    name: "Spreadsheet",
    details: "Description",
    action: "Action"
  },
  actionLabel: "Download"
};
const $$SampleSpreadsheets = createComponent(async ($$result, $$props, $$slots) => {
  const spreadsheets = await getCollection("spreadsheets");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sample Spreadsheets" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-teal-50 to-white"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.pageTitle} </h1> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8"> <div class="flex flex-col"> <div class="overflow-x-auto"> <div class="inline-block p-1.5 align-middle lg:w-4/5"> <table class="divide-y divide-slate-300 divide-dashed"> <thead> <tr> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500">${pageContent.tableHeadings.name}</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-slate-500">${pageContent.tableHeadings.details}</th> <th scope="col" class="px-6 py-3 text-end text-xs font-medium uppercase text-slate-500">${pageContent.tableHeadings.action}</th> </tr> </thead> <tbody class="divide-y divide-slate-300 divide-dashed"> ${spreadsheets.map((item) => renderTemplate`<tr class="transition duration-150 hover:bg-slate-100"> <td class="whitespace-normal px-6 py-4 text-base font-medium text-slate-800"> ${item.data.title} </td> <td class="whitespace-normal px-6 py-4 text-base text-slate-800">${unescapeHTML(item.data.description)}</td> <td class="whitespace-nowrap px-6 py-4 text-end text-sm font-medium"> <a${addAttribute(item.data.url, "href")} class="inline-flex items-center gap-x-2 text-teal-700 transition-colors duration-300 hover:text-teal-800 focus:outline-hidden"> ${pageContent.actionLabel} </a> </td> </tr>`)} </tbody> </table> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/support/sample-spreadsheets.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/support/sample-spreadsheets.astro";
const $$url = "/support/sample-spreadsheets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SampleSpreadsheets,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
