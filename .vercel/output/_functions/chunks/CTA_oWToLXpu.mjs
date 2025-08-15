import { a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from './astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { a as $$Icon, b as $$Button } from './Layout_hPoMtle4.mjs';

const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const text = "Comprehensive Cybersecurity Solutions";
  const linkText = "Secure Your Organization!";
  const linkHref = "/packages";
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <div class="rounded-xl bg-slate-50 shadow-md"> <a${addAttribute(linkHref, "href")} target="_blank" class="group flex h-9 w-fit items-center justify-center gap-0 rounded-xl transition duration-300"${addAttribute(`${text} - ${linkText}`, "aria-label")}> <div class="to-teal-700 from-teal-800 flex h-full w-fit items-center gap-2 rounded-xl bg-linear-to-tr/oklch px-3"> <span class="text-sm text-white">${text}</span> </div> <div class="hidden h-full w-fit items-center justify-center gap-2 px-3 sm:flex"> <span class="text-astro-slate-100 text-sm transition duration-300 group-hover:underline">${linkText}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevronRight" })} </div> </a> </div> </div>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/common/AnnouncementBanner.astro", void 0);

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  const title = "Transform Your Organization into a Cybersecurity Powerhouse";
  const subTitle = "Get comprehensive cybersecurity compliance with expert guidance and proven frameworks. No guesswork required. Achieve ISO 27001, NIS2, GDPR, and DORA certification with confidence in months, not years.";
  const primaryCTA = { text: "View Services", href: "/packages" };
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-4xl select-none text-left sm:text-center"> <h1 class="block text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h1> </div> <div class="mx-auto max-w-3xl text-left sm:text-center"> <p class="text-pretty text-lg text-slate-700"> ${subTitle} </p> </div>  <div class="flex flex-col justify-center gap-5 sm:flex-row"> ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/common/HeroContent.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-linear-to-b/oklch from-teal-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] space-y-8 px-4 pb-12 pt-48 sm:px-6 lg:px-8">  ${renderComponent($$result, "AnnouncementBanner", $$AnnouncementBanner, {})}  ${renderComponent($$result, "HeroContent", $$HeroContent, {})} </div> </section>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/sections/HeroSection.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const title = 'Transform Your Business Today. <br /> Get started with <span class="font-medium text-teal-700">Data</span><span class="font-light text-slate-400">Nova</span>.';
  const subTitle = "Begin your free trial and discover how DataNova's powerful analytics platform can revolutionize your data-driven decision making.";
  const primaryCTA = { text: "Start Free Trial", href: "#" };
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="text-lg\/8 mt-5 text-pretty text-slate-600"> ${subTitle} </p> ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary", "className": "mt-7 inline-flex border-none px-3.5!" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </section>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/sections/CTA.astro", void 0);

export { $$HeroSection as $, $$CTA as a };
