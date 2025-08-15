import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, b as renderTemplate, v as renderSlot, r as renderComponent, e as renderScript, F as Fragment, w as renderHead } from './astro/server_CPJFi3no.mjs';
import 'kleur/colors';
import 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                         */

const menu = [
  {
    label_fi: "KOTI",
    label_en: "HOME",
    href: "/",
    children: []
  },
  {
    label_fi: "PALVELUT",
    label_en: "SERVICES",
    href: "/services",
    megaMenu: true,
    children: [
      {
        label_fi: "By Framework",
        label_en: "By Framework",
        href: null,
        children: [
          {
            label_fi: "ISO 27001 Services",
            label_en: "ISO 27001 Services",
            href: "/services/iso-27001",
            children: []
          },
          {
            label_fi: "SOC 2 Readiness",
            label_en: "SOC 2 Readiness",
            href: "/services/soc-2",
            children: []
          },
          {
            label_fi: "NIS2 Compliance",
            label_en: "NIS2 Compliance",
            href: "/services/nis2",
            children: []
          },
          {
            label_fi: "DORA Compliance (Financial Services)",
            label_en: "DORA Compliance (Financial Services)",
            href: "/services/dora",
            children: []
          },
          {
            label_fi: "GDPR/Privacy Services",
            label_en: "GDPR/Privacy Services",
            href: "/services/gdpr-privacy",
            children: []
          },
          {
            label_fi: "eIDAS/Digital Trust Advisory",
            label_en: "eIDAS/Digital Trust Advisory",
            href: "/services/eidas-digital-trust",
            children: []
          },
          {
            label_fi: "Common Criteria Readiness",
            label_en: "Common Criteria Readiness",
            href: "/services/common-criteria",
            children: []
          }
        ]
      },
      {
        label_fi: "Risk, Continuity, and Governance",
        label_en: "Risk, Continuity, and Governance",
        href: null,
        children: [
          {
            label_fi: "Risk Assessments and Management (ISO 27005/31000)",
            label_en: "Risk Assessments and Management (ISO 27005/31000)",
            href: "/services/risk-management",
            children: []
          },
          {
            label_fi: "Third‑Party Risk Management (TPRM)",
            label_en: "Third‑Party Risk Management (TPRM)",
            href: "/services/third-party-risk",
            children: []
          },
          {
            label_fi: "Business Continuity and Crisis (ISO 22301)",
            label_en: "Business Continuity and Crisis (ISO 22301)",
            href: "/services/business-continuity-iso-22301",
            children: []
          },
          {
            label_fi: "Policy Development and Governance",
            label_en: "Policy Development and Governance",
            href: "/services/policy-governance",
            children: []
          },
          {
            label_fi: "CISO‑as‑a‑Service (fractional CISO)",
            label_en: "CISO‑as‑a‑Service (fractional CISO)",
            href: "/services/ciso-as-a-service",
            children: []
          },
          {
            label_fi: "Audit Preparation and Internal Audits",
            label_en: "Audit Preparation and Internal Audits",
            href: "/services/audit-preparation",
            children: []
          }
        ]
      },
      {
        label_fi: "Anti‑Fraud",
        label_en: "Anti‑Fraud",
        href: null,
        children: [
          {
            label_fi: "Fraud Risk Assessment",
            label_en: "Fraud Risk Assessment",
            href: "/services/anti-fraud",
            children: []
          },
          {
            label_fi: "BEC/Invoice Fraud Controls",
            label_en: "BEC/Invoice Fraud Controls",
            href: "/services/bec-invoice-fraud-controls",
            children: []
          },
          {
            label_fi: "Payment Controls and Recovery Playbooks",
            label_en: "Payment Controls and Recovery Playbooks",
            href: "/services/payment-controls-recovery",
            children: []
          }
        ]
      }
    ]
  },
  {
    label_fi: "PAKETIT",
    label_en: "PACKAGES",
    href: "/packages",
    children: [
      {
        label_fi: "ISO 27001 Fast‑Track (90–120 days)",
        label_en: "ISO 27001 Fast‑Track (90–120 days)",
        href: "/packages/iso-27001-fast-track",
        children: []
      },
      {
        label_fi: "NIS2 Sprint Program",
        label_en: "NIS2 Sprint Program",
        href: "/packages/nis2-sprint",
        children: []
      },
      {
        label_fi: "SOC 2 Readiness in 12 Weeks",
        label_en: "SOC 2 Readiness in 12 Weeks",
        href: "/packages/soc2-readiness-12-weeks",
        children: []
      },
      {
        label_fi: "DORA Program‑in‑a‑Box",
        label_en: "DORA Program‑in‑a‑Box",
        href: "/packages/dora-program-in-a-box",
        children: []
      },
      {
        label_fi: "GDPR Compliance Accelerator",
        label_en: "GDPR Compliance Accelerator",
        href: "/packages/gdpr-accelerator",
        children: []
      },
      {
        label_fi: "CISO‑as‑a‑Service Plans",
        label_en: "CISO‑as‑a‑Service Plans",
        href: "/packages/ciso-as-a-service",
        children: []
      }
    ]
  },
  {
    label_fi: "TOIMIALAT",
    label_en: "INDUSTRIES",
    href: "/industries",
    children: [
      {
        label_fi: "Financial Services and Fintech",
        label_en: "Financial Services and Fintech",
        href: "/industries/financial-services-fintech",
        children: []
      },
      {
        label_fi: "SaaS and Technology",
        label_en: "SaaS and Technology",
        href: "/industries/saas-technology",
        children: []
      },
      {
        label_fi: "Public Sector (Finland)",
        label_en: "Public Sector (Finland)",
        href: "/industries/public-sector-finland",
        children: []
      },
      {
        label_fi: "Critical Infrastructure and Energy",
        label_en: "Critical Infrastructure and Energy",
        href: "/industries/critical-infrastructure-energy",
        children: []
      },
      {
        label_fi: "Healthcare and Life Sciences",
        label_en: "Healthcare and Life Sciences",
        href: "/industries/healthcare-life-sciences",
        children: []
      },
      {
        label_fi: "Manufacturing and Industrial",
        label_en: "Manufacturing and Industrial",
        href: "/industries/manufacturing-industrial",
        children: []
      }
    ]
  },
  {
    label_fi: "SÄÄNTELY",
    label_en: "REGULATORY CENTER",
    href: "/regulatory",
    children: [
      {
        label_fi: "NIS2 in Finland",
        label_en: "NIS2 in Finland",
        href: "/regulatory/nis2-finland",
        children: []
      },
      {
        label_fi: "DORA for Financial Services",
        label_en: "DORA for Financial Services",
        href: "/regulatory/dora",
        children: []
      },
      {
        label_fi: "GDPR and Privacy",
        label_en: "GDPR and Privacy",
        href: "/regulatory/gdpr",
        children: []
      },
      {
        label_fi: "ISO 27001 and NIS2 alignment",
        label_en: "ISO 27001 and NIS2 alignment",
        href: "/regulatory/iso-to-nis2-mapping",
        children: []
      },
      {
        label_fi: "eIDAS and Digital Trust",
        label_en: "eIDAS and Digital Trust",
        href: "/regulatory/eidas-digital-trust",
        children: []
      }
    ]
  },
  {
    label_fi: "RESURSSIT",
    label_en: "RESOURCES",
    href: "/resources",
    children: [
      {
        label_fi: "Blog",
        label_en: "Blog",
        href: "/resources/blog",
        children: []
      },
      {
        label_fi: "Guides and Templates",
        label_en: "Guides and Templates",
        href: "/resources/guides",
        children: []
      },
      {
        label_fi: "Webinars and Events",
        label_en: "Webinars and Events",
        href: "/resources/webinars",
        children: []
      },
      {
        label_fi: "Case Studies",
        label_en: "Case Studies",
        href: "/resources/case-studies",
        children: []
      },
      {
        label_fi: "Trust Center",
        label_en: "Trust Center",
        href: "/resources/trust-center",
        children: []
      },
      {
        label_fi: "Readiness Checks",
        label_en: "Readiness Checks",
        href: "/resources/readiness-checks",
        children: []
      }
    ]
  },
  {
    label_fi: "MEISTÄ",
    label_en: "ABOUT",
    href: "/about",
    children: [
      {
        label_fi: "Our Story",
        label_en: "Our Story",
        href: "/about/story",
        children: []
      },
      {
        label_fi: "Team and Certifications",
        label_en: "Team and Certifications",
        href: "/about/team",
        children: []
      },
      {
        label_fi: "Methodology",
        label_en: "Methodology",
        href: "/about/methodology",
        children: []
      },
      {
        label_fi: "Certifications and Partnerships",
        label_en: "Certifications and Partnerships",
        href: "/about/certifications",
        children: []
      },
      {
        label_fi: "Careers",
        label_en: "Careers",
        href: "/about/careers",
        children: []
      },
      {
        label_fi: "Contact",
        label_en: "Contact",
        href: "/about/contact",
        children: []
      }
    ]
  }
];

