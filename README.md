# WizardSkill

**An AI-assisted design and frontend engineering system — with an installable coding skill and a practical web studio.**

WizardSkill helps builders move from a product idea to a researched, structured, implementation-ready experience. It combines an agent skill, curated design resources, reusable prompt workflows, a project brief, and a quality gate.

## Two ways to use WizardSkill

### 1. WizardSkill Studio

A responsive browser workspace for the everyday design-to-build workflow.

- **Overview** — quick access to the core workflow.
- **Resource library** — search and filter 19 curated design and build references.
- **Prompt studio** — create and copy contextual prompts for website builds, landing pages, feature extensions, and motion systems.
- **Project brief** — write, autosave locally, and copy a structured project brief.
- **Quality gate** — track manual pre-ship checks, with progress saved in the current browser.

The Studio is a client-side workspace. Briefs and checklist state stay in the browser's local storage; no account, hosted database, or server-side project storage is included. Prompt generation is local and does not transmit project data.

### 2. Installable agent skill

The core skill lives at [`.agents/skills/wizardskill/SKILL.md`](.agents/skills/wizardskill/SKILL.md).

Install it from a target project:

```bash
npx skills add leephil1907-lab/wizardskill
```

Or copy `.agents/skills/wizardskill/` into the skills directory supported by your coding agent and point it to `SKILL.md`.

## Run the Studio locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Production build and local verification:

```bash
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`. It can be hosted on any static hosting provider that supports SPA fallback to `index.html`.

## Design-to-build workflow

1. **Inspect** — understand the existing repository, stack, routes, design system, assets, and integrations.
2. **Define** — establish audience, user journey, brand, content, constraints, and success criteria.
3. **Research** — select a small number of relevant references; study principles rather than copying layouts.
4. **Direct** — define visual system, responsive behavior, components, and interaction states.
5. **Build** — implement in the existing stack and conventions with minimal, deliberate changes.
6. **Verify** — run available checks and inspect desktop, tablet, and mobile behavior.
7. **Report** — summarize changed files, tests, remaining gaps, and deployment requirements.

## Repository map

```text
.agents/skills/wizardskill/SKILL.md
docs/
  resource-catalog.md
  workflows.md
  external-content-safety.md
prompts/
  website-build.md
  landing-page.md
  motion-and-interaction.md
  social-creative.md
templates/
  design-brief.md
  quality-gate.md
scripts/check-links.mjs
src/
  App.tsx
  data.ts
  main.tsx
  styles.css
index.html
vite.config.ts
```

## Project principles

- Preserve an existing website's identity and working behavior when extending it.
- Prefer real product imagery, meaningful icons, and credible content over placeholders.
- Design responsive layouts and complete interaction states, not just screenshots.
- Use accessible contrast, keyboard navigation, semantic markup, and reduced-motion support.
- Never expose secrets, API keys, private customer data, or environment files.
- Do not claim a feature works until it has been implemented and verified.
- Do not copy proprietary designs or assets; use references for direction and create original work.
- Keep the result maintainable: reuse components, follow existing conventions, and avoid unnecessary dependencies.

## Validate resource links

```bash
node scripts/check-links.mjs
```

The checker reports reachable/unreachable URLs and does not modify files. Network access is required. Availability, pricing, licensing, and provider capabilities can change; verify them with the source before use.

## License

The WizardSkill documentation and original templates are provided under the MIT License. Third-party names, services, websites, trademarks, and linked resources remain the property of their respective owners. See [LICENSE](LICENSE).
