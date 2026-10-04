import type { Metadata } from "next"
import { headers } from "next/headers"
import { cn } from "cn"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { getMetadataBase, META_THEME_COLORS, siteConfig } from "@/lib/config"
import { DOCS_SIDEBAR_SCROLL_RESTORE_SCRIPT } from "@/lib/docs-sidebar-scroll"
import {
  activeUiFontStyle,
  fontVariables,
  UI_FONT_BOOTSTRAP_SCRIPT,
} from "@/lib/fonts"
import { ActiveThemeProvider } from "@/components/active-theme"
import { DesignSystemPreviewProvider } from "@/components/design-system-preview"
import { FontPreviewProvider } from "@/components/font-preview"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider as BaseTooltipProvider } from "@/registry/bases/base/ui/tooltip"
import { Toaster } from "@/registry/bases/radix/ui/sonner"
import { TooltipProvider as RadixTooltipProvider } from "@/registry/bases/radix/ui/tooltip"
import { Toaster as BaseToaster } from "@/styles/base-nova/ui/toast"

import "@/app/globals.css"
/* Default design system only — comfort/glass/rose CSS chunks load on demand. */
import "@/app/styles/chunk-nova.css"
import "@/app/(app)/(typeset)/typeset.css"

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = getMetadataBase(await headers())

  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    metadataBase,
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Components",
      "FarsiUI",
      "RTL",
      "Persian",
    ],
    authors: [
      {
        name: "FarsiUI",
        url: siteConfig.links.github,
      },
    ],
    creator: "FarsiUI",
    openGraph: {
      type: "website",
      locale: "fa_IR",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: ["/opengraph-image.png"],
    },
    icons: {
      icon: [{ url: "/farsiui/favicon.png", type: "image/png" }],
      shortcut: "/farsiui/favicon.png",
      apple: "/farsiui/favicon.png",
    },
    // Relative path keeps this same-origin (avoids localhost loopback permission prompts).
    manifest: "/site.webmanifest",
    alternates: {
      types: {
        "application/rss+xml": "/rss.xml",
      },
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={cn(
        fontVariables,
        "font-sans",
        "[--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*16)]"
      )}
      style={activeUiFontStyle}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: DOCS_SIDEBAR_SCROLL_RESTORE_SCRIPT,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var activeTheme = localStorage.getItem('active-theme') || 'neutral';
                var applyTheme = function () {
                  document.body.classList.add('theme-' + activeTheme);
                };
                if (document.body) applyTheme();
                else document.addEventListener('DOMContentLoaded', applyTheme);
              } catch (_) {}
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var ds = localStorage.getItem('design-system-preview') || 'default';
                if (ds === 'aether') { ds = 'glass'; localStorage.setItem('design-system-preview', ds); }
                var styleMap = { default: 'style-nova', comfort: 'style-vega', glass: 'style-glass', rose: 'style-rose', nili: 'style-nili', khesht: 'style-khesht' };
                var styleClass = styleMap[ds] || 'style-nova';
                var applyStyle = function () {
                  document.body.classList.add(styleClass);
                };
                if (document.body) applyStyle();
                else document.addEventListener('DOMContentLoaded', applyStyle);
              } catch (_) {}
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: UI_FONT_BOOTSTRAP_SCRIPT,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "group/body font-sans antialiased [--footer-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
        )}
      >
        <ThemeProvider>
          <ActiveThemeProvider>
            <DesignSystemPreviewProvider>
              <FontPreviewProvider>
                <NuqsAdapter>
                  <BaseTooltipProvider delay={0}>
                    <RadixTooltipProvider delayDuration={0}>
                      {children}
                      <Toaster position="top-center" dir="rtl" />
                      <BaseToaster />
                    </RadixTooltipProvider>
                  </BaseTooltipProvider>
                </NuqsAdapter>
                <TailwindIndicator />
                <Analytics />
              </FontPreviewProvider>
            </DesignSystemPreviewProvider>
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
