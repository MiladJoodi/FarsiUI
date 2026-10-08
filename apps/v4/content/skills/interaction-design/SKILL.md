---
name: interaction-design
description: >
  Design and implement microinteractions, motion design, transitions, and user
  feedback patterns. Use when adding polish to UI interactions, implementing
  loading states, or creating deliberate user feedback.
---

# Interaction Design

Create engaging, intuitive interactions through motion, feedback, and thoughtful
state transitions that enhance usability — not decoration for its own sake.

## When to Use This Skill

- Adding microinteractions to enhance user feedback
- Implementing smooth page and component transitions
- Designing loading states and skeleton screens
- Building notification and toast systems
- Designing hover and focus states
- Managing Empty, Error, and Success states

## Core Principles

### Purposeful motion

Motion should communicate:

- **Feedback**: Confirm user actions occurred
- **Orientation**: Show where elements come from/go to
- **Focus**: Direct attention to important changes
- **Continuity**: Maintain context during transitions

### Timing guidelines

| Duration | Use case |
| --- | --- |
| 100–150ms | Micro-feedback (hovers, clicks) |
| 200–300ms | Small transitions (toggles, dropdowns) |
| 300–500ms | Medium transitions (modals, page changes) |
| 500ms+ | Complex choreographed animations |

### Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1); /* entering */
--ease-in: cubic-bezier(0.55, 0, 1, 0.45); /* exiting */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

## Patterns

### Loading button

When the user submits:

1. Enter a loading state (spinner + keep the label)
2. Prevent double submit
3. Show success or error clearly afterward

### Skeleton screens

Preserve layout while loading to avoid content jump (CLS).

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Best Practices

1. **Performance First**: Prefer `transform` and `opacity` for 60fps
2. **Reduce Motion Support**: Always respect `prefers-reduced-motion`
3. **Consistent Timing**: Use a timing scale across the app
4. **Interruptible**: Allow users to cancel long animations
5. **Progressive Enhancement**: UI must work without fancy motion

## Common Issues

- Animating `width` / `height` / `top` / `left` → jank
- Over-animation → fatigue
- Blocking input during animations
- Missing loading / empty / error states

## Source

Adapted from [wshobson/agents — interaction-design](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/interaction-design).
