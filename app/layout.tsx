import type { Metadata } from 'next'

import { Toaster } from 'sonner'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeProvider } from '@/components/providers'
import { ThemeSwitcher } from '@/components/theme-switcher'


export const metadata: Metadata = {
  title: 'Shadcn Editor',
  description: 'Lexical Editor using Shadcn Theming and Components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#09090b')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <div data-wrapper="" className="border-border/40 dark:border-border">
            <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
          <Toaster />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
