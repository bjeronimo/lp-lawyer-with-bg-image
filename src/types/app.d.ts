import {IconName} from "@/components/dynamic-icon";
import React from "react";

export interface CTA {
  text: string
  url: string
}

export interface Image {
  url: string;
  alt: string;
}

export interface HeroSectionData {
  badge: string;
  heading: string;
  subHeading: string;
  decorativeText: string;
  leftCta: CTA;
  rightCta: CTA;
  bg: Image
}

interface AboutSectionData {
  badge: string;
  profile: {
    name: string;
    bio: string;
    image: Image;
  }
  cta: CTA;
}

export interface DifferentialsSectionData {
  badge: string;
  heading: string;
  items: Array<{
    icon?: IconName,
    title: string,
    description: string,
  }>;
}

export interface FaqSectionData {
  badge: string;
  heading: string;
  subHeading: string;
  items: Array<{
    heading: string;
    description: string;
  }>
}

export interface LocalizationSectionData {
  iframe: React.ComponentProps<'iframe'>
  address: string;
  contact: Array<string>
  openingHours: string;
  cta: CTA
}

export interface ServiceCard {
  image: Image;
  heading: string;
  description: string;
}

export interface ServicesSectionData {
  badge: string;
  heading: string;
  subHeading: string;
  cards: Array<ServiceCard>
}

export interface TestimonialsSectionData {
  badge: string;
  heading: string;
  subHeading: string;
  cards: Array<{
    quote: string;
    avatar: Image;
    author: string;
    location?: string;
  }>
}

export interface WhatsappButtonData {
  url: string;
}

export interface LandingPageData {
  hero: HeroSectionData
  about: AboutSectionData
  differentials: DifferentialsSectionData
  faq: FaqSectionData
  localization: LocalizationSectionData
  services: ServicesSectionData
  testimonials: TestimonialsSectionData,
  whatsappButton: WhatsappButtonData
}


