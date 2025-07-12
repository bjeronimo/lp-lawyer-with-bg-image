import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "@/styles/globals.css"

import Header from "@/components/header"
import Footer from "@/components/footer"
import {ThemeProvider} from "@/components/theme-provider"
import {GoogleTagManager} from "@/components/analytics/google-tag-manager";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Igor Santos Advocacia",
  description:
    "Igor Santos Advocacia | Advocacia Especialista em Ações Bancárias.  Trabalhamos com compromisso e excelência para defender você da melhor forma. Entre em contato e veja como podemos proteger seus interesses.",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Header/>
      {children}
      <Footer/>

      <GoogleTagManager/>
    </ThemeProvider>
    </body>
    </html>
  )
}
