# CyberSecurity.fi Navigation Implementation

## Overview

This document outlines the comprehensive navigation structure implemented for the CyberSecurity.fi Astro.js project, featuring a conversion-first design with Finnish and English language support.

## Navigation Structure

### Primary Navigation (Header)

#### Main Menu Items:
1. **HOME** (`/` or `/fi`)
2. **SERVICES** (Mega Menu)
3. **PACKAGES** (`/packages` or `/fi/packages`)
4. **INDUSTRIES** (`/industries` or `/fi/industries`)
5. **REGULATORY CENTER** (`/regulatory` or `/fi/regulatory`)
6. **RESOURCES** (`/resources` or `/fi/resources`)
7. **ABOUT** (`/about` or `/fi/about`)

#### Header Utility Bar:
- **Language Switcher**: FI | EN
- **Contact Info**: Phone (+358 XX XXX XXXX), Email (info@cybersecurity.fi), Address (Helsinki, Finland)
- **CTAs**: "Book a consultation" (secondary), "Get Started" (primary)

### Services Mega Menu

#### By Framework:
- ISO 27001 Services (`/services/iso-27001`)
- SOC 2 Readiness (`/services/soc-2`)
- NIS2 Compliance (`/services/nis2`)
- DORA Compliance (Financial Services) (`/services/dora`)
- GDPR/Privacy Services (`/services/gdpr-privacy`)
- eIDAS/Digital Trust Advisory (`/services/eidas-digital-trust`)
- Common Criteria Readiness (`/services/common-criteria`)

#### Risk, Continuity, and Governance:
- Risk Assessments and Management (ISO 27005/31000) (`/services/risk-management`)
- Third‑Party Risk Management (TPRM) (`/services/third-party-risk`)
- Business Continuity and Crisis (ISO 22301) (`/services/business-continuity-iso-22301`)
- Policy Development and Governance (`/services/policy-governance`)
- CISO‑as‑a‑Service (fractional CISO) (`/services/ciso-as-a-service`)
- Audit Preparation and Internal Audits (`/services/audit-preparation`)

#### Anti‑Fraud:
- Fraud Risk Assessment (`/services/anti-fraud`)
- BEC/Invoice Fraud Controls (`/services/bec-invoice-fraud-controls`)
- Payment Controls and Recovery Playbooks (`/services/payment-controls-recovery`)

### Packages

- ISO 27001 Fast‑Track (90–120 days) (`/packages/iso-27001-fast-track`)
- NIS2 Sprint Program (`/packages/nis2-sprint`)
- SOC 2 Readiness in 12 Weeks (`/packages/soc2-readiness-12-weeks`)
- DORA Program‑in‑a‑Box (`/packages/dora-program-in-a-box`)
- GDPR Compliance Accelerator (`/packages/gdpr-accelerator`)
- CISO‑as‑a‑Service Plans (`/packages/ciso-as-a-service`)

### Industries

- Financial Services and Fintech (`/industries/financial-services-fintech`)
- SaaS and Technology (`/industries/saas-technology`)
- Public Sector (Finland) (`/industries/public-sector-finland`)
- Critical Infrastructure and Energy (`/industries/critical-infrastructure-energy`)
- Healthcare and Life Sciences (`/industries/healthcare-life-sciences`)
- Manufacturing and Industrial (`/industries/manufacturing-industrial`)

### Regulatory Center

- NIS2 in Finland (`/regulatory/nis2-finland`)
- DORA for Financial Services (`/regulatory/dora`)
- GDPR and Privacy (`/regulatory/gdpr`)
- ISO 27001 and NIS2 alignment (`/regulatory/iso-to-nis2-mapping`)
- eIDAS and Digital Trust (`/regulatory/eidas-digital-trust`)

### Resources

- Blog (`/resources/blog`)
- Guides and Templates (`/resources/guides`)
- Webinars and Events (`/resources/webinars`)
- Case Studies (`/resources/case-studies`)
- Trust Center (`/resources/trust-center`)
- Readiness Checks (`/resources/readiness-checks`)

### About

- Our Story (`/about/story`)
- Team and Certifications (`/about/team`)
- Methodology (`/about/methodology`)
- Certifications and Partnerships (`/about/certifications`)
- Careers (`/about/careers`)
- Contact (`/about/contact`)

