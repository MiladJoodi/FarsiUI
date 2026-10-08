---
name: design-system-patterns
description: >
  Build scalable design systems with design tokens, theming infrastructure, and
  component architecture patterns. Use when creating design tokens, implementing
  theme switching, building component libraries, or establishing design system
  foundations.
---

# Design System Patterns

Master design system architecture to create consistent, maintainable, and
scalable UI foundations.

> For **multiple isolated Design Systems inside one Next.js app** (style classes,
> cookies, FOUC, iframe preview sync), also use `nextjs-multi-design-system`.

## When to Use This Skill

- Creating design tokens for colors, typography, spacing, and shadows
- Implementing light/dark theme switching with CSS custom properties
- Building multi-brand theming systems
- Architecting component libraries with consistent APIs
- Establishing design-to-code workflows with Figma tokens
- Creating semantic token hierarchies (primitive → semantic → component)

## Core Capabilities

### 1. Design Tokens

- Primitive tokens (raw values)
- Semantic tokens (contextual meaning: `text-primary`, `surface-elevated`)
- Component tokens (specific usage: `button-bg`, `card-border`)
- Clear naming and organization

### 2. Theming Infrastructure

- CSS custom properties architecture
- Theme context / providers
- System preference detection (`prefers-color-scheme`)
- Persistent theme storage
- Reduced motion and high contrast modes

### 3. Component Architecture

- Compound component patterns
- Polymorphic components (`as` prop)
- Variant and size systems
- Slot-based composition / headless UI patterns

## Best Practices

1. **Name Tokens by Purpose**: `text-primary`, not `dark-gray`
2. **Maintain Token Hierarchy**: Primitives → Semantic → Component
3. **Document Token Usage**: Guidelines next to definitions
4. **Version Tokens**: Treat breaking token changes like API changes
5. **Test Theme Combinations**: Every theme × every component
6. **Avoid Hardcoded Values**: Use tokens instead of raw hex in components

## Common Issues

- Token sprawl without hierarchy
- Inconsistent naming conventions
- Missing dark-mode token mapping
- Hardcoded colors in components
- Circular token references

## Source

Adapted from [wshobson/agents — design-system-patterns](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/design-system-patterns).
