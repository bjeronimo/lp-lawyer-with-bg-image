import React from 'react'

import FaqSection from "@/components/sections/faq-section";
import AboutSection from "@/components/sections/about-section";
import DifferentialsSection from "@/components/sections/differentials-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import LocalizationSection from "@/components/sections/localization-section";
import ServicesSection from "@/components/sections/services-section";
import HeroSection from "@/components/sections/hero-section";
import WhatsappButton from "@/components/whatsapp-button";
import {LandingPageData} from "@/types/app";

interface HomePageProps {
  data: LandingPageData;
}

export default function HomePage({data}: HomePageProps) {
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




