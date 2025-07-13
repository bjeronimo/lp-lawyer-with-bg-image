import React from "react";
import type {Metadata, Viewport} from "next"

import {getLandingPageData} from "@/lib/data";
import {LandingPageData} from "@/types/app";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import DifferentialsSection from "@/components/sections/differentials-section";
import AboutSection from "@/components/sections/about-section";
import FaqSection from "@/components/sections/faq-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import LocalizationSection from "@/components/sections/localization-section";
import WhatsappButton from "@/components/whatsapp-button";

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

export default async function HomePage() {
  const data: LandingPageData = await getLandingPageData()

  return (
    <main className="overflow-hidden ">
      <HeroSection data={data.hero}/>

      <ServicesSection data={data.services}/>

      <DifferentialsSection data={data.differentials}/>

      <AboutSection data={data.about}/>

      <FaqSection data={data.faq}/>

      <TestimonialsSection data={data.testimonials}/>

      <LocalizationSection data={data.localization}/>

      <WhatsappButton data={data.whatsappButton}/>
    </main>
  )
}
