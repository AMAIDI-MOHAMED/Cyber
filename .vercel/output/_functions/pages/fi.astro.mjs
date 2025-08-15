import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Button, a as $$Icon } from '../chunks/Layout_hPoMtle4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.url.pathname;
  const heroTitle = "GRC, vaatimustenmukaisuus ja petosten vastaiset palvelut Suomelle ja EU:lle. ISO 27001, NIS2, SOC 2, DORA\u2014toimitettu ajallaan.";
  const heroSubtitle = "Kattavat tietoturva- ja vaatimustenmukaisuuspalvelut suomalaisille yrityksille ja julkishallinnolle.";
  const pathCards = [
    {
      title: "Hanki ISO 27001 -sertifikaatti",
      description: "Tietoturvaj\xE4rjestelm\xE4n sertifiointi 90-120 p\xE4iv\xE4ss\xE4",
      icon: "shieldCheck",
      href: "/fi/packages/iso-27001-fast-track",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      title: "T\xE4yt\xE4 NIS2 -velvoitteet",
      description: "Verkko- ja tietoturvadirektiivin vaatimustenmukaisuus",
      icon: "globe",
      href: "/fi/packages/nis2-sprint",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      title: "Valmistaudu SOC 2:een",
      description: "Palveluj\xE4rjest\xF6n kontrollien vaatimustenmukaisuus",
      icon: "documentCheck",
      href: "/fi/packages/soc2-readiness-12-weeks",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      title: "Saavuta DORA -resilience",
      description: "Digitaalinen operatiivinen resilienssi rahoituspalveluille",
      icon: "banknotes",
      href: "/fi/packages/dora-program-in-a-box",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    },
    {
      title: "V\xE4henn\xE4 petostappioita",
      description: "Petosten vastaiset kontrollit ja palautusstrategiat",
      icon: "exclamationTriangle",
      href: "/fi/services/anti-fraud",
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    }
  ];
  const flagshipPackages = [
    {
      title: "ISO 27001 Pikakaista",
      description: "Sertifiointi 90-120 p\xE4iv\xE4ss\xE4",
      price: "alkaen 15 000 \u20AC",
      features: ["Gap-analyysi", "Politiikkapaketti", "Riskienhallinta", "Sis\xE4inen audit", "Sertifiointiaudit"],
      href: "/fi/packages/iso-27001-fast-track",
      badge: "Suosituin"
    },
    {
      title: "NIS2 Sprint",
      description: "Vaatimustenmukaisuus 6 kuukaudessa",
      price: "alkaen 12 000 \u20AC",
      features: ["Scope-analyysi", "Governance-rakenne", "Incident reporting", "Supplier oversight", "Regulatory mapping"],
      href: "/fi/packages/nis2-sprint",
      badge: "Uusi"
    },
    {
      title: "SOC 2 12 viikossa",
      description: "Type II raportti valmiina",
      price: "alkaen 18 000 \u20AC",
      features: ["Control design", "Evidence collection", "Testing procedures", "Report preparation", "Auditor support"],
      href: "/fi/packages/soc2-readiness-12-weeks"
    },
    {
      title: "DORA Ohjelmapaketti",
      description: "Operatiivinen resilienssi rahoituspalveluille",
      price: "alkaen 25 000 \u20AC",
      features: ["Impact tolerance", "Scenario testing", "ICT TPRM", "Incident reporting", "Board briefing"],
      href: "/fi/packages/dora-program-in-a-box"
    }
  ];
  const metrics = [
    {
      number: "98%",
      label: "Sertifiointionnistumisaste",
      description: "Ensimm\xE4isell\xE4 yrityksell\xE4"
    },
    {
      number: "60%",
      label: "Audit-l\xF6yd\xF6sten v\xE4hennys",
      description: "Keskim\xE4\xE4rin"
    },
    {
      number: "90-120",
      label: "P\xE4iv\xE4\xE4 vaatimustenmukaisuuteen",
      description: "ISO 27001 Fast-Track"
    },
    {
      number: "\u20AC2.5M",
      label: "Petostappioiden s\xE4\xE4st\xF6",
      description: "Asiakkaidemme keskiarvo"
    }
  ];
  const leadMagnets = [
    {
      title: "NIS2 Valmiuskysely",
      description: "Selvit\xE4 oletko NIS2:n piiriss\xE4",
      icon: "clipboardDocumentCheck",
      href: "/fi/resources/readiness-checks",
      download: false
    },
    {
      title: "ISO 27001 Politiikkapaketti",
      description: "20+ valmiita politiikkapohjia",
      icon: "documentText",
      href: "/fi/resources/guides",
      download: true
    },
    {
      title: "Petosten Vastainen Matriisi",
      description: "Kattava petosten vastainen ty\xF6kalu",
      icon: "tableCells",
      href: "/fi/resources/guides",
      download: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Koti - CyberSecurity.fi" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20 lg:py-32"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center max-w-4xl mx-auto"> <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"> ${heroTitle} </h1> <p class="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"> ${heroSubtitle} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/fi/contact?assessment=true", "variant": "primary", "className": "text-lg px-8 py-4" }, { "default": ($$result3) => renderTemplate`
Aloita nyt
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/fi/resources/readiness-checks", "variant": "secondary", "className": "text-lg px-8 py-4" }, { "default": ($$result3) => renderTemplate`
NIS2 valmiuskysely
` })} </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-2xl font-semibold text-slate-900 mb-4">
Luottavat meihin
</h2> <p class="text-slate-600">
Suomen johtavat yritykset ja julkishallinto
</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60"> <!-- Placeholder logos - replace with actual client logos --> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 1</div> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 2</div> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 3</div> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 4</div> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 5</div> <div class="h-12 bg-slate-200 rounded flex items-center justify-center text-slate-500 font-semibold">Asiakas 6</div> </div> </div> </section>  <section class="py-20 bg-slate-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
Valitse polkusi
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Mikä on sinun tietoturva- ja vaatimustenmukaisuustarpeesi?
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${pathCards.map((card) => renderTemplate`<a${addAttribute(card.href, "href")}${addAttribute(`block p-8 rounded-xl border-2 transition-all duration-200 ${card.color}`, "class")}> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> ${renderComponent($$result2, "Icon", $$Icon, { "name": card.icon, "class": "w-8 h-8 text-slate-700" })} </div> <div> <h3 class="text-xl font-semibold text-slate-900 mb-2">${card.title}</h3> <p class="text-slate-600">${card.description}</p> </div> </div> </a>`)} </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
Lippulaivapaketit
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Valmiit ratkaisut nopeaan vaatimustenmukaisuuteen
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${flagshipPackages.map((pkg) => renderTemplate`<div class="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"> ${pkg.badge && renderTemplate`<span class="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full mb-4"> ${pkg.badge} </span>`} <h3 class="text-xl font-semibold text-slate-900 mb-2">${pkg.title}</h3> <p class="text-slate-600 text-sm mb-4">${pkg.description}</p> <div class="text-2xl font-bold text-slate-900 mb-4">${pkg.price}</div> <ul class="space-y-2 mb-6"> ${pkg.features.map((feature) => renderTemplate`<li class="flex items-center text-sm text-slate-600"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "w-4 h-4 text-green-500 mr-2 flex-shrink-0" })} ${feature} </li>`)} </ul> ${renderComponent($$result2, "Button", $$Button, { "href": pkg.href, "variant": "primary", "className": "w-full" }, { "default": ($$result3) => renderTemplate`
Lisätietoja
` })} </div>`)} </div> </div> </section>  <section class="py-20 bg-teal-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
Tulokset ja mittarit
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Mitä olemme saavuttaneet asiakkaidemme kanssa
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${metrics.map((metric) => renderTemplate`<div class="text-center"> <div class="text-4xl lg:text-5xl font-bold text-teal-700 mb-2">${metric.number}</div> <div class="text-lg font-semibold text-slate-900 mb-2">${metric.label}</div> <div class="text-slate-600">${metric.description}</div> </div>`)} </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
Tapaustutkimukset
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Miten olemme auttaneet asiakaitamme
</p> </div> <div class="grid md:grid-cols-3 gap-8"> <!-- Placeholder case studies --> <div class="bg-slate-50 rounded-xl p-6"> <div class="text-sm text-slate-500 mb-2">Rahoituspalvelut</div> <h3 class="text-xl font-semibold text-slate-900 mb-2">
DORA -vaatimustenmukaisuus 6 kuukaudessa
</h3> <p class="text-slate-600 mb-4">
Suomalainen pankki saavutti DORA -vaatimustenmukaisuuden ennätysajassa.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/fi/resources/case-studies", "variant": "secondary", "className": "text-sm" }, { "default": ($$result3) => renderTemplate`
Lue lisää
` })} </div> <div class="bg-slate-50 rounded-xl p-6"> <div class="text-sm text-slate-500 mb-2">Julkishallinto</div> <h3 class="text-xl font-semibold text-slate-900 mb-2">
NIS2 -valmius julkishallinnolle
</h3> <p class="text-slate-600 mb-4">
Kunnallinen palveluntarjoaja valmistautui NIS2 -direktiiviin.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/fi/resources/case-studies", "variant": "secondary", "className": "text-sm" }, { "default": ($$result3) => renderTemplate`
Lue lisää
` })} </div> <div class="bg-slate-50 rounded-xl p-6"> <div class="text-sm text-slate-500 mb-2">Teknologia</div> <h3 class="text-xl font-semibold text-slate-900 mb-2">
ISO 27001 Fast-Track SaaS:lle
</h3> <p class="text-slate-600 mb-4">
Teknologiayritys sai ISO 27001 -sertifikaatin 90 päivässä.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/fi/resources/case-studies", "variant": "secondary", "className": "text-sm" }, { "default": ($$result3) => renderTemplate`
Lue lisää
` })} </div> </div> </div> </section>  <section class="py-20 bg-slate-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
Ilmaiset työkalut
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto">
Lataa ilmaisia työkaluja ja oppaita
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${leadMagnets.map((resource) => renderTemplate`<div class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"> <div class="flex items-center gap-4 mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": resource.icon, "class": "w-8 h-8 text-teal-600" })} <h3 class="text-xl font-semibold text-slate-900">${resource.title}</h3> </div> <p class="text-slate-600 mb-6">${resource.description}</p> ${renderComponent($$result2, "Button", $$Button, { "href": resource.href, "variant": "primary", "className": "w-full" }, { "default": ($$result3) => renderTemplate`${resource.download ? "Lataa" : "Aloita"}` })} </div>`)} </div> </div> </section>  <section class="py-16 bg-slate-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-2xl font-bold mb-4">
Tarvitsetko MDR tai penetraatiotestauksen?
</h2> <p class="text-slate-300 mb-6">
Kumppaneidemme palvelut
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://peersoc.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"> <span>PeerSOC</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowTopRightOnSquare", "class": "w-4 h-4" })} </a> <a href="https://redshielddefense.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"> <span>RedShield Defense</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowTopRightOnSquare", "class": "w-4 h-4" })} </a> </div> </div> </section> ` })}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/pages/fi/index.astro", void 0);

const $$file = "C:/Users/Administrator/Desktop/New folder (3)/src/pages/fi/index.astro";
const $$url = "/fi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