## Homepage Layout (Conversion-First)

### Hero Section
- **Headline**: "GRC, compliance, and anti-fraud for Finland and the EU. ISO 27001, NIS2, SOC 2, DORA—delivered on time."
- **CTAs**: "Get Started", "NIS2 readiness check"

### Social Proof
- Client logos and certifications
- Industry sectors served

### Choose Your Path (Cards)
- Get ISO 27001 certified
- Meet NIS2 obligations
- Prepare for SOC 2
- Achieve DORA resilience
- Reduce fraud losses

### Flagship Packages
- 4-6 cards with from-pricing
- ISO 27001 Fast-Track (from €15,000)
- NIS2 Sprint (from €12,000)
- SOC 2 in 12 Weeks (from €18,000)
- DORA Program-in-a-Box (from €25,000)

### Outcomes and Metrics
- 98% certification success rate
- 60% reduction in audit findings
- 90-120 days to compliance
- €2.5M fraud loss savings

### Case Studies Carousel
- Financial Services, Public Sector, Technology examples

### Resource Lead Magnets
- NIS2 Readiness Quiz
- ISO 27001 Policy Pack
- Fraud Control Matrix

### Cross-site Rail
- Partner services: PeerSOC, RedShield Defense

## Service Page Template

### Structure:
1. **Outcome-oriented header** (who it's for, what you'll achieve)
2. **What's included** (deliverables)
3. **Process and timeline** (phases, RACI)
4. **Evidence and tooling** (policies, risk register, dashboards)
5. **Compliance mapping** (clauses, measures)
6. **Pricing anchor** ("from €X for typical scope")
7. **Case study and testimonial**
8. **FAQs** (specific to Finland/EU where relevant)
9. **CTAs**: Book consultation, Request proposal, Download related template

## Footer Structure

### Navigation Columns:
- Services, Packages, Industries, Regulatory Center, Resources, About
- Trust Center, Privacy Policy, Terms, DPA, Cookie settings

### Company Details:
- Address: Helsinki, Finland
- Business ID: 1234567-8
- Contact: +358 XX XXX XXXX, info@cybersecurity.fi

### Newsletter Signup
- "Stay updated" / "Pysy ajan tasalla"

## Language and Localization

### URL Structure:
- Default: English (`/`)
- Finnish mirror: `/fi/`
- Consistent slugs under both languages
- Hreflang tags for SEO

### Localization Features:
- Finnish-specific landing pages
- Localized copy and examples
- Finnish sectors, regulators, procurement norms
- Surface Finland-specific pages for "NIS2 Finland," "ISO 27001 certification Finland," "DORA Finland"

## Technical Implementation

### Components:
- `Header.astro` - Main navigation with mega menu support
- `MobileMenu.astro` - Mobile navigation with accordion structure
- `Services.astro` - Services mega menu component
- `Footer.astro` - Comprehensive footer with all sections
- `SearchBar.astro` - Advanced search with filters

### Data Files:
- `src/data/menu.js` - Main navigation structure
- `src/data/footerMenu.js` - Footer navigation
- `src/utils/megaMenu/services.ts` - Services mega menu data

### Features:
- Responsive design
- Accessibility compliant
- SEO optimized
- Conversion-focused CTAs
- Language switching
- Search functionality with filters

## Conversion Pathways

### Examples:
1. **Blog**: "NIS2 scope for Finnish municipal providers" → NIS2 checklist → thank-you page invites NIS2 Sprint discovery call
2. **ISO 27001 policy pack download** → automated invite to scope builder → Fast-Track package page
3. **Fraud control matrix** → AP/finance workshop → Anti-fraud engagement

## Trust and Compliance Signals

- Trust Center with security posture, certifications, DPA, sub-processors
- Procurement/RFP support page
- Data processing and EU hosting details
- Finnish business registration and compliance

## Next Steps

1. Create individual service pages using the template
2. Implement regulatory center pages with interactive tools
3. Set up blog and resource pages
4. Add actual client logos and case studies
5. Implement contact forms and consultation booking
6. Set up analytics and conversion tracking
7. Add more interactive readiness checks and tools
