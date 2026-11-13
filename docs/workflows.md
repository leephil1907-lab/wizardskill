# WizardSkill workflows

## 1. New website or product interface

1. Inspect the repository and identify the stack.
2. Write a concise brief: audience, problem, offer, primary action, required routes, content, and constraints.
3. Select references from the resource catalog.
4. Define page hierarchy, tokens, components, and responsive behavior.
5. Implement using the existing framework and conventions.
6. Add real content, imagery, form states, navigation, and trust evidence.
7. Run tests, lint, type check, and production build.
8. Report changes and remaining work.

## 2. Existing website improvement

1. Capture the current site structure and visual language.
2. Identify the specific user problem or requested change.
3. Trace components, routes, APIs, and data dependencies.
4. Reuse existing components and design tokens.
5. Make the smallest coherent set of changes.
6. Confirm that unrelated routes and business logic remain intact.
7. Compare before/after behavior and run checks.

**Default rule:** no redesign, no replacement, no unnecessary structural changes unless explicitly requested.

## 3. Landing page

Build the page around one clear conversion goal:
- Hero: who it is for, what outcome it delivers, and a primary CTA.
- Proof: verified testimonials, customer logos, case studies, or measurable evidence.
- Problem and solution: explain the cost of the problem and how the offer helps.
- Benefits: concrete outcomes rather than vague feature claims.
- Process: what happens after the CTA.
- Objection handling: pricing context, scope, security, support, and FAQs as relevant.
- Final CTA: repeat the next step.

Never invent customer logos, reviews, performance metrics, certifications, or guarantees.

## 4. Design system extension

1. Inventory current tokens and components.
2. Identify missing variants or inconsistent patterns.
3. Extend existing primitives before introducing replacements.
4. Define component states and responsive rules.
5. Add examples or stories if the project already uses them.
6. Check contrast, keyboard behavior, and reduced motion.
7. Avoid creating a parallel design system.

## 5. Motion and micro-interactions

For each animation, specify:
- Purpose and trigger
- Elements affected
- Duration and easing
- Entry/exit behavior
- Reduced-motion alternative
- Performance constraints

Prefer transform and opacity for animation. Avoid layout-thrashing effects, excessive parallax, constant decorative motion, and animation that delays the user's task.

## 6. Social creative

1. Define platform, audience, objective, offer, and format.
2. Write one central message and a clear visual hook.
3. Use a legible hierarchy: hook, supporting detail, brand, CTA.
4. Respect safe zones and platform dimensions.
5. Produce variants only when they test a meaningful difference.
6. Keep claims factual and disclose generated or edited media when required.

## 7. Delivery checklist

Use [quality-gate.md](../templates/quality-gate.md) before calling work complete.
