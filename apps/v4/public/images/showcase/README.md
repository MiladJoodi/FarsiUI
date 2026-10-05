# Showcase example previews

Put light/dark screenshots here, then point to them from `apps/v4/lib/showcase.ts`.

Suggested filenames:

| Example | Light | Dark |
| --- | --- | --- |
| dashboard | `dashboard-light.png` | `dashboard-dark.png` |
| analytics | `analytics-light.png` | `analytics-dark.png` |
| tasks | `tasks-light.png` | `tasks-dark.png` |
| calendar | `calendar-light.png` | `calendar-dark.png` |
| team-chat | `team-chat-light.png` | `team-chat-dark.png` |
| ecommerce | `ecommerce-light.png` | `ecommerce-dark.png` |
| ai-assistant | `ai-assistant-light.png` | `ai-assistant-dark.png` |
| landing | `landing-light.png` | `landing-dark.png` |
| pricing | `pricing-light.png` | `pricing-dark.png` |
| blog | `blog-light.png` | `blog-dark.png` |
| settings | `settings-light.png` | `settings-dark.png` |
| authentication | `authentication-light.png` | `authentication-dark.png` |

In `showcase.ts` for each project:

```ts
imageUrl: "/images/showcase/dashboard-light.png",
imageUrlDark: "/images/showcase/dashboard-dark.png",
```

Recommended size: about **1600×1000** (or 16:10), PNG/WebP, cropped from the top of the page.
