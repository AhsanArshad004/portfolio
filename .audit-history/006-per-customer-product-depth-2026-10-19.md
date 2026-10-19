# Per-Customer Product Depth Round

**Date:** 2026-10-19
**Trigger:** "In Trapeze I worked on TimeTable Planner, resourcePlanner, Optimizer, Routing Service, Report Generation and much more and based on your desc looks like i never did anything. That's why I said for each site find there products and in each customer work add all products."

---

## The problem

Every previous round described each company as a single vague contribution ("worked on the resource/crew scheduling module"), which understates real, multi-module work. The fix isn't cosmetic wording — it required researching each company's actual named product line and rewriting the project entries to list the real products, not a single invented generic feature set.

## Research and changes, per company

**Trapeze FX (→ Nexfeld).** Pulled Trapeze Group's own solution guides and confirmed the 5 real named modules: Timetable Planner, Resource Planner, Optimizer, Routing, Report Generation (Power BI-based). Rewrote the title, description, solution text, and the Key Features grid (now 5 cards, one per module) to list all of them, instead of one generic "scheduling module" claim.

**Dokmee.** Pulled Dokmee's real product list (ECM, Capture, Cloud ECM, Mobile ECM, Electronic Forms, AI Chat, Page Counter). Rewrote the project to reflect working across ECM, Capture, Cloud ECM, and Mobile ECM — matching what you told me ("work on all their products" after the move from Forms).

**ScoreCEO.** Pulled ScoreCEO's real feature page and swapped generic feature names for the actual named modules: Dispute Management System, Lead/Client Portal, Compliance Tools, Invoicing & Billing Engine.

**PropertyScout.** Grounded the support-assistant's problem description in PropertyScout's real named features (owner search, parcel/APN search, preliminary title reports) instead of a generic "FAQ questions" framing.

## A real inconsistency caught and fixed

While doing this, found that **About.jsx and the current "Senior Software Developer" role had been wrongly rewritten (two rounds ago) to list "Dokmee ECM" as current work at Contour Software** — but Dokmee's actual project dates (2020–2022) fall entirely inside the earlier Nextbridge tenure. Moved the Dokmee mention back to the Nextbridge-era roles where it actually belongs; the current role now only references Trapeze FX/Nexfeld, which is the one that actually matches the 04/2022–Present dates.

## A real visual bug caught while verifying

The Trapeze hero screenshot has its own bright marketing text baked into the image ("Optimize every run. Strengthen every route."). The existing whole-image gradient overlay wasn't dark enough to keep the site's own title text legible on top of it — the two texts visibly collided.

Fixed by replacing the gradient with a solid backdrop panel behind just the title block, which works regardless of how busy or light/dark the underlying screenshot is. Verified against both the Trapeze screenshot (dark, busy) and the Dokmee screenshot (light background) — both now render cleanly.

## Verification

- `npm run build` — clean.
- `npm run test:smoke` — 12/12 passing.
- Lighthouse (mobile) — still 100/100/100/100, no regression from the hero/panel change.
- Visually confirmed both the Trapeze and Dokmee hero panels are legible.

## Still standing from prior rounds (unchanged)

F23 (phone number) and F24 (employer confidentiality sign-off) are still the only two items that need a decision from you, not more research from me.
