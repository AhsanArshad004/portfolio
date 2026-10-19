# Correction Round — User-Reported Issues After Batch 1/2

**Date:** 2026-10-19
**Trigger:** User review of the live/local site surfaced 5 problems the previous fix round missed or introduced.

## Issues Reported

1. **Header links broken, both locally and deployed** — the previous fix (F12) hardcoded `href="/#about"`, which ignores the Vite `base: '/portfolio/'` config. Locally this pointed at `localhost:5173/#about` instead of `localhost:5173/portfolio/#about`; deployed it pointed at the GitHub Pages root instead of `/portfolio/`.
2. **Real project URLs existed; stock Unsplash images were used instead of real screenshots.**
3. **Experience is 6+ years, not 10+** (hero/about still said 10+ after the first round).
4. **Hero intro description was generic/weak.**
5. **No project was actually researched** — technologies and descriptions for several projects didn't match what the real products do.

## Root Cause: F12 Fix Was Incomplete

The Batch 2 fix for F12 (route-aware nav links) replaced `#about` with `/#about`, which is still wrong — it's an absolute path from the domain root, not from the app's base path. `import.meta.env.BASE_URL` (`/portfolio/`) must be used instead. The same mistake would have affected any local image referenced with a plain `/images/...` string, since Vite does not rewrite hardcoded string paths in JS data files — only paths referenced via `import` or built-in asset handling.

**Fix:** `const base = import.meta.env.BASE_URL` in Header.jsx and ProjectDetail.jsx; all nav/back links now built as `` `${base}#about` ``. Local images moved to `src/assets/projects/` and imported as ES modules so Vite resolves the correct base-prefixed, hashed URL at build time — verified by grepping the built JS bundle for `/portfolio/assets/*.jpg`.

## Research Performed (WebSearch + live screenshots)

| Project | Real product found? | Correction made |
|---|---|---|
| Trapeze FX | Yes — Trapeze Group's fixed-route/crew scheduling suite (trapezegroup.com) | Tech stack was fabricated (React/Node/PostgreSQL) for what is actually a C#/SQL Server/Oracle/WPF enterprise app. Rewrote description, tech, and claims to match; real screenshot captured from trapezegroup.com. |
| Dokmee ECM | Yes — dokmee.com | Already fairly accurate; tightened wording to match real feature set (OCR capture, workflow engine, e-signature, audit log). Real screenshot captured. |
| ValidCheck | No public product under this name | Left the internal-tool framing (plausible, pre-existing), removed the fabricated `example.com` demo link and the unverifiable 75%/500+/80% metrics, replaced with qualitative facts. |
| ScoreCEO | Yes — scoreceo.com, a credit-repair business CRM | Was fabricated as a React/WebSocket/D3.js analytics dashboard. Real product is lead/dispute/compliance management for credit-repair businesses. Full rewrite of description, tech stack (C#/ASP.NET/Angular/SQL Server), features, and metrics. Real screenshot captured. |
| Dokmee Forms | Yes — same family as Dokmee ECM | Reframed as a module later merged into the ECM suite; fixed start date (was before the person's career started). |
| PropertyScout AI Chat | Yes — propertyscout.io, a property/owner-records data platform | Original description framed this as generic customer-support chat; corrected to describe what PropertyScout.io actually is (property data for real estate/insurance/title professionals) so the AI assistant's purpose makes sense. Real screenshot captured. |

All four real screenshots were sourced from each company's public marketing site (not authenticated/internal screens) and are committed to `src/assets/projects/`.

## Other Changes

- `demoLink` now renders as a "Visit live site →" button on project pages (was previously unused dead data per F19). Links point to the real companies' sites where one exists; `null` for ValidCheck, which has no public site.
- Reworded project descriptions from "Built X" (implying solo authorship of an entire enterprise platform) to "Contributed to X" / "Built features for X" — more defensible given these are large team products.
- Fixed "10+ years" → "6+ years" in Hero.jsx, About.jsx, and the Quick Facts counter.
- Rewrote the hero and about intro copy to name specific, real work (transit scheduling, document management, credit-repair CRM, AI/RAG chatbot) instead of generic "scalable, secure, solve real business problems" filler.
- `.playwright-mcp/` (browser automation debug output) was accidentally committed in the first round; untracked it and added to `.gitignore`.

## Verification

- `npm run build` — passes, bundle emits correctly hashed `/portfolio/assets/*.jpg` paths (confirmed via grep).
- Browser test (Playwright, preview server): navigating from a project detail page and clicking "About" in the header lands on `http://localhost:4173/portfolio/#about` — correct base path, confirmed by `location.href` after the click.
- Browser test: all 6 project thumbnails return HTTP 200 (verified via `fetch`); two initially showed `naturalWidth: 0` only because they were lazy-loaded below the fold, not because they were broken.

## Still Open / Needs Your Input

- **ScoreCEO and Trapeze FX identity assumption:** matched by exact, distinctive product name plus plausible timeline (Nextbridge/Contour Software as outsourced dev shops for US/global clients). I could not independently confirm you personally worked on *these specific* companies' software rather than a different internal project that happens to share the name — please confirm.
- **Real screenshots are of the companies' current public marketing sites**, not the specific internal screens you worked on (which aren't publicly accessible). If this framing is a problem, tell me and I'll swap back to neutral placeholders instead.
- **F05/F06/F09/F24** from the original audit (statistics sourcing, exact dates, confidentiality) are still open — this round fixed the ones embedded in the fabricated ScoreCEO/Trapeze FX metrics, but a full pass hasn't been done project-by-project.
