import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../../chunks/Layout_hPoMtle4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Editions = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "Editions";
  const title = "Essential Edition and Advanced Edition";
  const description = [
    {
      content: "The DataNova Core comes in two editions: Essential and Advanced. Choose the one that fits your goals to unlock your data's full potential. Upgrading is simple when you're ready to grow."
    },
    {
      content: "The <strong>Essential Edition</strong> equips you with robust analytics tools, 30+ statistical models, and 25+ visualization templates to transform insights into action."
    },
    {
      content: "The <strong>Advanced Edition</strong> enhances your capabilities with AI-powered analytics, including automated pattern recognition, anomaly detection, and advanced forecasting tools to keep you ahead of the curve."
    }
  ];
  const comparisonData = [
    {
      feature: "Interactive dashboards for visualization",
      link: "#",
      essential: true,
      advanced: true
    },
    {
      feature: "Advanced AI-driven predictive modeling",
      link: "#",
      essential: false,
      advanced: true
    },
    {
      feature: "Automatic data cleaning and preprocessing",
      essential: true,
      advanced: true
    },
    {
      feature: "Integration with external data sources (APIs, databases)",
      essential: false,
      advanced: true
    },
    {
      feature: "Customizable simulation parameters",
      essential: true,
      advanced: true
    },
    {
      feature: "Real-time collaboration with team members",
      essential: false,
      advanced: true
    },
    {
      feature: "Data import/export in multiple formats (CSV, JSON, etc.)",
      essential: true,
      advanced: true
    },
    {
      feature: "Batch processing for large datasets",
      essential: false,
      advanced: true
    },
    {
      feature: "Custom macro creation for repetitive tasks",
      essential: true,
      advanced: true
    },
    {
      feature: "Scenario analysis and optimization tools",
      essential: true,
      advanced: true
    },
    {
      feature: "Enhanced charting with extended templates",
      essential: true,
      advanced: true
    },
    {
      feature: "Exportable analysis reports with templates",
      essential: true,
      advanced: true
    },
    {
      feature: "Support for cloud-based backups",
      essential: false,
      advanced: true
    }
  ];
  const infoSection = {
    title: "System Requirements",
    description: "Requires Windows 10/11 with Excel 2016, 2019, 2021, or Office 365 (32-bit, 64-bit, or Arm) or macOS 11 (Big Sur) or later.",
    trialInfo: "A 30-day free trial is available for each edition, with no commitment required.",
    buttons: [
      {
        text: "Download the Essential Edition",
        link: "#",
        style: "bg-teal-50 hover:bg-teal-50/70 text-slate-800 focus:bg-teal-50/70"
      },
      {
        text: "Download the Advanced Edition",
        link: "#",
        style: "bg-teal-600 text-white hover:bg-teal-600/80 focus:bg-teal-600/80"
      }
    ]
  };
  const pageTitle = title;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-linear-to-tl/oklch from-teal-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] px-4 pb-12 pt-40 sm:px-6 lg:px-8"> <div class="max-w-7xl"> <div class="mx-auto max-w-2xl lg:mx-0"> <p class="text-base/7 font-medium text-slate-400">${preTitle}</p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h1> ${description.map((desc) => renderTemplate`<p class="mt-8 text-pretty text-lg font-medium text-slate-700 sm:text-xl/8"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(desc.content)}` })} </p>`)} </div> </div> </div> </section> <section class="bg-linear-to-bl/oklch from-teal-200 via-transparent to-white"> <div class="relative mx-auto max-w-[60rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="hidden py-2 md:block"> <div class="grid grid-cols-4 gap-6"> <div class="col-span-1 col-start-3 mx-auto"> <h3 class="text-center text-lg font-medium text-slate-800">
Essential Edition
</h3> </div> <div class="col-span-1 mx-auto"> <h3 class="text-center text-lg font-medium text-slate-800">
Advanced Edition
</h3> </div> </div> </div> <div class="space-y-4 md:space-y-0"> ${comparisonData.map((item) => renderTemplate`<ul class="grid md:grid-cols-4 md:gap-6"> <li class="pb-1.5 md:col-span-2 md:py-3"> <span class="flex items-center font-medium text-slate-700 md:font-normal"> ${item.link ? renderTemplate`<a${addAttribute(item.link, "href")} target="_blank" rel="noopener noreferrer" class="transition-color group inline-flex items-center gap-x-1 duration-300 hover:text-slate-500"> ${item.feature}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "info", "class": "transition-color size-5 shrink-0 text-slate-800 duration-300 group-hover:text-slate-500" })} </a>` : item.feature} </span> </li> <li${addAttribute(`col-span-1 border-b border-slate-200 py-1.5 md:py-3`, "class")}> <div class="grid grid-cols-2 sm:grid-cols-4 md:flex"> <span class="self-end text-slate-500 sm:col-span-2 md:hidden">
Essential Edition
</span> <span class="place-self-center md:mx-auto"> ${item.essential ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "size-5 shrink-0 text-teal-700" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "minus", "class": "size-5 shrink-0 text-slate-400" })}`} </span> </div> </li> <li${addAttribute(`col-span-1 border-b border-slate-200 py-1.5 md:py-3`, "class")}> <div class="grid grid-cols-2 sm:grid-cols-4 md:flex"> <span class="self-end text-slate-500 sm:col-span-2 md:hidden">
Advanced Edition
</span> <span class="place-self-center md:mx-auto"> ${item.advanced ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "size-5 shrink-0 text-teal-700" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "minus", "class": "size-5 shrink-0 text-slate-400" })}`} </span> </div> </li> </ul>`)} </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="grid divide-y divide-dashed divide-slate-400 rounded-3xl bg-teal-300 px-5 py-5 shadow-xl lg:grid-cols-2 lg:divide-x lg:divide-y-0"> <div class="content-center py-5 sm:p-5"> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800"> ${infoSection.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700"> ${infoSection.description} </p> </div> <div class="py-5 sm:p-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "info", "class": "size-8" })} <p class="mb-8 mt-6 text-pretty text-lg/8 text-slate-700 sm:mb-10"> ${infoSection.trialInfo} </p> <div class="mx-auto flex flex-col gap-4 sm:flex-row sm:justify-center"> ${infoSection.buttons.map((button) => renderTemplate`<a${addAttribute(button.link, "href")}${addAttribute(`mx-auto flex w-full items-center justify-center rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold transition duration-300 focus:outline-hidden sm:w-1/2 ${button.style}`, "class")}> ${button.text} </a>`)} </div> </div> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/editions.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/editions.astro";
const $$url = "/downloads/editions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Editions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
