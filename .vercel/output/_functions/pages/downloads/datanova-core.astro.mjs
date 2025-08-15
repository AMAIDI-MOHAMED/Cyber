import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../../chunks/Layout_hPoMtle4.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$DatanovaCore = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "Download";
  const title = "Download a fully functional trial version of the DataNova Core";
  const subTitle = "The DataNova Core comes in two editions: Essential and Advanced. Choose the one that fits your goals to unlock your data's full potential. Upgrading is simple when you're ready to grow.";
  const compareLinkTitle = "Compare editions & features";
  const compareLink = "editions";
  const compareLinkAriaLabel = "Explore the detailed feature comparison of the Essential and Advanced Editions of DataNova Core.";
  const essentialTier = {
    title: "Essential Edition",
    description: "Unlock your data\u2019s potential with robust analytics tools, including 30+ statistical models and 25+ visualization templates to turn insights into action.",
    cta: {
      text: "Download Essential",
      link: "#"
    }
  };
  const advancedTier = {
    title: "Advanced Edition",
    description: "Experience unparalleled AI-powered analytics with automated pattern recognition, anomaly detection, and advanced forecasting tools to stay ahead.",
    cta: {
      text: "Download Advanced",
      link: "#"
    }
  };
  const smallInfoSection = {
    intro: {
      text: "Try both editions free for 30 days \u2014 no commitment or personal info required."
    },
    links: [
      {
        text: "View the end-user license agreement (EULA)",
        href: "#",
        ariaLabel: "View the end-user license agreement (EULA)"
      },
      {
        text: "Install / uninstall instructions",
        href: "editions",
        ariaLabel: "Install & uninstall instructions"
      }
    ]
  };
  const largeInfoSection = {
    olderReleases: {
      title: "Older Releases",
      content: "Access older versions of DataNova Core below:",
      versions: [
        {
          version: "5.x - Essential Edition",
          href: "#"
        },
        {
          version: "5.x - Advanced Edition",
          href: "#"
        },
        {
          version: "4.x - Essential Edition",
          href: "#"
        },
        {
          version: "4.x - Advanced Edition",
          href: "#"
        },
        {
          version: "3.x - Essential Edition",
          href: "#"
        },
        {
          version: "3.x - Advanced Edition",
          href: "#"
        }
      ]
    },
    systemRequirements: {
      title: "System Requirements",
      content: "Requires Windows 10/11 with Excel 2016, 2019, 2021, or Office 365 (32-bit, 64-bit, or Arm) or macOS 11 (Big Sur) or later."
    },
    excel2003: {
      title: "Excel 2003",
      content: "Excel 2003 isn\u2019t supported. Use version 3 links below for compatibility.",
      versions: [
        {
          version: "3.x - Essential Edition",
          href: "#"
        },
        {
          version: "3.x - Advanced Edition",
          href: "#"
        }
      ]
    }
  };
  const pageTitle = title;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-lqjgtpbw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-40 sm:px-6 lg:px-8" data-astro-cid-lqjgtpbw> <div class="max-w-7xl" data-astro-cid-lqjgtpbw> <div class="mx-auto max-w-2xl lg:mx-0" data-astro-cid-lqjgtpbw> <p class="text-base/7 font-medium text-slate-400" data-astro-cid-lqjgtpbw>${preTitle}</p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-lqjgtpbw> ${title} </h1> <p class="mt-8 max-w-xl text-pretty text-lg font-medium text-slate-700 sm:text-xl/8" data-astro-cid-lqjgtpbw> ${subTitle} </p> <a class="group mt-5 inline-flex items-center justify-center gap-x-2 text-center font-medium text-slate-700 shadow-lg shadow-transparent transition duration-300 hover:text-slate-400 focus:outline-hidden"${addAttribute(compareLink, "href")} target="_blank"${addAttribute(compareLinkAriaLabel, "aria-label")} data-astro-cid-lqjgtpbw> ${compareLinkTitle} ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight", "data-astro-cid-lqjgtpbw": true })} </a> </div> </div> </section> <section class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 px-4 sm:mt-20 md:px-0 lg:max-w-4xl lg:grid-cols-2 lg:gap-y-0" data-astro-cid-lqjgtpbw> <div class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-slate-900/10 sm:p-10 lg:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none" data-astro-cid-lqjgtpbw> <h3 class="text-3xl font-semibold text-slate-600" data-astro-cid-lqjgtpbw> ${essentialTier.title} </h3> <p class="mt-8 text-base/6 text-slate-600 sm:mt-10" data-astro-cid-lqjgtpbw> ${essentialTier.description} </p> <a${addAttribute(essentialTier.cta.link, "href")}${addAttribute(essentialTier.title, "aria-describedby")} class="mt-8 block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold ring-1 ring-inset ring-teal-700 transition duration-300 hover:bg-teal-700/80 hover:text-white focus:bg-teal-700 focus:text-white focus:outline-hidden sm:mt-10" data-astro-cid-lqjgtpbw>${essentialTier.cta.text}</a> </div> <div class="relative flex flex-col justify-evenly rounded-3xl bg-teal-700 p-8 shadow-2xl ring-1 ring-teal-900/10 sm:p-10 lg:h-[120%]" data-astro-cid-lqjgtpbw> <h3 class="text-4xl/7 font-semibold text-teal-100" data-astro-cid-lqjgtpbw> ${advancedTier.title} </h3> <p class="mt-8 text-lg/6 text-teal-50 sm:mt-10" data-astro-cid-lqjgtpbw> ${advancedTier.description} </p> <a${addAttribute(advancedTier.cta.link, "href")}${addAttribute(advancedTier.title, "aria-describedby")} class="mt-8 block rounded-lg bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition-colors duration-300 hover:bg-teal-600/80 focus:bg-teal-600/80 focus:outline-hidden sm:mt-10" data-astro-cid-lqjgtpbw>${advancedTier.cta.text}</a> </div> </section> <section class="mx-auto max-w-[85rem] px-4 pb-16 pt-32 sm:px-6 lg:px-8" data-astro-cid-lqjgtpbw> <div class="mx-auto grid grid-rows-1 content-center divide-y divide-dashed divide-slate-300 lg:mx-0 lg:grid-cols-2 lg:divide-x lg:divide-y-0" data-astro-cid-lqjgtpbw> <div class="py-5 sm:p-5" data-astro-cid-lqjgtpbw> <p class="inline-flex gap-x-4 text-pretty font-medium text-slate-700 sm:text-lg/8" data-astro-cid-lqjgtpbw> ${renderComponent($$result2, "Icon", $$Icon, { "name": "info", "class": "size-8", "data-astro-cid-lqjgtpbw": true })} ${smallInfoSection.intro.text} </p> </div> <div class="flex flex-col justify-evenly p-5" data-astro-cid-lqjgtpbw> ${smallInfoSection.links.map((link, index) => renderTemplate`<a${addAttribute(`${index === 1 ? "mt-5" : ""} group inline-flex w-fit items-center gap-x-2 font-medium text-slate-700 transition duration-300 hover:text-slate-400 focus:outline-hidden`, "class")}${addAttribute(link.href, "href")}${addAttribute(index === 0 ? link.href.split("/").pop() : void 0, "download")}${addAttribute(link.ariaLabel, "aria-label")} data-astro-cid-lqjgtpbw> ${link.text} ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight", "data-astro-cid-lqjgtpbw": true })} </a>`)} </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-lqjgtpbw> <div class="grid rounded-3xl bg-teal-300 px-5 py-5 shadow-xl md:grid-cols-2 md:grid-rows-2" data-astro-cid-lqjgtpbw> <div class="py-5 sm:p-5 md:row-span-2 md:content-center" data-astro-cid-lqjgtpbw> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800" data-astro-cid-lqjgtpbw> ${largeInfoSection.olderReleases.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-lqjgtpbw> ${largeInfoSection.olderReleases.content} </p> <ul class="mt-6 list-inside list-none px-5 text-slate-700" data-astro-cid-lqjgtpbw> ${largeInfoSection.olderReleases.versions.map((release, index) => renderTemplate`<li${addAttribute(`${index % 2 === 1 ? "mb-6" : ""}`, "class")} data-astro-cid-lqjgtpbw> <a${addAttribute(release.href, "href")} class="transition duration-300 hover:text-slate-400 hover:underline" data-astro-cid-lqjgtpbw> ${release.version} </a> </li>`)} </ul> </div> <div class="border-t border-dashed border-slate-400 py-5 sm:p-5 md:content-center md:border-l md:border-t-0" data-astro-cid-lqjgtpbw> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800" data-astro-cid-lqjgtpbw> ${largeInfoSection.systemRequirements.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-lqjgtpbw> ${largeInfoSection.systemRequirements.content} </p> </div> <div class="border-t border-dashed border-slate-400 py-5 sm:p-5 md:col-start-2 md:row-start-2 md:content-center md:border-l" data-astro-cid-lqjgtpbw> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800" data-astro-cid-lqjgtpbw> ${largeInfoSection.excel2003.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-lqjgtpbw> ${largeInfoSection.excel2003.content} </p> <ul class="mt-6 list-inside list-none px-5 text-slate-700" data-astro-cid-lqjgtpbw> ${largeInfoSection.excel2003.versions.map((version) => renderTemplate`<li data-astro-cid-lqjgtpbw> <a${addAttribute(version.href, "href")} class="transition duration-300 hover:text-slate-400 hover:underline" data-astro-cid-lqjgtpbw> ${version.version} </a> </li>`)} </ul> </div> </div> </section>  ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/datanova-core.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/downloads/datanova-core.astro";
const $$url = "/downloads/datanova-core";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DatanovaCore,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
