# Prompt: Add purposeful motion and interaction

Inspect the existing UI and animation stack before making changes. Preserve current components and interaction behavior.

For each proposed interaction define:
- User purpose and trigger
- Initial, active, and final states
- Duration and easing
- Keyboard and touch behavior
- Reduced-motion fallback
- Performance impact

Implement only motion that improves comprehension, feedback, or perceived continuity. Prefer transform and opacity. Avoid unnecessary animation dependencies, constant decorative movement, scroll hijacking, and transitions that block task completion.

Test on mobile and desktop where tooling permits. Verify focus, reduced motion, and that the feature still works without animation. Report exactly what was verified.
