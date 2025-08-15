import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../../../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../../../chunks/Layout_hPoMtle4.mjs';
import { g as getReadingTime, f as formatDate } from '../../../chunks/reading-time_w2egzHqq.mjs';
import { g as getEntry, r as renderEntry } from '../../../chunks/_astro_content_JtomFrSD.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (id === void 0) {
    return Astro2.redirect("/404");
  }
  const post = await getEntry("articles", id);
  if (post === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content, headings } = await renderEntry(post);
  const validHeadings = headings.filter((heading) => heading.depth === 2);
  const readingTime = getReadingTime(post.body ?? "");
  const slug = id;
  ({
    title: post.data.title,
    description: post.data.description
  });
  ({
    "url": Astro2.url.href,
    "name": post.data.title,
    "description": post.data.description,
    "datePublished": post.data.date.toLocaleDateString("en-UK"),
    "isPartOf": {
      "url": `${Astro2.site}`}
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-24 sm:px-6 lg:px-8"> <div class="mx-auto max-w-(--breakpoint-xl)"> <div class="grid gap-8 md:grid-cols-4 lg:gap-12"> ${validHeadings.length > 0 && renderTemplate`<div class="relative mt-10 rounded-lg border border-slate-300 border-dashed p-5 md:mt-0 md:border-none md:p-0 md:pb-24"> <nav class="sticky top-10 md:top-32"> <small class="font-semibold uppercase">On this page</small> <ul class="mt-2 space-y-2"> ${validHeadings.map((heading) => renderTemplate`<li> <a${addAttribute(`#${heading.slug}`, "href")} class="block text-slate-400 transition-colors duration-200 hover:text-slate-600" data-toc-link> ${heading.text} </a> </li>`)} </ul> </nav> </div>`} <div class="mx-auto md:col-span-2 md:col-start-2 md:pt-8"> <ul class="mb-5 text-xs text-slate-500"> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 last:pe-0 last-of-type:before:hidden"> ${formatDate(post.data.date)} </li> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 last:pe-0 last-of-type:before:hidden"> ${readingTime} </li> </ul> <h1 class="mb-4 text-balance text-center text-2xl text-slate-800 sm:text-3xl md:mb-6 md:text-left xl:text-5xl"> ${post.data.title} </h1> <section class="prose prose-slate prose-headings:font-normal prose-h3:text-slate-500 prose-strong:text-slate-500"> ${renderComponent($$result2, "Content", Content, {})} </section> ${renderComponent($$result2, "PostFeedback", null, { "client:only": "svelte", "title": "Was this post helpful?", "firstChoice": "Yes", "secondChoice": "No", "slug": slug, "client:component-hydration": "only", "client:component-path": "@common/PostFeedback.svelte", "client:component-export": "default" }, { "helpfulIcon": async ($$result3) => renderTemplate`<svelte:fragment> ${renderComponent($$result3, "Icon", $$Icon, { "name": "thumbUp", "class": "transition duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1" })} </svelte:fragment>`, "notHelpfulIcon": async ($$result3) => renderTemplate`<svelte:fragment> ${renderComponent($$result3, "Icon", $$Icon, { "name": "thumbDown", "class": "transition duration-300 group-hover:translate-y-1 group-focus-visible:translate-y-1" })} </svelte:fragment>` })} </div> </div> </div> </section> ${renderScript($$result2, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/support/articles/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/support/articles/[id].astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/support/articles/[id].astro";
const $$url = "/support/articles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