const Icons = {
  arrowDownRight: {
    paths: [
      {
        d: "m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
      }
    ],
    class: "size-3 ml-0.5",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 shrink-0 transition duration-300 ease-in-out group-hover:translate-x-1",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  cursorRays: {
    paths: [
      {
        d: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
      }
    ],
    class: "size-6 text-slate-500",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  cog: {
    paths: [
      {
        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      },
      {
        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      }
    ],
    class: "size-6 text-slate-500",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
      }
    ],
    class: "size-6 text-slate-500",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  dataBase: {
    paths: [
      {
        d: "M20.5 20.5L22 22"
      },
      {
        d: "M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z"
      },
      {
        d: "M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6"
      },
      {
        d: "M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z"
      },
      {
        d: "M11 21C4 21 4 18 4 18V12"
      }
    ],
    class: "size-6 text-slate-600",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  brain: {
    paths: [
      {
        d: "M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293"
      },
      {
        d: "M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898"
      },
      {
        d: "M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5"
      },
      {
        d: "M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20"
      },
      {
        d: "M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20"
      },
      {
        d: "M12 7C12 8.65685 13.3431 10 15 10"
      },
      {
        d: "M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379"
      },
      {
        d: "M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5"
      },
      {
        d: "M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533"
      },
      {
        d: "M14 22C12.8954 22 12 21.1046 12 20"
      },
      {
        d: "M18.6667 16L17 19H21L19.3333 22"
      }
    ],
    class: "size-6 text-slate-600",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  lightbulb: {
    paths: [
      {
        d: "M21 2L20 3"
      },
      {
        d: "M3 2L4 3"
      },
      {
        d: "M21 16L20 15"
      },
      {
        d: "M3 16L4 15"
      },
      {
        d: "M9 18H15"
      },
      {
        d: "M10 21H14"
      },
      {
        d: "M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z"
      }
    ],
    class: "size-6 text-slate-600",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chartPie: {
    paths: [
      {
        d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
      },
      {
        d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  portfolio: {
    paths: [
      {
        d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  presentationChart: {
    paths: [
      {
        d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  articles: {
    paths: [
      {
        d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  documentChartBar: {
    paths: [
      {
        d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  blankDocument: {
    paths: [
      {
        d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  documentMagnifyingGlass: {
    paths: [
      {
        d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  info: {
    paths: [
      {
        d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mobile: {
    paths: [
      {
        d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      }
    ],
    class: "size-4",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  email: {
    paths: [
      {
        d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      }
    ],
    class: "size-4",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  world: {
    paths: [
      {
        d: "m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
      }
    ],
    class: "size-4",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "shrink-0 size-6 text-slate-600",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  download: {
    paths: [
      {
        d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  badge: {
    paths: [
      {
        d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowPath: {
    paths: [
      {
        d: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  check: {
    paths: [
      {
        d: "m4.5 12.75 6 6 9-13.5"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  minus: {
    paths: [
      {
        d: "M5 12h14"
      }
    ],
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  questionMark: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "shrink-0 size-6 text-slate-400 mt-0.5",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      }
    ],
    class: "shrink-0 size-6 text-teal-600",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  newWindow: {
    paths: [
      {
        d: "M21 3L15 3M21 3L12 12M21 3V9"
      },
      {
        d: "M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
      }
    ],
    class: "shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  thumbUp: {
    paths: [
      {
        d: "M7 10v12"
      },
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
      }
    ],
    class: "size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  thumbDown: {
    paths: [
      {
        d: "M17 14V2"
      },
      {
        d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
      }
    ],
    class: "size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  phone: {
    paths: [
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ],
    class: "size-4 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  menu: {
    paths: [
      {
        d: "M3 12h18"
      },
      {
        d: "M3 6h18"
      },
      {
        d: "M3 18h18"
      }
    ],
    class: "size-6",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18 6 6 18"
      },
      {
        d: "m6 6 12 12"
      }
    ],
    class: "size-6",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$8 = createAstro("https://your-vercel-domain.vercel.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className, ...attributes } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  const combinedClass = [
    icon.class,
    className
  ].filter(Boolean).join(" ");
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(attributes)}${addAttribute(combinedClass, "class")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/ui/icons/Icon.astro", void 0);

const $$Astro$7 = createAstro("https://your-vercel-domain.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const { type, href, rel, target, variant, className, id } = Astro2.props;
  const variants = {
    primary: "bg-teal-800 hover:bg-teal-800/80 focus:bg-teal-800/80 border border-transparent text-white",
    secondary: "hover:border-teal-700 hover:bg-teal-700 border-teal-800 border-2 text-slate-800 hover:text-white",
    tertiary: "bg-teal-50 hover:bg-teal-50/80"
  };
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(id, "id")}${addAttribute(href, "href")}${addAttribute(rel ? rel : void 0, "rel")}${addAttribute(target ? target : void 0, "target")}${addAttribute(twMerge(
    `rounded-lg px-6 py-2.5 text-center font-medium transition-colors duration-300 focus:outline-hidden ${variants[variant ?? "primary"]} ${className || ""}`
  ), "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(id, "id")}${addAttribute(type || "button", "type")}${addAttribute(twMerge(
    `rounded-lg px-6 py-2.5 text-center font-medium transition-colors duration-300 focus:outline-hidden ${variants[variant ?? "primary"]} ${className || ""}`
  ), "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/ui/Button.astro", void 0);

const servicesMenu = [
  {
    sectionTitle: "By Framework",
    items: [
      {
        icon: "shieldCheck",
        title: "ISO 27001 Services",
        description: "Information security management system certification",
        href: "/services/iso-27001"
      },
      {
        icon: "documentCheck",
        title: "SOC 2 Readiness",
        description: "Service organization control compliance preparation",
        href: "/services/soc-2"
      },
      {
        icon: "globe",
        title: "NIS2 Compliance",
        description: "Network and information security directive",
        href: "/services/nis2"
      },
      {
        icon: "banknotes",
        title: "DORA Compliance",
        description: "Digital operational resilience for financial services",
        href: "/services/dora"
      },
      {
        icon: "lockClosed",
        title: "GDPR/Privacy Services",
        description: "Data protection and privacy compliance",
        href: "/services/gdpr-privacy"
      },
      {
        icon: "identification",
        title: "eIDAS/Digital Trust",
        description: "Electronic identification and trust services",
        href: "/services/eidas-digital-trust"
      },
      {
        icon: "star",
        title: "Common Criteria",
        description: "IT security evaluation and certification",
        href: "/services/common-criteria"
      }
    ]
  },
  {
    sectionTitle: "Risk, Continuity & Governance",
    items: [
      {
        icon: "chartBar",
        title: "Risk Assessments",
        description: "ISO 27005/31000 risk management frameworks",
        href: "/services/risk-management"
      },
      {
        icon: "users",
        title: "Third-Party Risk (TPRM)",
        description: "Vendor and supplier risk management",
        href: "/services/third-party-risk"
      },
      {
        icon: "clock",
        title: "Business Continuity",
        description: "ISO 22301 crisis and continuity management",
        href: "/services/business-continuity-iso-22301"
      },
      {
        icon: "documentText",
        title: "Policy Development",
        description: "Governance frameworks and policy implementation",
        href: "/services/policy-governance"
      },
      {
        icon: "userGroup",
        title: "CISO-as-a-Service",
        description: "Fractional CISO and security leadership",
        href: "/services/ciso-as-a-service"
      },
      {
        icon: "magnifyingGlass",
        title: "Audit Preparation",
        description: "Internal audits and certification readiness",
        href: "/services/audit-preparation"
      }
    ]
  },
  {
    sectionTitle: "Anti-Fraud",
    items: [
      {
        icon: "exclamationTriangle",
        title: "Fraud Risk Assessment",
        description: "Comprehensive fraud risk evaluation",
        href: "/services/anti-fraud"
      },
      {
        icon: "envelope",
        title: "BEC/Invoice Fraud Controls",
        description: "Business email compromise prevention",
        href: "/services/bec-invoice-fraud-controls"
      },
      {
        icon: "creditCard",
        title: "Payment Controls",
        description: "Payment fraud prevention and recovery",
        href: "/services/payment-controls-recovery"
      }
    ]
  }
];

const $$Astro$6 = createAstro("https://your-vercel-domain.vercel.app");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Services;
  const sectionDescription = "Comprehensive GRC, compliance, and anti-fraud services for Finland and the EU";
  const currentPath = Astro2.url.pathname;
  const lang = currentPath.startsWith("/fi") ? "fi" : "en";
  return renderTemplate`${maybeRenderHead()}<div class="relative group"> <button id="mega-menu-services" type="button"${addAttribute(`flex items-center px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${currentPath.startsWith("/services") ? "text-teal-700 bg-teal-50" : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"}`, "class")} aria-haspopup="menu" aria-expanded="false" aria-label="Services Mega Menu"> ${lang === "fi" ? "PALVELUT" : "SERVICES"} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowDownRight", "class": "w-3 h-3 ml-1" })} </button> <div class="absolute left-0 top-full min-w-[800px] bg-white shadow-lg rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50" role="menu" aria-orientation="vertical" aria-labelledby="mega-menu-services"> <div class="p-6"> <p class="text-sm text-slate-600 mb-4"> ${sectionDescription} </p> <hr class="mb-4 border border-slate-200"> <div class="grid grid-cols-3 gap-6"> ${servicesMenu.map((section) => renderTemplate`<div class="flex flex-col"> <p class="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wide">${section.sectionTitle}</p> ${section.items.map((item) => {
    const href = lang === "fi" ? `/fi${item.href}` : item.href;
    return renderTemplate`<a class="flex gap-x-3 rounded-md p-2 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none transition-colors"${addAttribute(href, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "class": "mt-0.5 w-4 h-4 shrink-0 text-slate-600" })} <div class="grow"> <p class="text-xs font-medium text-slate-800"> ${item.title} </p> <p class="text-[11px] text-slate-500 mt-0.5">${item.description}</p> </div> </a>`;
  })} </div>`)} </div> </div> </div> </div>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/common/MegaMenu/Services.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://your-vercel-domain.vercel.app");
const $$SearchBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const { placeholder = "Search\u2026" } = Astro2.props;
  const path = Astro2.url.pathname;
  const isFi = path.startsWith("/fi");
  const t = (en, fi) => isFi ? fi : en;
  return renderTemplate(_a || (_a = __template(["", '<div class="relative" data-search-root> <label class="sr-only" for="site-search">', '</label> <input id="site-search" type="search" class="w-full rounded-md border border-slate-300 bg-white px-4 py-2 pr-9 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"', ' autocomplete="off" data-search-input> <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none text-slate-400"> ', " </div> <div class=\"hidden mt-2 flex-col gap-4 rounded-md border border-slate-200 bg-white p-4 shadow-lg text-sm max-h-[500px] overflow-y-auto w-full md:w-[640px] md:absolute md:left-0\" data-search-panel aria-live=\"polite\"></div> </div> <script type=\"module\">\n  import { searchFacets } from '@data/searchFacets.js';\n  \n  function initSearchBar() {\n    const root = document.currentScript?.previousElementSibling;\n    if (!root) return;\n    \n    const input = root.querySelector('[data-search-input]');\n    const panel = root.querySelector('[data-search-panel]');\n    const isFi = document.documentElement.lang === 'fi';\n    const t = (en, fi) => isFi ? fi : en;\n\n  // Build dataset from menu + facets quickly (could be replaced by real index)\n  const dataset = [];\n  function add(label, href, type){ dataset.push({ label, href, type: type || 'page' }); }\n  \n  async function loadMenuData() {\n    try {\n      const menuMod = await import('@data/menu.js');\n      const flat = (items) => items.forEach(i => { add(i.label_en, i.href, 'nav'); add(i.label_fi, i.href, 'nav'); if (i.children?.length) flat(i.children); });\n      flat(menuMod.menu);\n    } catch {}\n  }\n\n  // Load menu data asynchronously\n  loadMenuData();\n\n  const popular = searchFacets.popularQueries;\n  const facets = {\n    Category: searchFacets.categories,\n    Framework: searchFacets.frameworks,\n    Industry: searchFacets.industries,\n    Type: searchFacets.contentTypes\n  };\n  const active = new Set();\n  let currentResults = [];\n  let highlightIndex = -1;\n\n  function render() {\n    if (!panel) return;\n    const q = (input.value || '').trim().toLowerCase();\n    const facetFilter = active.size ? (item) => true : () => true; // placeholder facet logic\n    currentResults = !q ? [] : dataset.filter(d => d.label.toLowerCase().includes(q)).slice(0, 30).filter(facetFilter);\n\n    const parts = [];\n    // Facet chips\n    parts.push(`<div class='flex flex-wrap gap-2'>${Object.entries(facets).map(([group, values]) => `\n      <details class='group'>\n        <summary class='cursor-pointer px-2 py-1 rounded bg-slate-100 text-xs text-slate-600 hover:bg-slate-200'>${group}</summary>\n        <div class='mt-2 flex flex-wrap gap-1 max-w-[260px]'>${values.map(v => {\n          const sel = active.has(v);\n          return `<button type='button' data-facet='${v}' class='px-2 py-1 rounded text-xs border ${sel ? 'bg-teal-600 text-white border-teal-600' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}'>${v}</button>`;\n        }).join('')}</div>\n      </details>`).join('')}</div>`);\n\n    if (!q) {\n      parts.push(`<div><p class='text-slate-500 mb-2'>${t('Popular:','Suositut:')}</p><div class='flex flex-wrap gap-2'>${popular.map(p => `<button type='button' data-pop='${p}' class='px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs hover:bg-teal-600 hover:text-white'>${p}</button>`).join('')}</div></div>`);\n    } else if (currentResults.length === 0) {\n      parts.push(`<p class='text-slate-500'>${t('No results','Ei tuloksia')}</p>`);\n    } else {\n      parts.push(`<ul role='listbox' class='divide-y divide-slate-100'>${currentResults.map((r,i) => `<li role='option' data-idx='${i}' class='py-2 flex items-center gap-3 cursor-pointer px-1 rounded ${i===highlightIndex?'bg-teal-50':''}' data-href='${r.href}'>\n        <span class='text-xs uppercase tracking-wide text-slate-400'>${r.type}</span>\n        <span class='text-slate-700'>${r.label}</span>\n      </li>`).join('')}</ul>`);\n    }\n\n    panel.innerHTML = parts.join('');\n    panel.classList.remove('hidden');\n  }\n\n  function applyMobileMode() {\n    if (!panel) return;\n    const isMobile = window.matchMedia('(max-width: 767px)').matches;\n    if (isMobile) {\n      panel.classList.add('fixed','inset-0','m-0','rounded-none','border-0','max-h-full','w-full','h-full','z-50');\n      panel.classList.add('overflow-y-auto');\n      panel.classList.add('pt-20');\n      if (!panel.querySelector('[data-close-search]')) {\n        const closeBtn = document.createElement('button');\n        closeBtn.type = 'button';\n        closeBtn.setAttribute('data-close-search','');\n        closeBtn.className = 'absolute top-4 right-4 inline-flex items-center px-3 py-2 rounded-md bg-slate-900 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500';\n        closeBtn.textContent = t('Close','Sulje');\n        closeBtn.addEventListener('click', () => { panel.classList.add('hidden'); });\n        panel.appendChild(closeBtn);\n      }\n    } else {\n      panel.classList.remove('fixed','inset-0','m-0','rounded-none','border-0','max-h-full','w-full','h-full','z-50','pt-20');\n    }\n  }\n  applyMobileMode();\n  window.addEventListener('resize', applyMobileMode);\n\n  input.addEventListener('input', () => { highlightIndex = -1; render(); });\n  input.addEventListener('focus', () => { if (input.value || popular.length) render(); });\n  document.addEventListener('click', (e) => { if (!root.contains(e.target)) panel.classList.add('hidden'); });\n\n  panel.addEventListener('click', (e) => {\n    const btnFacet = e.target.closest('[data-facet]');\n    if (btnFacet) { const val = btnFacet.getAttribute('data-facet'); active.has(val) ? active.delete(val) : active.add(val); render(); return; }\n    const pop = e.target.closest('[data-pop]');\n    if (pop) { input.value = pop.getAttribute('data-pop'); input.focus(); render(); return; }\n    const opt = e.target.closest('[data-idx]');\n    if (opt) { location.href = opt.getAttribute('data-href'); }\n  });\n\n  input.addEventListener('keydown', (e) => {\n    if (panel.classList.contains('hidden')) return;\n    if (['ArrowDown','ArrowUp'].includes(e.key)) {\n      e.preventDefault();\n      if (!currentResults.length) return;\n      if (e.key === 'ArrowDown') highlightIndex = (highlightIndex + 1) % currentResults.length; else highlightIndex = (highlightIndex - 1 + currentResults.length) % currentResults.length;\n      render();\n    } else if (e.key === 'Enter' && highlightIndex >= 0) {\n      e.preventDefault();\n      const target = currentResults[highlightIndex];\n      if (target) location.href = target.href;\n    } else if (e.key === 'Escape') {\n      panel.classList.add('hidden');\n    }\n  });\n  \n  } // End of initSearchBar function\n  \n  // Initialize when DOM is ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initSearchBar);\n  } else {\n    initSearchBar();\n  }\n<\/script>"], ["", '<div class="relative" data-search-root> <label class="sr-only" for="site-search">', '</label> <input id="site-search" type="search" class="w-full rounded-md border border-slate-300 bg-white px-4 py-2 pr-9 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"', ' autocomplete="off" data-search-input> <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none text-slate-400"> ', " </div> <div class=\"hidden mt-2 flex-col gap-4 rounded-md border border-slate-200 bg-white p-4 shadow-lg text-sm max-h-[500px] overflow-y-auto w-full md:w-[640px] md:absolute md:left-0\" data-search-panel aria-live=\"polite\"></div> </div> <script type=\"module\">\n  import { searchFacets } from '@data/searchFacets.js';\n  \n  function initSearchBar() {\n    const root = document.currentScript?.previousElementSibling;\n    if (!root) return;\n    \n    const input = root.querySelector('[data-search-input]');\n    const panel = root.querySelector('[data-search-panel]');\n    const isFi = document.documentElement.lang === 'fi';\n    const t = (en, fi) => isFi ? fi : en;\n\n  // Build dataset from menu + facets quickly (could be replaced by real index)\n  const dataset = [];\n  function add(label, href, type){ dataset.push({ label, href, type: type || 'page' }); }\n  \n  async function loadMenuData() {\n    try {\n      const menuMod = await import('@data/menu.js');\n      const flat = (items) => items.forEach(i => { add(i.label_en, i.href, 'nav'); add(i.label_fi, i.href, 'nav'); if (i.children?.length) flat(i.children); });\n      flat(menuMod.menu);\n    } catch {}\n  }\n\n  // Load menu data asynchronously\n  loadMenuData();\n\n  const popular = searchFacets.popularQueries;\n  const facets = {\n    Category: searchFacets.categories,\n    Framework: searchFacets.frameworks,\n    Industry: searchFacets.industries,\n    Type: searchFacets.contentTypes\n  };\n  const active = new Set();\n  let currentResults = [];\n  let highlightIndex = -1;\n\n  function render() {\n    if (!panel) return;\n    const q = (input.value || '').trim().toLowerCase();\n    const facetFilter = active.size ? (item) => true : () => true; // placeholder facet logic\n    currentResults = !q ? [] : dataset.filter(d => d.label.toLowerCase().includes(q)).slice(0, 30).filter(facetFilter);\n\n    const parts = [];\n    // Facet chips\n    parts.push(\\`<div class='flex flex-wrap gap-2'>\\${Object.entries(facets).map(([group, values]) => \\`\n      <details class='group'>\n        <summary class='cursor-pointer px-2 py-1 rounded bg-slate-100 text-xs text-slate-600 hover:bg-slate-200'>\\${group}</summary>\n        <div class='mt-2 flex flex-wrap gap-1 max-w-[260px]'>\\${values.map(v => {\n          const sel = active.has(v);\n          return \\`<button type='button' data-facet='\\${v}' class='px-2 py-1 rounded text-xs border \\${sel ? 'bg-teal-600 text-white border-teal-600' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}'>\\${v}</button>\\`;\n        }).join('')}</div>\n      </details>\\`).join('')}</div>\\`);\n\n    if (!q) {\n      parts.push(\\`<div><p class='text-slate-500 mb-2'>\\${t('Popular:','Suositut:')}</p><div class='flex flex-wrap gap-2'>\\${popular.map(p => \\`<button type='button' data-pop='\\${p}' class='px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs hover:bg-teal-600 hover:text-white'>\\${p}</button>\\`).join('')}</div></div>\\`);\n    } else if (currentResults.length === 0) {\n      parts.push(\\`<p class='text-slate-500'>\\${t('No results','Ei tuloksia')}</p>\\`);\n    } else {\n      parts.push(\\`<ul role='listbox' class='divide-y divide-slate-100'>\\${currentResults.map((r,i) => \\`<li role='option' data-idx='\\${i}' class='py-2 flex items-center gap-3 cursor-pointer px-1 rounded \\${i===highlightIndex?'bg-teal-50':''}' data-href='\\${r.href}'>\n        <span class='text-xs uppercase tracking-wide text-slate-400'>\\${r.type}</span>\n        <span class='text-slate-700'>\\${r.label}</span>\n      </li>\\`).join('')}</ul>\\`);\n    }\n\n    panel.innerHTML = parts.join('');\n    panel.classList.remove('hidden');\n  }\n\n  function applyMobileMode() {\n    if (!panel) return;\n    const isMobile = window.matchMedia('(max-width: 767px)').matches;\n    if (isMobile) {\n      panel.classList.add('fixed','inset-0','m-0','rounded-none','border-0','max-h-full','w-full','h-full','z-50');\n      panel.classList.add('overflow-y-auto');\n      panel.classList.add('pt-20');\n      if (!panel.querySelector('[data-close-search]')) {\n        const closeBtn = document.createElement('button');\n        closeBtn.type = 'button';\n        closeBtn.setAttribute('data-close-search','');\n        closeBtn.className = 'absolute top-4 right-4 inline-flex items-center px-3 py-2 rounded-md bg-slate-900 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500';\n        closeBtn.textContent = t('Close','Sulje');\n        closeBtn.addEventListener('click', () => { panel.classList.add('hidden'); });\n        panel.appendChild(closeBtn);\n      }\n    } else {\n      panel.classList.remove('fixed','inset-0','m-0','rounded-none','border-0','max-h-full','w-full','h-full','z-50','pt-20');\n    }\n  }\n  applyMobileMode();\n  window.addEventListener('resize', applyMobileMode);\n\n  input.addEventListener('input', () => { highlightIndex = -1; render(); });\n  input.addEventListener('focus', () => { if (input.value || popular.length) render(); });\n  document.addEventListener('click', (e) => { if (!root.contains(e.target)) panel.classList.add('hidden'); });\n\n  panel.addEventListener('click', (e) => {\n    const btnFacet = e.target.closest('[data-facet]');\n    if (btnFacet) { const val = btnFacet.getAttribute('data-facet'); active.has(val) ? active.delete(val) : active.add(val); render(); return; }\n    const pop = e.target.closest('[data-pop]');\n    if (pop) { input.value = pop.getAttribute('data-pop'); input.focus(); render(); return; }\n    const opt = e.target.closest('[data-idx]');\n    if (opt) { location.href = opt.getAttribute('data-href'); }\n  });\n\n  input.addEventListener('keydown', (e) => {\n    if (panel.classList.contains('hidden')) return;\n    if (['ArrowDown','ArrowUp'].includes(e.key)) {\n      e.preventDefault();\n      if (!currentResults.length) return;\n      if (e.key === 'ArrowDown') highlightIndex = (highlightIndex + 1) % currentResults.length; else highlightIndex = (highlightIndex - 1 + currentResults.length) % currentResults.length;\n      render();\n    } else if (e.key === 'Enter' && highlightIndex >= 0) {\n      e.preventDefault();\n      const target = currentResults[highlightIndex];\n      if (target) location.href = target.href;\n    } else if (e.key === 'Escape') {\n      panel.classList.add('hidden');\n    }\n  });\n  \n  } // End of initSearchBar function\n  \n  // Initialize when DOM is ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initSearchBar);\n  } else {\n    initSearchBar();\n  }\n<\/script>"])), maybeRenderHead(), t("Search site", "Hae sivustolta"), addAttribute(t(placeholder, "Haku\u2026"), "placeholder"), renderComponent($$result, "Icon", $$Icon, { "name": "documentMagnifyingGlass", "class": "w-5 h-5" }));
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/navigation/SearchBar.astro", void 0);

const $$Astro$4 = createAstro("https://your-vercel-domain.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const lang = currentPath.startsWith("/fi") ? "fi" : "en";
  const primaryCTA = { text: lang === "fi" ? "Aloita nyt" : "Get Started", href: lang === "fi" ? "/fi/contact?assessment=true" : "/contact?assessment=true" };
  const secondaryCTA = { text: lang === "fi" ? "Varaa konsultaatio" : "Book a consultation", href: lang === "fi" ? "/fi/contact?consultation=true" : "/contact?consultation=true" };
  const supported = ["en", "fi"];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-[70]"> <!-- Header utility bar --> <div class="bg-slate-900 text-white text-xs sm:text-sm py-1.5"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"> <div class="hidden sm:flex space-x-5"> <span class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "w-4 h-4 mr-1" })} +358 XX XXX XXXX</span> <span class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "name": "email", "class": "w-4 h-4 mr-1" })} info@cybersecurity.fi</span> <span class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "name": "mapPin", "class": "w-4 h-4 mr-1" })} ${lang === "fi" ? "Helsinki, Suomi" : "Helsinki, Finland"}</span> </div> <div class="sm:hidden flex items-center text-[11px] gap-3"> <a href="tel:+358XXXXXXXXX" class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "w-4 h-4 mr-1" })} +358 XX XXX XXXX</a> </div> <div class="flex bg-slate-800 rounded-md p-1" role="group" aria-label="Language"> ${supported.map((code) => {
    const active = code === lang;
    let target;
    if (code === "fi") {
      if (currentPath === "/" || currentPath === "") {
        target = "/fi";
      } else if (currentPath.startsWith("/fi/")) {
        target = currentPath;
      } else if (currentPath.startsWith("/fi")) {
        target = currentPath;
      } else {
        target = `/fi${currentPath}`;
      }
    } else {
      if (currentPath === "/fi/" || currentPath === "/fi") {
        target = "/";
      } else if (currentPath.startsWith("/fi/")) {
        target = currentPath.replace("/fi", "") || "/";
      } else if (currentPath.startsWith("/fi")) {
        target = currentPath.replace("/fi", "") || "/";
      } else {
        target = currentPath;
      }
    }
    return renderTemplate`<a${addAttribute(target, "href")}${addAttribute(code, "hreflang")}${addAttribute(`px-2 py-0.5 text-[11px] rounded ${active ? "bg-teal-600 text-white" : "text-slate-300 hover:text-white"}`, "class")}>${code.toUpperCase()}</a>`;
  })} </div> </div> </div> <!-- Main navigation --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="h-14 flex items-center justify-between" aria-label="Main navigation"> <a${addAttribute(lang === "fi" ? "/fi" : "/", "href")} class="flex items-center px-2.5 py-1.5 rounded-md transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"> <img src="/logo.png" alt="Logo" class="h-8 w-auto" style="filter: contrast(1.2) brightness(0.8);"> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center space-x-0.5"> ${menu.map((item) => {
    const baseHref = item.href;
    const href = lang === "fi" && baseHref !== "/" ? `/fi${baseHref}` : lang === "fi" && baseHref === "/" ? "/fi" : baseHref;
    const isActive = currentPath === href || currentPath.startsWith(href + "/") || href !== "/" && currentPath.startsWith(href);
    const hasChildren = item.children && item.children.length > 0;
    const isMegaMenu = item.megaMenu;
    const label = item[`label_${lang}`];
    if (isMegaMenu && item.label_en === "SERVICES") {
      return renderTemplate`${renderComponent($$result, "ServicesMegaMenu", $$Services, {})}`;
    }
    return renderTemplate`<div class="relative group"> ${hasChildren ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button${addAttribute(`flex items-center px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"}`, "class")} aria-haspopup="true" aria-expanded="false">${label}${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowDownRight", "class": "w-3 h-3 ml-1" })}</button> <div class="absolute left-0 top-full min-w-48 bg-white shadow-lg rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50"> <div class="py-2"> ${item.children.map((sub) => {
      const subHref = lang === "fi" ? `/fi${sub.href}` : sub.href;
      const subLabel = sub[`label_${lang}`];
      return renderTemplate`<a${addAttribute(subHref, "href")} class="block px-4 py-1.5 text-[12px] text-slate-700 hover:text-teal-700 hover:bg-slate-50"${addAttribute(subLabel, "aria-label")}>${subLabel}</a>`;
    })} </div> </div> ` })}` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`flex items-center px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"}`, "class")}>${label}</a>`} </div>`;
  })} </div> <!-- Desktop Header Utility --> <div class="hidden lg:flex items-center space-x-3"> <!-- Search Bar --> <div class="w-48"> ${renderComponent($$result, "SearchBar", $$SearchBar, { "placeholder": lang === "fi" ? "Hae..." : "Search..." })} </div> <!-- Secondary CTA --> ${renderComponent($$result, "Button", $$Button, { "href": secondaryCTA.href, "variant": "secondary", "className": "px-2.5 py-1 text-[10px] !rounded-md whitespace-nowrap" }, { "default": ($$result2) => renderTemplate`${secondaryCTA.text}` })} <!-- Primary CTA --> ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary", "className": "px-2.5 py-1 text-[10px] !rounded-md whitespace-nowrap" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> <!-- Mobile Menu Trigger --> <div class="lg:hidden flex items-center space-x-2"> <!-- Mobile Search Toggle --> <button id="mobile-search-toggle" class="p-2 rounded-md text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" aria-label="Search"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifyingGlass", "class": "w-5 h-5" })} </button> <!-- Mobile Menu Button --> <button id="mobile-trigger" class="p-2 rounded-md text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" aria-controls="mobile-menu" aria-expanded="false"> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "class": "w-6 h-6" })} </button> </div> </nav> <!-- Mobile Search Bar (Hidden by default) --> <div id="mobile-search" class="lg:hidden hidden pb-4"> ${renderComponent($$result, "SearchBar", $$SearchBar, { "placeholder": lang === "fi" ? "Hae sivustolta..." : "Search site..." })} </div> </div> </header> ${renderScript($$result, "C:/Users/Administrator/Desktop/New folder (3)/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://your-vercel-domain.vercel.app");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const currentPath = Astro2.url.pathname;
  const lang = currentPath.startsWith("/fi") ? "fi" : "en";
  const primaryCTA = { text: lang === "fi" ? "Aloita nyt" : "Get Started", href: lang === "fi" ? "/fi/contact?assessment=true" : "/contact?assessment=true" };
  const secondaryCTA = { text: lang === "fi" ? "Varaa konsultaatio" : "Book a consultation", href: lang === "fi" ? "/fi/contact?consultation=true" : "/contact?consultation=true" };
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu-root" class="hidden lg:hidden fixed inset-0 z-[80]" aria-hidden="true"> <div class="absolute inset-0 bg-black/40" data-close></div> <div class="ml-auto h-full w-full max-w-xs bg-white border-l border-slate-200 shadow-xl flex flex-col relative z-10" role="dialog" aria-modal="true"> <div class="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-200"> <a${addAttribute(lang === "fi" ? "/fi" : "/", "href")} class="text-lg font-semibold text-slate-800"><span class="text-teal-700">Cyber</span>Security.fi</a> <div class="flex items-center gap-2"> <!-- Language Switcher --> <div class="flex bg-slate-800 rounded-md p-1" role="group" aria-label="Language"> ${["en", "fi"].map((code) => {
    const active = code === lang;
    let target;
    if (code === "fi") {
      if (currentPath === "/" || currentPath === "") {
        target = "/fi";
      } else if (currentPath.startsWith("/fi/")) {
        target = currentPath;
      } else if (currentPath.startsWith("/fi")) {
        target = currentPath;
      } else {
        target = `/fi${currentPath}`;
      }
    } else {
      if (currentPath === "/fi/" || currentPath === "/fi") {
        target = "/";
      } else if (currentPath.startsWith("/fi/")) {
        target = currentPath.replace("/fi", "") || "/";
      } else if (currentPath.startsWith("/fi")) {
        target = currentPath.replace("/fi", "") || "/";
      } else {
        target = currentPath;
      }
    }
    return renderTemplate`<a${addAttribute(target, "href")}${addAttribute(code, "hreflang")}${addAttribute(`px-2 py-1 text-[11px] rounded transition-colors ${active ? "bg-teal-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-700"}`, "class")} data-language-switch>${code.toUpperCase()}</a>`;
  })} </div> <button class="p-2 rounded-md text-slate-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" data-close aria-label="Close menu">✕</button> </div> </div> <!-- Mobile Search Bar --> <div class="px-4 py-3 border-b border-slate-200"> ${renderComponent($$result, "SearchBar", $$SearchBar, { "placeholder": lang === "fi" ? "Hae sivustolta..." : "Search site..." })} </div> <nav class="px-4 pt-2 pb-4 space-y-1 overflow-y-auto flex-1 text-sm"> ${menu.map((item) => {
    const baseHref = item.href;
    const href = lang === "fi" && baseHref !== "/" ? `/fi${baseHref}` : lang === "fi" && baseHref === "/" ? "/fi" : baseHref;
    const isActive = currentPath === href || currentPath.startsWith(href + "/");
    const hasChildren = item.children && item.children.length > 0;
    item.megaMenu;
    const label = item[`label_${lang}`];
    return renderTemplate`<div> ${hasChildren ? renderTemplate`<details class="group" data-acc> <summary${addAttribute(`flex items-center justify-between cursor-pointer list-none px-3 py-2 rounded-md ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"}`, "class")}> <span>${label}</span> <span class="transition-transform group-open:rotate-180">⌄</span> </summary> <div class="mt-1 pl-4 space-y-1"> ${item.children.map((sub) => {
      const subHref = lang === "fi" ? `/fi${sub.href}` : sub.href;
      const subLabel = sub[`label_${lang}`];
      const subHasChildren = sub.children && sub.children.length > 0;
      if (subHasChildren) {
        return renderTemplate`<details class="group" data-acc> <summary class="flex items-center justify-between cursor-pointer list-none px-2 py-1 rounded-md text-slate-600 hover:text-teal-700 hover:bg-slate-50 text-[13px]"> <span>${subLabel}</span> <span class="transition-transform group-open:rotate-180 text-xs">⌄</span> </summary> <div class="mt-1 pl-4 space-y-1"> ${sub.children.map((subSub) => {
          const subSubHref = lang === "fi" ? `/fi${subSub.href}` : subSub.href;
          const subSubLabel = subSub[`label_${lang}`];
          return renderTemplate`<a${addAttribute(subSubHref, "href")} class="block px-2 py-1 rounded-md text-slate-500 hover:text-teal-700 hover:bg-slate-50 text-[12px]">${subSubLabel}</a>`;
        })} </div> </details>`;
      }
      return renderTemplate`<a${addAttribute(subHref, "href")} class="block px-2 py-1 rounded-md text-slate-600 hover:text-teal-700 hover:bg-slate-50 text-[13px]">${subLabel}</a>`;
    })} </div> </details>` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`block px-3 py-2 rounded-md ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"}`, "class")}>${label}</a>`} </div>`;
  })} </nav> <!-- Mobile CTAs --> <div class="px-4 pt-4 pb-6 border-t border-slate-200 space-y-3 bg-white"> <a${addAttribute(secondaryCTA.href, "href")} class="block w-full text-center rounded-md border-2 border-teal-600 text-teal-700 bg-white text-base font-semibold py-3 tracking-normal hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"> ${secondaryCTA.text} </a> <a${addAttribute(primaryCTA.href, "href")} class="block w-full text-center rounded-md bg-teal-700 text-white text-base font-semibold py-3 tracking-normal shadow hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700"> ${primaryCTA.text} </a> </div> </div> </div> ${renderScript($$result, "C:/Users/Administrator/Desktop/New folder (3)/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/MobileMenu.astro", void 0);

const $$FooterForm = createComponent(($$result, $$props, $$slots) => {
  const formStrings = {
    legend: "Subscribe to our newsletter",
    placeholder: "Enter your email",
    submit: "Submit",
    description: "Get all the information you need. Enter your email, and we'll be in touch."
  };
  return renderTemplate`${maybeRenderHead()}<form>  <fieldset class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-teal-400 p-2 sm:flex-row sm:gap-3" aria-labelledby="form-legend">  <legend id="form-legend" class="sr-only text-lg font-medium text-slate-700">${formStrings.legend}</legend>  <div class="w-full"> <label for="email-input" class="sr-only">${formStrings.placeholder}</label> <input type="email" id="email-input" name="email" class="block w-full rounded-lg border-transparent px-4 py-3 text-sm focus:border-teal-700/80 focus:ring-teal-700/80"${addAttribute(formStrings.placeholder, "placeholder")} required${addAttribute(formStrings.placeholder, "aria-label")} aria-describedby="form-description" autocomplete="email" spellcheck="false"> </div>  <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-teal-100 p-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-teal-700/80 hover:text-white focus:bg-teal-700 focus:text-white focus:outline-hidden sm:w-auto" aria-label="Submit email"> ${formStrings.submit} </button> </fieldset>  <p id="form-description" class="mt-3 text-sm text-slate-400"> ${formStrings.description} </p> </form>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/ui/forms/FooterForm.astro", void 0);

const footerMenu = {
  en: [
    {
      title: 'Services',
      items: [
        { label: 'ISO 27001 Services', href: '/services/iso-27001' },
        { label: 'SOC 2 Readiness', href: '/services/soc-2' },
        { label: 'NIS2 Compliance', href: '/services/nis2' },
        { label: 'DORA Compliance', href: '/services/dora' },
        { label: 'GDPR/Privacy Services', href: '/services/gdpr-privacy' },
        { label: 'eIDAS/Digital Trust', href: '/services/eidas-digital-trust' },
        { label: 'Risk Management', href: '/services/risk-management' },
        { label: 'Anti-Fraud Services', href: '/services/anti-fraud' }
      ]
    },
    {
      title: 'Packages',
      items: [
        { label: 'ISO 27001 Fast-Track', href: '/packages/iso-27001-fast-track' },
        { label: 'NIS2 Sprint Program', href: '/packages/nis2-sprint' },
        { label: 'SOC 2 Readiness in 12 Weeks', href: '/packages/soc2-readiness-12-weeks' },
        { label: 'DORA Program-in-a-Box', href: '/packages/dora-program-in-a-box' },
        { label: 'GDPR Compliance Accelerator', href: '/packages/gdpr-accelerator' },
        { label: 'CISO-as-a-Service Plans', href: '/packages/ciso-as-a-service' }
      ]
    },
    {
      title: 'Industries',
      items: [
        { label: 'Financial Services & Fintech', href: '/industries/financial-services-fintech' },
        { label: 'SaaS & Technology', href: '/industries/saas-technology' },
        { label: 'Public Sector (Finland)', href: '/industries/public-sector-finland' },
        { label: 'Critical Infrastructure & Energy', href: '/industries/critical-infrastructure-energy' },
        { label: 'Healthcare & Life Sciences', href: '/industries/healthcare-life-sciences' },
        { label: 'Manufacturing & Industrial', href: '/industries/manufacturing-industrial' }
      ]
    },
    {
      title: 'Regulatory Center',
      items: [
        { label: 'NIS2 in Finland', href: '/regulatory/nis2-finland' },
        { label: 'DORA for Financial Services', href: '/regulatory/dora' },
        { label: 'GDPR and Privacy', href: '/regulatory/gdpr' },
        { label: 'ISO 27001 and NIS2 alignment', href: '/regulatory/iso-to-nis2-mapping' },
        { label: 'eIDAS and Digital Trust', href: '/regulatory/eidas-digital-trust' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Guides and Templates', href: '/resources/guides' },
        { label: 'Webinars and Events', href: '/resources/webinars' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Trust Center', href: '/resources/trust-center' },
        { label: 'Readiness Checks', href: '/resources/readiness-checks' }
      ]
    },
    {
      title: 'About',
      items: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Team and Certifications', href: '/about/team' },
        { label: 'Methodology', href: '/about/methodology' },
        { label: 'Certifications and Partnerships', href: '/about/certifications' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Contact', href: '/about/contact' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { label: 'Trust Center', href: '/resources/trust-center' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'DPA', href: '/dpa' },
        { label: 'Cookie Settings', href: '/cookie-settings' }
      ]
    }
  ],
  fi: [
    {
      title: 'Palvelut',
      items: [
        { label: 'ISO 27001 -palvelut', href: '/fi/services/iso-27001' },
        { label: 'SOC 2 -valmius', href: '/fi/services/soc-2' },
        { label: 'NIS2 -vaatimustenmukaisuus', href: '/fi/services/nis2' },
        { label: 'DORA -vaatimustenmukaisuus', href: '/fi/services/dora' },
        { label: 'GDPR/Tietosuojapalvelut', href: '/fi/services/gdpr-privacy' },
        { label: 'eIDAS/Digitaalinen luottamus', href: '/fi/services/eidas-digital-trust' },
        { label: 'Riskienhallinta', href: '/fi/services/risk-management' },
        { label: 'Petosten vastaiset palvelut', href: '/fi/services/anti-fraud' }
      ]
    },
    {
      title: 'Paketit',
      items: [
        { label: 'ISO 27001 Pikakaista', href: '/fi/packages/iso-27001-fast-track' },
        { label: 'NIS2 Sprint -ohjelma', href: '/fi/packages/nis2-sprint' },
        { label: 'SOC 2 -valmius 12 viikossa', href: '/fi/packages/soc2-readiness-12-weeks' },
        { label: 'DORA Ohjelmapaketti', href: '/fi/packages/dora-program-in-a-box' },
        { label: 'GDPR -vaatimustenmukaisuuden kiihdytin', href: '/fi/packages/gdpr-accelerator' },
        { label: 'CISO-palvelut -suunnitelmat', href: '/fi/packages/ciso-as-a-service' }
      ]
    },
    {
      title: 'Toimialat',
      items: [
        { label: 'Rahoituspalvelut ja Fintech', href: '/fi/industries/financial-services-fintech' },
        { label: 'SaaS ja Teknologia', href: '/fi/industries/saas-technology' },
        { label: 'Julkishallinto (Suomi)', href: '/fi/industries/public-sector-finland' },
        { label: 'Kriittinen infrastruktuuri ja energia', href: '/fi/industries/critical-infrastructure-energy' },
        { label: 'Terveydenhuolto ja biotieteet', href: '/fi/industries/healthcare-life-sciences' },
        { label: 'Valmistus ja teollisuus', href: '/fi/industries/manufacturing-industrial' }
      ]
    },
    {
      title: 'Sääntelykeskus',
      items: [
        { label: 'NIS2 Suomessa', href: '/fi/regulatory/nis2-finland' },
        { label: 'DORA rahoituspalveluille', href: '/fi/regulatory/dora' },
        { label: 'GDPR ja tietosuoja', href: '/fi/regulatory/gdpr' },
        { label: 'ISO 27001 ja NIS2 yhteensovittaminen', href: '/fi/regulatory/iso-to-nis2-mapping' },
        { label: 'eIDAS ja digitaalinen luottamus', href: '/fi/regulatory/eidas-digital-trust' }
      ]
    },
    {
      title: 'Resurssit',
      items: [
        { label: 'Blogi', href: '/fi/resources/blog' },
        { label: 'Oppaat ja pohjat', href: '/fi/resources/guides' },
        { label: 'Webinaarit ja tapahtumat', href: '/fi/resources/webinars' },
        { label: 'Tapaustutkimukset', href: '/fi/resources/case-studies' },
        { label: 'Luottamuskeskus', href: '/fi/resources/trust-center' },
        { label: 'Valmiuskokeet', href: '/fi/resources/readiness-checks' }
      ]
    },
    {
      title: 'Tietoa meistä',
      items: [
        { label: 'Tarinamme', href: '/fi/about/story' },
        { label: 'Tiimi ja sertifikaatit', href: '/fi/about/team' },
        { label: 'Metodologia', href: '/fi/about/methodology' },
        { label: 'Sertifikaatit ja kumppanuudet', href: '/fi/about/certifications' },
        { label: 'Ura', href: '/fi/about/careers' },
        { label: 'Ota yhteyttä', href: '/fi/about/contact' }
      ]
    },
    {
      title: 'Laki',
      items: [
        { label: 'Luottamuskeskus', href: '/fi/resources/trust-center' },
        { label: 'Tietosuojaseloste', href: '/fi/privacy-policy' },
        { label: 'Käyttöehdot', href: '/fi/terms' },
        { label: 'Tietojen käsittelysopimus', href: '/fi/dpa' },
        { label: 'Evästeasetukset', href: '/fi/cookie-settings' }
      ]
    }
  ]
};

const $$Astro$2 = createAstro("https://your-vercel-domain.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const companyName = "CyberSecurity.fi";
  const companyDescription = "Comprehensive GRC, compliance, and anti-fraud services for Finland and the EU. ISO 27001, NIS2, SOC 2, DORA\u2014delivered on time.";
  const contactDetails = {
    address: "Helsinki, Finland",
    phone: "+358 XX XXX XXXX",
    email: "info@cybersecurity.fi",
    businessId: "1234567-8"
    // Finnish business ID format
  };
  const copyrightYear = (/* @__PURE__ */ new Date()).getFullYear();
  const craftedBy = { name: "gulamoff", url: "https://www.gulamoff.dev/" };
  const path = Astro2.url.pathname;
  const isFi = path.startsWith("/fi");
  const lang = isFi ? "fi" : "en";
  const menu = footerMenu[lang];
  const newsletterTitle = isFi ? "Pysy ajan tasalla" : "Stay updated";
  const themeLabel = isFi ? "Teema" : "Theme";
  const contrastLabel = isFi ? "Korkea kontrasti" : "High contrast";
  const fontSizeLabel = isFi ? "Tekstin koko" : "Font size";
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto w-full bg-linear-to-t/oklch from-teal-200 via-transparent to-white pt-12 pb-10 border-t border-teal-100" data-astro-cid-scinlfmn> <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-scinlfmn> <div class="grid gap-10 lg:grid-cols-12" data-astro-cid-scinlfmn> <!-- Brand + Description --> <div class="lg:col-span-4 space-y-6" data-astro-cid-scinlfmn> <a${addAttribute(isFi ? "/fi" : "/", "href")} class="flex-none text-xl font-semibold text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"${addAttribute(companyName, "aria-label")} data-track="footer-brand" data-astro-cid-scinlfmn> <span class="text-teal-700" data-astro-cid-scinlfmn>Cyber</span>Security.fi
</a> <p class="text-pretty text-slate-600 text-sm leading-relaxed" data-astro-cid-scinlfmn> ${companyDescription} </p> <div class="text-sm text-slate-500 space-y-1"${addAttribute(isFi ? "Yhteystiedot" : "Contact details", "aria-label")} data-astro-cid-scinlfmn> <div data-astro-cid-scinlfmn>${contactDetails.address}</div> <div data-astro-cid-scinlfmn><a${addAttribute(`tel:${contactDetails.phone}`, "href")} class="hover:text-teal-700" data-track="footer-contact" data-contact-type="phone" data-astro-cid-scinlfmn>${contactDetails.phone}</a></div> <div data-astro-cid-scinlfmn><a${addAttribute(`mailto:${contactDetails.email}`, "href")} class="hover:text-teal-700" data-track="footer-contact" data-contact-type="email" data-astro-cid-scinlfmn>${contactDetails.email}</a></div> <div data-astro-cid-scinlfmn>${isFi ? "Y-tunnus" : "Business ID"}: ${contactDetails.businessId}</div> </div> <!-- Theme & Accessibility Controls --> <div class="pt-4 space-y-3" data-astro-cid-scinlfmn> <div class="flex items-center gap-3" data-astro-cid-scinlfmn> <span class="text-xs font-semibold uppercase tracking-wide text-slate-500" data-astro-cid-scinlfmn>${themeLabel}</span> <button id="contrast-toggle" class="text-xs px-2 py-1 rounded bg-slate-800 text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" data-state="default" data-track="pref-contrast" data-astro-cid-scinlfmn>${contrastLabel}</button> </div> <div class="flex items-center gap-3" data-astro-cid-scinlfmn> <span class="text-xs font-semibold uppercase tracking-wide text-slate-500" data-astro-cid-scinlfmn>${fontSizeLabel}</span> <div class="flex gap-1" data-astro-cid-scinlfmn> <button data-font="base" class="text-xs px-2 py-1 rounded bg-slate-800 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 aria-[pressed=true]:bg-teal-700" aria-pressed="true" data-track="pref-font" data-font-size="base" data-astro-cid-scinlfmn>A</button> <button data-font="lg" class="text-xs px-2 py-1 rounded bg-slate-700 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" data-track="pref-font" data-font-size="lg" data-astro-cid-scinlfmn>A+</button> </div> </div> </div> </div> <!-- Navigation Columns --> <div class="lg:col-span-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8" data-astro-cid-scinlfmn> ${menu.map((section) => renderTemplate`<div class="group" data-footer-group data-astro-cid-scinlfmn> <h3 class="text-sm font-semibold text-slate-900 mb-3 tracking-wide hidden sm:block" data-astro-cid-scinlfmn>${section.title}</h3> <button type="button" class="sm:hidden w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 py-2 border-b border-slate-200" aria-expanded="false" data-footer-accordion data-astro-cid-scinlfmn> <span data-astro-cid-scinlfmn>${section.title}</span> <span class="ml-2 inline-block transition-transform text-slate-500" aria-hidden data-astro-cid-scinlfmn>▾</span> </button> <ul class="space-y-2 hidden sm:block" data-footer-list data-astro-cid-scinlfmn> ${section.items.map((link) => renderTemplate`<li data-astro-cid-scinlfmn> <a${addAttribute(link.href, "href")} class="text-sm text-slate-600 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded block" data-track="footer-link"${addAttribute(section.title, "data-footer-section")} data-astro-cid-scinlfmn>${link.label}</a> </li>`)} </ul> </div>`)} <!-- Newsletter / Form column --> <div class="col-span-full sm:col-span-2 md:col-span-2 lg:col-span-2" data-astro-cid-scinlfmn> <h3 class="font-semibold text-slate-700 mb-3" data-astro-cid-scinlfmn>${newsletterTitle}</h3> ${renderComponent($$result, "FooterForm", $$FooterForm, { "data-astro-cid-scinlfmn": true })} </div> </div> </div> <hr class="my-10 border-slate-200" data-astro-cid-scinlfmn> <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500" data-astro-cid-scinlfmn> <p data-astro-cid-scinlfmn>&copy; 2024-${copyrightYear} ${companyName}. ${isFi ? "Kaikki oikeudet pid\xE4tet\xE4\xE4n." : "All rights reserved."} <span class="block md:inline" data-astro-cid-scinlfmn>${isFi ? "Toteuttanut" : "Crafted by"} <a${addAttribute(craftedBy.url, "href")} target="_blank" rel="noopener noreferrer" class="underline decoration-dotted hover:text-teal-700" data-astro-cid-scinlfmn>${craftedBy.name}</a></span></p> <p data-astro-cid-scinlfmn>${isFi ? "Suomen ja EU:n tietoturva- ja vaatimustenmukaisuuspalvelut" : "Cybersecurity and compliance services for Finland and the EU"}</p> </div> </div> </footer> ${renderScript($$result, "C:/Users/Administrator/Desktop/New folder (3)/src/components/sections/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/sections/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://your-vercel-domain.vercel.app");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { segments } = Astro2.props;
  const path = Astro2.url.pathname.replace(/\/$/, "");
  const isFi = path.startsWith("/fi");
  const parts = segments ?? path.split("/").filter(Boolean).reduce((acc, part, idx, arr) => {
    const href = "/" + arr.slice(0, idx + 1).join("/");
    acc.push({ href, label: decodeURIComponent(part.replace(/-/g, " ")) });
    return acc;
  }, []);
  const homeHref = isFi ? "/fi" : "/";
  const homeLabel = isFi ? "Koti" : "Home";
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="mb-4 text-sm"> <ol class="flex flex-wrap items-center gap-1 text-slate-500"> <li><a${addAttribute(homeHref, "href")} class="hover:text-teal-700">${homeLabel}</a></li> ${parts.map((p) => renderTemplate`<li class="flex items-center"> <span class="mx-1 text-slate-400">/</span> <a${addAttribute(p.href, "href")} class="capitalize hover:text-teal-700 aria-[current=page]:text-slate-700"${addAttribute(p.href === path ? "page" : void 0, "aria-current")}>${p.label}</a> </li>`)} </ol> </nav>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/components/navigation/Breadcrumbs.astro", void 0);

const $$Astro = createAstro("https://your-vercel-domain.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const path = Astro2.url.pathname.replace(/\/$/, "");
  const lang = path.startsWith("/fi") ? "fi" : "en";
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-pt-28"> <head><title>${title ? `${title} | CyberSecurity.fi` : "CyberSecurity.fi"}</title><meta charset="utf-8"><meta name="viewport" content="width=device-width">${renderHead()}</head> <body class="bg-off-white"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-4 py-2 rounded shadow">Skip to content</a> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} ${(() => {
    if (path === "" || path === "/" || path === "/fi") return null;
    return renderTemplate`<div class="bg-white border-b border-slate-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {})}</div></div>`;
  })()} <main id="main" class="min-h-[60vh]"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Administrator/Desktop/New folder (3)/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a, $$Button as b };
