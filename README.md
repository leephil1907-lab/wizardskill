# WizardSkill

**An AI-assisted design and frontend engineering skill system.**

WizardSkill turns a design brief into a researched, structured, implementation-ready website or product interface. It combines a curated design-resource directory, repeatable workflows, reusable prompts, quality gates, and practical frontend guidance.

It is designed for AI coding agents and solo builders. It does not scrape, copy, or redistribute third-party assets. It points agents to original sources and tells them how to use those sources responsibly.

## What is included

- **Core agent skill** — [`.agents/skills/wizardskill/SKILL.md`](.agents/skills/wizardskill/SKILL.md)
- **Resource directory** — [`docs/resource-catalog.md`](docs/resource-catalog.md)
- **Design-to-build workflow** — [`docs/workflows.md`](docs/workflows.md)
- **Prompt library** — [`prompts/`](prompts/)
- **Project brief template** — [`templates/design-brief.md`](templates/design-brief.md)
- **Quality checklist** — [`templates/quality-gate.md`](templates/quality-gate.md)
- **Resource link checker** — [`scripts/check-links.mjs`](scripts/check-links.mjs)

## Quick start

1. Open the target project repository in your AI coding agent.
2. Add or install the WizardSkill folder using the instructions below.
3. Give the agent the project's goal, audience, existing stack, and constraints.
4. Ask it to **plan, research, implement, and verify** the requested design or feature.
5. Require it to preserve existing design systems and working behavior unless a redesign is explicitly requested.

### Install with the skills CLI

From the target project:

```bash
npx skills add leephil1907-lab/wizardskill
```

If your agent does not support the skills CLI, copy `.agents/skills/wizardskill/` into the equivalent skills directory it supports and point the agent to `SKILL.md`.

## Core workflow

1. **Inspect** — understand the existing repository before changing it.
2. **Define** — establish audience, user journey, brand, content, constraints, and success criteria.
3. **Research** — select relevant references from the resource catalog; inspect real examples rather than copying layouts.
4. **Direct** — define the visual system, responsive behavior, components, and interaction states.
5. **Build** — implement in the existing stack and conventions with minimal, deliberate changes.
6. **Verify** — run available checks and inspect desktop, tablet, and mobile behavior.
7. **Report** — summarize changed files, tests, remaining gaps, and deployment requirements.

## Design resource collection

The curated directory includes tools and references for AI site generation, landing pages, social creatives, motion, icons, typography, inspiration, backgrounds, components, Figma work, real app screens, messaging, logos, and animation.

See [the complete catalog](docs/resource-catalog.md). Links are references, not endorsements; availability, pricing, licensing, and product capabilities can change.

## Project principles

- Preserve the existing website's identity and structure when the task is an extension, not a redesign.
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

The checker reports reachable/unreachable URLs and does not modify files. Network access is required.

## Repository structure

```text
.agents/skills/wizardskill/SKILL.md
docs/resource-catalog.md
docs/workflows.md
prompts/
  website-build.md
  landing-page.md
  motion-and-interaction.md
  social-creative.md
templates/
  design-brief.md
  quality-gate.md
scripts/check-links.mjs
README.md
```

## License

The WizardSkill documentation and original templates are provided under the MIT License. Third-party names, services, websites, trademarks, and linked resources remain the property of their respective owners. See [LICENSE](LICENSE).
