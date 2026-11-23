# Kickscale website

Static bilingual website: English and German, official Kickscale logo, Trust Center, and customer stories. No dependency installation or production build is required.

## Pages and navigation

- `/en/` and `/de/`: localized homepages.
- `/en/trust-center` and `/de/datenschutz`: equivalent localized Trust Center pages.
- `/en/customers` and `/de/erfolgsgeschichten`: customer story collections.
- `/en/stories/<slug>` and `/de/erfolgsgeschichten/<slug>`: individual stories.

Header and footer menus contain only Home / Startseite and Trust Center. The DE/EN switch opens the equivalent page, including individual customer stories. The original English and German article text comes from Kickscale's existing public site. Trust Center descriptions are translated; the original policy file names and source links remain intact.

## Hosting and deployment

Repository: `geraldzankl/kickscale-website`. Branch: `main`. Publish the repository root, with no build command. Intended live domain: `www.kickscale.si`.

Hostinger Apache/LiteSpeed uses the included `.htaccess` to serve clean paths without `.html` or a required trailing slash, redirect legacy HTML URLs, and send indexing headers. Directory-based `index.html` pages also support static hosts that do not process `.htaccess`; those hosts may append a trailing slash. Legacy HTML files include browser redirects to clean routes as a fallback.

For manual deployment, upload the locale folders, `assets/`, all CSS/JS files, `favicon.svg`, `robots.txt`, `.htaccess`, and the root/legacy HTML files, preserving paths. Include hidden files: `.htaccess` is essential for Apache/LiteSpeed routing and headers. Enable SSL in hPanel. A Git push updates the live site only when Hostinger automatic deployment is configured; otherwise redeploy the `main` branch in Hostinger.

## Search indexing

Every HTML page includes `noindex, nofollow, noarchive`. `.htaccess` additionally sets `X-Robots-Tag: noindex, nofollow, noarchive` on all Apache/LiteSpeed responses. `robots.txt` allows crawling so search engines can discover and respect the noindex directive; blocking crawling would prevent them from reading it. No sitemap is published.

These directives request exclusion from compliant search engines; the website remains publicly accessible. They are not access control. Pages previously indexed may take time to disappear; use the relevant search engine removal tools for urgent removals. Verify the noindex metadata and headers on the live Hostinger site after deployment, since static/CDN hosts may ignore `.htaccess`.

## Brand assets and fonts

The header, footer, dashboard, and favicon use the original Kickscale vector artwork retrieved from its public website. The original white wordmark is stored in `assets/logos/kickscale-white.svg`; the favicon at `assets/logos/kickscale-favicon.svg` uses its original symbol path and gradient. A distinct asset URL prevents reuse of the old cached favicon.

Brand colors: navy `#030929`, turquoise `#2BCCC5`, yellow `#ECE338`, red `#FF3463`. Confirmed fonts: Poppins ExtraBold (800), Instrument Serif Regular (400) for turquoise accents, Inter Regular (400) for subtitles and body copy. Fonts are self-hosted with their licenses in `assets/fonts/`. No analytics, cookies, external asset requests, or third-party embeds are used.

## Trust Center content

The 17-document library provides localized search and filtering, FAQs, Google Cloud hosting information for Frankfurt, and `datenschutz@kickscale.com`. Document entries open the supplied Notion Privacy Center because individual file URLs were not provided. See `trust-center-content-source.md` for provenance. An English overview does not imply that the original policy documents are available in English.

## Local development

Run `python3 -m http.server 8080` from the repository root. Directory-based routes work with trailing slashes; Apache/LiteSpeed is needed to exercise `.htaccess` redirects and response headers. Edit the static locale files directly; keep equivalent language pages and switches synchronized.

<!-- Hostinger publish trigger: 2026-10-22; no website content changes. -->

## Customer-facing Sales Room update — November 18, 2026

This repository is the **public-facing Sales Room** for prospects and customers, distinct from the internal Sales Hub at `sales.kickscale.si`.

Navigation is synchronized in German and English across Overview (`/en/`, `/de/`), About Kickscale (`/en/about/`, `/de/about/`), Onboarding and Support. The About pages include the original localized Notion Sales Room's company presentation link, descriptions, demo embeds, ROI links, product positioning, contact information, one-pager catalog and Privacy Center.

The two old Notion Sales Room page links have been removed entirely. Of the linked source media, directly embeddable externally hosted videos are displayed on the page; **16 original Notion-uploaded media files** (8 per language, including one-pagers and videos) could not be migrated as self-hosted binaries. They now use explicit email requests (`sales@kickscale.com`) rather than opening the original Notion Sales Room. Replace these request links with permanent uploaded public media assets before considering the binary migration complete.

Both projects have been committed to the respective GitHub `main` branches. These commits do not prove Hostinger live publication; confirm auto-deploy is configured or deploy from Hostinger hPanel and check the live links.

## Typography alignment — November 20, 2026

The entire customer-facing site loads `/kickscale-typography.css` via the core `styles.css`, `proposal-hub.css`, and `trust-center-library.css` entrypoints. Headlines use the Kickscale Gellix family; editorial highlighted headline text uses Reckless Neue Regular in **upright** style, replacing the older Poppins / Instrument Serif treatment. Body and UI typography also use Gellix-first stacks. Brand colours remain unchanged.

**Font-license caveat:** The proprietary Gellix / Reckless Neue WOFF files are not present in the repository. CSS checks locally installed Gellix/Reckless Neue and otherwise loads commercially usable DM Sans / DM Serif Display fallback fonts from Google Fonts. An exact visual match on every device requires the company's licensed webfont assets to be supplied and hosted; do not copy licensed font files from PDFs or third-party repos without distribution rights.

