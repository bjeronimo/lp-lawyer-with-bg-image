import type { Metadata, Viewport } from "next"
import HomePage from "@/pages/home-page";
import {LandingPageData} from "@/types/app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Igor Santos Advocacia",
  description:
    "Igor Santos Advocacia | Advocacia Especialista em Ações Bancárias.  Trabalhamos com compromisso e excelência para defender você da melhor forma. Entre em contato e veja como podemos proteger seus interesses.",
}

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/landing.json`);
  const data: LandingPageData = await res.json()

  return <HomePage data={data} />
}
