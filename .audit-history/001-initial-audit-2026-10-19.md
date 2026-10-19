# Portfolio Audit Report (Read-Only)

**Date:** 2026-10-19
**Site:** https://ahsanarshad004.github.io/portfolio/
**Repository:** https://github.com/AhsanArshad004/portfolio (audited at commit `791fcf4`, which matches the live deployment)

---

## Section 1 — Executive assessment

"20% polished" is harsh for the code but fair for what a visitor sees. The technical base is sound: a small React + Vite + Tailwind app, about 64 KB of JavaScript, automatic deployment, and a consistent dark theme. What's on top of it, though, reads like a template that isn't finished yet. The site has a broken primary journey, placeholder content and numbers that contradict each other.

**What works**
- The tech stack is light and fast.
- Colors and type (slate background, cyan accent, Poppins) are mostly consistent.
- The hero is clear.
- Contact details are real and work.
- Each project already has a Problem → Solution → Impact structure.

**What's weak, in order of damage**
1. **Project links break when shared or reloaded.** Anyone who opens a project URL from a recruiter's email, LinkedIn, or by reloading the page sees GitHub's "Site not found".
2. **Placeholder content is live:** the "Coming Soon" testimonials, the `github.com/yourusername` link (a real stranger's account), and 4 of 6 project images broken.
3. **The numbers contradict each other.** The site says "10+ years" but the graduation year is 2019. It says "500+ users" in one place and "1M+ users" in another. Some projects are dated before the career started. A careful recruiter will notice, and these numbers are the site's main selling point.
4. **Personal contribution isn't visible.** The project pages describe what the product does, not what Ahsan did, inside large team products (Trapeze, Dokmee).
5. **Freelance clients get no services, no evidence and no real visuals.** Every image is a stock photo.

**Biggest missed opportunity:** the work itself is real and interesting: a transit scheduling system, ECM tooling, and a RAG chatbot. A one-paragraph "my role, my decisions, the result" per project would do more than any visual redesign.

---

## Section 2 — Evidence and limitations

**Inspected**
- Every tracked file: `src/**`, data, config, workflow, `public/404.html`, README, `docs/SETUP.md`, `test-portfolio.js`.
- The live site at 1440×900 and 390×844 (Playwright): homepage, the Dokmee ECM project page, and in-app navigation to the AI Chat project.

**Checks actually run**
- Read the DOM for links, images, headings, landmarks and resource sizes.
- `curl` HTTP status for every image URL and external link.
- Opened a project URL directly.
- Measured scroll position after clicking a project card.
- Tested the mobile menu.
- Measured the progress-bar widths.
- One Lighthouse run (mobile, homepage): Accessibility 85, Best Practices 100, SEO 100.
- Checked the CI runs and repo settings through the GitHub API.

**Screenshots** (in `.playwright-mcp/`)
- `desk-home-full.png` — full homepage at desktop width.
- `desk-project-full.jpeg` — Dokmee ECM project page at desktop width.
- `mobile-hero.png` — homepage hero at 390px wide.

**Not verified**
- Real performance numbers. Lighthouse here excludes performance; there is only one page-load sample of about 1.4 s, which depends on the network.
- Tablet layout.
- Screen-reader behavior beyond Lighthouse/axe.
- Safari and Firefox.
- Whether any claimed metric is true (employer data can't be verified).
- Project pages other than Dokmee ECM and AI Chat (they share the same components, so the same defects apply).

**Not run**
- `npm run build`, `npm audit` and `test-portfolio.js` all write files or install packages. Also, `test-portfolio.js` imports `playwright`, which isn't in `package.json`, and it calls `browser.createContext()`, which isn't a Playwright API. It wouldn't run as written.

---

## Section 3 — Scorecard

| Dimension | Score | Evidence | Confidence |
|---|---|---|---|
| Visual design | **5** | Consistent dark palette and type, but broken images, a white Testimonials block in a dark page, a broken hero image on project pages, an orphaned 4th feature card, mismatched containers | High |
| User experience | **3** | Project deep links lead to a 404 page; project pages open mid-page; header links do nothing on project pages; mobile menu doesn't close | High |
| Content quality | **3** | Placeholder testimonials, problem text shown twice, metrics without units, project names that don't match the README | High |
| Recruiter appeal | **4** | Role and stack are clear in the first few seconds; personal contribution is missing; contradictory years and dates | Medium |
| Freelance-client appeal | **3** | No services list, no real screenshots, placeholder testimonials, contact is just three cards | Medium |
| Technical quality | **6** | Small, readable, sensible structure; but a gallery data-path bug, unused data fields, a keyframes collision, two duplicated counter components, a broken test script | High |
| Accessibility | **5** | Lighthouse 85; unlabeled 24px menu button; no `<main>` on the homepage; feature text only appears on mouse hover; counters show "0" before animating | High |
| Performance | **NOT FULLY ASSESSED** (likely 7–8) | 64 KB JS and 4 KB CSS, no lazy loading on the project hero image, a render-blocking Google Fonts link, a missing favicon | Low |
| SEO | **4** | Lighthouse 100 only covers basics. One title and description for every route, no Open Graph or canonical tags, project pages return HTTP 404 to crawlers | High |
| Professional credibility | **2** | Placeholder testimonials, a stranger's GitHub link, contradictory experience claims, every skill marked "Expert Level" | High |

---

## Section 4 — Top findings

Confirmed unless marked "verify".

| ID | Location | Sev / Conf | Evidence | Why it matters | Fix | Effort | Acceptance |
|---|---|---|---|---|---|---|---|
| **F01** | `public/404.html:12` | **P0 / High** | Opening `/portfolio/project/dokmee-ecm` redirects to `ahsanarshad004.github.io/?route=…` → "Site not found · GitHub Pages" (HTTP 404). The redirect drops the `/portfolio/` base path. | Every shared or reloaded project link is broken. This is the main recruiter journey. | Redirect to `/portfolio/?route=…` (use the base path). | S | A direct load or refresh of any `/portfolio/project/<id>` shows that project. |
| **F02** | `src/components/Testimonials.jsx`, `src/pages/HomePage.jsx:20` | **P1 / High** | Shows "Coming Soon", "Your Client", "Add client feedback here…". It's also the only white section on the page. | Signals an unfinished site and undermines trust. | Remove the section until there are real, permission-cleared quotes. | S | No placeholder text anywhere. |
| **F03** | `Header.jsx:31,45`, `Footer.jsx:12`, `package.json:8`, `docs/SETUP.md`, `README.md:5` | **P1 / High** | `github.com/yourusername` returns HTTP 200: a real stranger's profile, linked 3 times on the live site. | Recruiters are sent to someone else's code. | Use `https://github.com/AhsanArshad004` everywhere. | S | `grep yourusername` returns nothing. |
| **F04** | `src/data/projects.js` images | **P1 / High** | Unsplash IDs `1507842217343…`, `1516321318423…` and `1450101499163…` return 404. That breaks 4 of 6 card thumbnails, 4 project hero images and some gallery images. Raw alt text shows on the dark background. | It's the first visual of half the projects. | Replace with real (sanitized) screenshots or a designed placeholder. | M | Every image returns 200; none shows alt text. |
| **F05** | Hero / About / Experience copy | **P1 / Med** (verify) | "10+ years" (`Hero.jsx:25`, `About.jsx:44`) vs graduating in 2019 and starting 09/2019, about 7 years. Experience says "6+ years" (`Experience.jsx:33`). | Recruiters check this first; one contradiction makes every other number suspect. | Use one accurate figure everywhere. | S | Years are identical in every place. |
| **F06** | `projects.js` vs `Experience.jsx` | **P1 / Med** (verify) | Dokmee Forms is dated 2019-01, before the career started (09/2019). Dokmee ECM runs to 2022-12, but Nextbridge ends 03/2022. ScoreCEO runs 2021-09 to 2023-03, but Experience places it in the 12/2019–02/2021 role. Trapeze starts 2022-01, but Contour starts 04/2022. | The dates are never shown, so the risk is mostly the README and future reuse. They still show the data isn't reliable. | Fix the dates, then either show them on project pages or delete them. | S | Each project's dates fall inside the matching job. |
| **F07** | Metrics: `ProjectCard.jsx:29`, `ProjectImpactMetrics.jsx:54` | **P1 / High** | Cards add "%" to every metric: "40% Global Reach" (meant 40 countries), "0% Reporting Lag", "3% Processing Time". Detail pages: "1M+" becomes "1"; "$1M" shows as "1"; "3x" shows as "3"; "85" and "60" have no unit. The "%" check on line 54 can never be true. | The numbers look wrong or meaningless, which hurts the claims most meant to be believed. | Store display strings such as `value: '85%'` and `display: '$1M+'`, and render them as written. Drop the count-up or animate only the number. | S | Every metric shows its intended unit. |
| **F08** | Project content | **P1 / Med** | The text describes the product ("Built enterprise-grade constraint-solving engine…") with no "my role" section. Experience says "Led full-stack development of Trapeze FX" and "Architected & built 3 SaaS platforms" in 13 months as a Software Engineer. | Hiring managers can't tell personal work from the team's, and big unattributed claims read as inflated. | Add `role`, `teamSize`, `myContributions[]` and `challenges` per project. Rewrite claims to the scope that can be defended in an interview. | M | Every project page has a "My role" block with 3–5 specific contributions. |
| **F09** | Inconsistent statistics | **P1 / Med** (verify) | Quick Facts "500+ Users Impacted" (`About.jsx:70`) vs Trapeze "1M+ users" / "MILLIONS". "500+ transit agencies" vs "40+ countries". "SOC2 Type II certified", "$500K+ savings", "99% compliance score" have no source. | Unexplained, inconsistent numbers suggest they were invented. Some may also be confidential employer data. | Keep only figures that can be sourced and are allowed to be published; say what each one measures. | S–M | Every metric has a known source, and the same number is used everywhere. |
| **F10** | `ProjectGallery.jsx:5` | **P2 / High** | Reads `project.details.gallery`, but the data is in `project.images.gallery`, so the gallery never renders (checked: no "Gallery" heading). The lightbox also has no Escape key, focus trap or dialog role. | Dead code. Fixing the path would also expose broken stock images. | Don't fix until real screenshots exist (F04). Then fix the path and make the lightbox accessible, or use `<dialog>`. | S | Gallery shows real images; Escape closes it; focus is kept inside. |
| **F11** | Routing (`App.jsx`) | **P1 / High** | Clicking the AI Chat card opened the page scrolled to y=1590, with the title 1,268px above the viewport. | Visitors land in the middle of a page with no context. | Add `<ScrollRestoration />` or a `scrollTo(0,0)` on route change. | S | Every project page opens at the top. |
| **F12** | `Header.jsx:26-30` on project pages; `ProjectDetail.jsx:38` | **P2 / High** (from code) | Header links are plain `#about` anchors, so on `/project/x` they do nothing. "Back to Projects" goes to the top of the homepage, not the projects section. | Navigation feels broken. | Use `/#about`-style links; send Back to `/#projects`. | S | Header links work from every route. |
| **F13** | `Header.jsx:15-49` | **P1 / High** | Lighthouse `button-name` failure; the button is 24×24px (below the 44px touch guideline); no `aria-expanded`; the menu stays open after tapping a link (checked). | Hard to use on a phone and with a screen reader. | Add `aria-label`, `aria-expanded`, 44px padding, and close the menu on click. | S | Lighthouse passes; the menu closes after navigating. |
| **F14** | `ProjectFeatureCards.jsx:19` | **P1 / High** | Feature descriptions are `opacity-0` until mouse hover (cards show titles only). Touch and keyboard users never see them. | Content is hidden from most mobile visitors. | Always show the descriptions; remove the `hover:scale-105`. | S | Descriptions are visible without hover. |
| **F15** | `Skills.jsx:79-86` | **P1 / High** | Every one of the ~85 skills shows an "Expert Level" tooltip. Most fall back to a ⭐ icon. Includes items like "Mocha", "Jasmine", "Oracle", "Webpack". React isn't listed, even though About claims a React specialization. | Calling everything expert reads as untrue. Ten categories of chips is noise. | Cut to 3–4 groups of about 20 skills that can be defended in an interview; remove the tooltips and emoji. | S | No proficiency claims; React shows up consistently or not at all. |
| **F16** | `Experience.jsx:56-65` | **P2 / High** | Each card defines `@keyframes expandWidth` inline, and the last definition wins globally, so all 4 bars measured 34% width. The "level" (100/80/60/40) has no meaning anyway. | A decorative bug that suggests seniority is measured as a percentage. | Delete the bars. | S | No progress bars. |
| **F17** | `ProjectDetailHero.jsx:23`, `ProjectProblemSolution.jsx:10` | **P2 / High** | The full problem paragraph appears twice in a row. The hero is fixed at `h-96`, so a long paragraph overflows the image on mobile (text block 364px in a 384px hero at desktop). | Repetition and a crowded hero. | Put the one-line `description` in the hero; keep the problem text in its own section. | S | No duplicated paragraph. |
| **F18** | SEO / metadata (`index.html`) | **P2 / High** | One `<title>` for every route (project page title is still "Ahsan Arshad - Full Stack Developer"); no Open Graph, Twitter card, canonical or favicon (favicon 404 in console). Project pages return HTTP 404 (F01). | Shared LinkedIn links get no preview card, and project pages can't be indexed. | Set `document.title` per project; add OG tags, a favicon and a canonical link to index.html. | S | Project titles are unique; LinkedIn shows a preview. |
| **F19** | Dead data and docs | **P2 / High** | `demoLink` (5 × `example.com`), `startDate`/`endDate`, `comparison`, `categoryColor` are never rendered. README lists "Timetable Planner" and "check processing" projects that don't exist on the site and says "Live: ahsanarshad.dev (or yourusername…)". The repo has no description or homepage set. | Stale docs; one wrong edit would publish `example.com` links. | Delete the unused fields (or render real ones) and rewrite the README. | S | No `example.com` in the repo; README matches the site. |
| **F20** | Duplicated logic | **P3 / High** | `Counter` (`About.jsx:4`) and `AnimatedCounter` (`ProjectImpactMetrics.jsx:3`) are the same component. Keyframes exist in both `animations.css` and `tailwind.config.js`. Five Tailwind animations and both gradients are unused. `primary` and `accent` are the same color. | Maintenance noise. | Delete the duplicates (probably both counters, see F07). | S | One source per animation. |
| **F21** | `test-portfolio.js` | **P3 / High** | Imports `playwright`, which isn't installed. `browser.createContext()` isn't an API. The console listener is attached after the page loads. | A test file that can't run gives false confidence. | Delete it, or replace it with one working smoke test that covers the deep link (F01). | S | Runs and fails if F01 comes back. |
| **F22** | `HomePage.jsx:13` | **P2 / High** | No `<main>` landmark (Lighthouse). | Screen-reader navigation. | Wrap the sections in `<main>`. | S | Lighthouse a11y ≥ 95. |
| **F23** | Contact | **P3 / Med** (subjective) | A personal mobile number is public. There's no résumé download and no availability or services note. | Privacy (owner's choice); and friction for clients. | Consider removing the phone; add a CV link and "Available for: …". | S | — |
| **F24** | Confidentiality | **P2 / Low** (verify) | Employer products (Trapeze FX, Dokmee) are described with internal-looking business metrics. | Possible NDA or employer-policy issue. | Confirm what is allowed to be published; leave out internal figures. | S | Every published metric is cleared. |

### Suspected issues from the brief

| Hypothesis | Result |
|---|---|
| Placeholder GitHub profile links | **Confirmed** (F03) |
| example.com project-demo links | **Present in the data but not rendered** (F19) |
| Placeholder testimonials | **Confirmed** (F02) |
| Incorrect metric units | **Confirmed** (F07) |
| Stale README / repo metadata | **Confirmed** (F19) |
| Metrics without personal contribution | **Confirmed** (F08) |

---

## Section 5 — Visual consistency audit

| Pattern | Variants found | Make this the standard |
|---|---|---|
| Section background | Dark slate everywhere except Testimonials (`bg-white`, gray-900 text); the project Tech section is a narrower `max-w-4xl` card with its own background | `bg-dark-bg` full width; cards only for grouped content |
| Container width | `max-w-6xl` (header, projects, skills, footer), `max-w-4xl` (about, experience, contact, project body), and an unconstrained "Back to Projects" bar | Two widths: `6xl` for grids, `3xl–4xl` for reading text, and align the Back link to the container |
| Section heading | Homepage uses an eyebrow label + left-aligned H2 (Projects, Skills) or a plain H2 (About, Experience) or a centered H2 (Contact, Testimonials); project pages use centered `text-3xl` | Eyebrow + left-aligned `text-4xl` H2, used everywhere |
| Buttons | Hero: rounded-full white and outline buttons. `.btn-primary`: rounded-lg cyan, never used. A global hover glow applies to every `<button>` (including the lightbox arrows) | Keep the hero pair; delete `.btn-primary` and the global glow |
| Card radius and border | Mostly `rounded-lg` with `border-gray-700`, but gray-600 on feature and metric cards and `border-cyan-500/50` on the Solution box | `rounded-lg border-gray-700`; cyan only for hover/focus |
| Chips | `rounded-full` (skills, tech), `rounded` (card tech tags) | `rounded-full text-xs` |
| Icons | Emoji in metrics, features and skills; SVG only in the menu | Remove the emoji; they look inconsistent across operating systems and don't fit an enterprise tone |
| Motion | Fade-in, count-up, scale-on-hover, progress bars, glow | Keep the one fade-in; delete the rest |

---

## Section 6 — Recruiter and client conversion audit

### Recruiter
- **Understands the candidate?** Yes, from the hero: .NET/Angular full-stack, enterprise work.
- **Trusts the candidate?** The site undercuts this with conflicting years (F05), mismatched figures (F09), every skill marked "Expert" (F15), and a GitHub link to a stranger (F03).
- **Can review the work?** No repos, no code samples, no real screenshots. A shared project link 404s (F01).
- **Can make contact?** Yes; email and LinkedIn work. There's no CV download.

### Freelance client
- **Knows what is delivered?** Partly. The site never says "I build X for Y". There's no services or engagement-model section, and "Let's Work Together" has no next step (rate, availability, scheduling link).
- **Doubt triggers:** placeholder testimonials, broken images, stock photos labelled "Chat Interface", and "Users Impacted 500+" beside "1M+".
- **Strongest asset, buried:** the PropertyScout RAG chatbot is the most client-relevant project and it's listed last. Its demo link (`propertyscout.io`, returns 200) is never rendered.

---

## Section 7 — Prioritized improvement roadmap

1. **Critical and credibility fixes:** F01, F03, F02, F04 (remove or replace images), F05, F06, F09, F24. These are cheap and stop visitors bouncing. They come first because fixing visuals around false or contradictory content is wasted work.
2. **High-impact UX and content:** F08 (personal role), F07 (metrics), F11, F12, F14, F17, a services line and CV link, and moving PropertyScout up. This depends on group 1, because the metrics and claims must be final first.
3. **Visual consistency and design refinement:** Section 5 standards, F15, F16, removing the emoji and extra motion. This comes after content, because layout should fit the final text.
4. **Technical quality and accessibility:** F13, F22, F10 (only once real images exist), F18, F19, F20, F21 (smoke test for F01).
5. **Final polish (optional):** project screenshots in the gallery, a case-study layout, OG images, testimonials once real ones exist.

---

## Section 8 — Implementation backlog

| Task | Files | Acceptance | Effort | Validation |
|---|---|---|---|---|
| T1 Fix SPA redirect base | `public/404.html` | Direct load and refresh of `/portfolio/project/validcheck` renders the page | S | Open in a browser after deploy |
| T2 Real GitHub URL | Header, Footer, package.json, README, SETUP.md | `grep -r yourusername` returns nothing | S | grep + click |
| T3 Remove Testimonials | HomePage, Testimonials.jsx | Section gone | S | Visual |
| T4 Reconcile years, dates and figures | Hero, About, Experience, projects.js | One consistent number per fact; dates inside each job | S | Read-through against the CV |
| T5 Metric display strings | projects.js, ProjectCard, ProjectImpactMetrics | "85%", "40 countries", "$1M+" render exactly | S | Visual on all 6 projects |
| T6 Replace broken images | projects.js, assets | All image URLs return 200 or are removed | M | `curl` each URL |
| T7 "My role" block | projects.js, new section in ProjectDetail | Role, team size, 3–5 contributions per project | M | Content review |
| T8 Scroll to top on route change | App.jsx | Project page opens at y=0 | S | Click the last card |
| T9 Route-aware nav and Back link | Header, ProjectDetail | Header links work from project pages | S | Click each link |
| T10 Accessible mobile menu | Header | Label, `aria-expanded`, 44px target, closes on click | S | Lighthouse + manual |
| T11 Always show feature text; no duplicate problem text | ProjectFeatureCards, ProjectDetailHero | Visible without hover; one problem paragraph | S | Mobile check |
| T12 Trim skills | Skills.jsx | ≤4 groups, no "Expert" tooltips, no emoji | S | Visual |
| T13 Remove progress bars | Experience.jsx | Bars gone | S | Visual |
| T14 Unify containers, headings, testimonial section background | All sections | Matches Section 5 table | M | Side-by-side screenshots |
| T15 `<main>`, per-route title, OG tags, favicon | HomePage, ProjectDetail, index.html, public/ | Lighthouse a11y ≥95; unique titles; no favicon 404 | S | Lighthouse + LinkedIn post inspector |
| T16 Delete dead data, styles and duplicate counters; rewrite README | projects.js, css, tailwind config, README | No unused fields or animations | S | `npm run build` passes |
| T17 Replace test-portfolio.js with a deep-link smoke test | test file, package.json | Fails if T1 regresses | S | Run it |

---

## Section 9 — Three highest-impact changes

1. **Fix the deep-link redirect (T1).** Recruiters share links, and today every shared project link is a GitHub 404. It's a one-line fix that unblocks the main journey.
2. **Remove placeholders and contradictions (T2–T4).** A stranger's GitHub, "Coming Soon" testimonials and "10+ years" against a 2019 graduation can each disqualify the candidate within seconds, before anyone reads a project. The fix is mostly deleting things.
3. **Add "My role" per project and fix the metrics (T5, T7).** That turns the site from a list of product brochures into evidence of engineering ability. This is what an interview decision is based on, and no visual redesign can stand in for it.

A redesign isn't justified. The structure is fine; the problems are content, a few bugs, and cleanup.

---

## Section 10 — Approval checkpoint

Approve or adjust this roadmap before any implementation begins. Open questions:
- **Facts:** confirmed years of experience, the correct project dates, and which metrics are allowed to be published.
- **Phone number:** keep it public or remove it?
- **Implementation:** the recommendation is to do group 1 as a small first PR.

Nothing will be implemented until approved.