## Buyer-first Resources consolidation — November 22, 2026

The `/en/` and `/de/` pages now combine the former overview and About Kickscale into a short, factual introduction plus searchable resources (twelve quick links, five capability shortcuts, demo/role/industry materials).

Four main navigation destinations are maintained in English and German:
- Product Information: `/en/product/`, `/de/produkt/`, five capability sections, integrations, Help Center.
- Presentations & Materials: `/en/presentations/`, `/de/presentations/`, locale-specific official Canva decks, existing Bunny video embeds and original Notion Sales Room one-pagers. Where original Notion media are not yet available as downloadable assets, a clear `mailto:sales@kickscale.com` request link remains.
- ROI Calculator: `/en/roi-calculator/`, `/de/roi-calculator/`, the functional CRM + Agents + Coaching model adapted from the internal Sales HQ. Internal-only status and hidden Sales HQ metadata have been removed; a neutral generic example is used, and savings estimates are explicitly illustrative.
- Legal & Compliance: German `https://www.kickscale.com/legal`; English `https://www.kickscale.com/en/legal`.

The buyer-facing header navigation is shared across the overview, product, presentation, ROI, onboarding, support, customer stories and Trust Center. The previous `/en/about/` and `/de/about/` pages redirect into the new structure; known section fragments map to their equivalent destinations.

The new static assets are `buyer-hub.css`, `buyer-nav.js`, `buyer-roi-calculator.js`, `buyer-roi-calculator.css`. Hostinger `.htaccess` has matching explicit rewrite rules. Changes are committed to GitHub main, but live Hostinger deployment is **not verified** in the current execution environment. Verify auto-deploy or redeploy `main` in Hostinger; check navigation, locale links, media embeds, ROI interaction, and language-specific legal links after publication.

The resources remain publicly readable. No `noindex` directive is a security control. Do not publish customer-specific negotiated pricing, internal credentials or confidential attachments in these static files.

## Buyer experience and ROI refinements — November 23, 2026

- Product Information dropdown is rendered above hero copy and has no trigger-to-panel gap; closing happens after leaving the entire group. Shared navigation can reinitialize after calculator presets change.
- Presentation videos are vertically stacked, lazy-loaded, without autoplay permission; the original frames are zoomed/cropped to reduce letterboxing. Uncropped player links are available for large-screen viewing. The "Weitere Unterlagen / Additional materials" section is removed.
- ROI calculator `/en/roi-calculator/` and `/de/roi-calculator/` now have Step 1 (users, meeting and call intensity sliders and editable per-rep/month values) and Step 2 (five module checkboxes without product prices), followed by the existing CRM, Agent, Coaching and Investment sections.
- Meeting intensity: 5/10/20/40 meetings per rep/week; call intensity: 10/20/40/80 completed calls per rep/week. These are illustrative B2B customer-interaction scenarios; four weeks/month map the medium level to 40 meetings and 80 calls per rep/month. A link to the 2025 Bridge Group SDR benchmark explains why medium calls are approximately 20/week. This is not a standard for all seller roles or for attempted dials.
- 10/50/200-rep scenario buttons and "start from zero" reset the model. Default 50 users, 40 meetings/month/user and 80 calls/month/user; CRM savings are 15 minutes/meeting and 3 minutes/call; hourly value €40 is editable.
- Linked default agents: SDR→AE runs/year = monthly calls × 12, with 10 minutes/run; Sales→CS runs/year = monthly meetings × 12, with 20 minutes/run. More workflows can be added manually.
- AI Coaching uses the top-level user count and a 10% relative closing uplift. Platform licensing is computed as users × €99/month × 12; each agent run costs €0.90. Product-module selections control included estimate components. Forecasting/Intelligence has no separate quantified ROI component. Figures remain examples, not guarantees.
- Source-level JavaScript syntax and calculator formula/preset tests passed in English and German. Production Hostinger deploy and visual browser QA remain unverified.

## Product visuals, navigation and ROI consolidation — November 23, 2026

- The ROI Calculator now exposes **one AI Assistant module** combining meeting capture/notes (15 minutes per meeting by default) with CRM/follow-up work (3 minutes per call). Both time-savings components toggle together. The internal Pricing Calculator at `sales.kickscale.si` is unchanged.
- Product Information in EN/DE includes a Kickscale platform-layer illustration, five connected capabilities, integration shortcuts, and the four trust badges from the supplied Kickscale screenshot: ISO 27001 certified, GDPR/DSGVO, EU hosting (Germany), and EU AI Act. Trust claims link to the Kickscale legal pages for detailed status and scope. The image is loaded from the existing public Kickscale website `https://kickscale.si/assets/revenue-stack-cropped.webp`.
- The Product Information navigation uses a large bilingual mega-menu inspired by the existing Kickscale website. It links module items directly to `www.kickscale.com` product routes (based on the parallel Kickscale PHP site's route definitions), integration and release pages, Help Center, and legal docs. These external destinations were not HTTP-verified from the execution environment; manually verify after Hostinger deployment.
- `Presentations & Demos` / `Präsentationen & Demos` is the title in the shared navigation, homepage cards and presentation pages.
- Static JavaScript syntax, ROI module-off/on calculations in both languages and source-level page checks passed. Browser visual QA and Hostinger publication remain to be confirmed.

## Public Product Roadmap — November 23, 2026

The public customer-safe roadmap is available at `/en/roadmap/` and `/de/roadmap/` and is linked from the Resource Hub navigation and homepage. It is a curated, human-readable **static snapshot** from Linear (4 in development, 6 exploring, 3 recently shipped), not a live feed, and explicitly avoids internal issue IDs, bug details, dates and promises. Updates require review and re-publication. It is publicly viewable without the separate internal Sales HQ login.
