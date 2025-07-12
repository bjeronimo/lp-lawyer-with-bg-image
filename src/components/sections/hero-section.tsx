import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ChevronRight} from "lucide-react";

import {Button} from "@/components/ui/button";
import {HeroSectionData} from "@/types/app";

interface HeroSectionProps {
  data: HeroSectionData
}

export default function HeroSection({data}: HeroSectionProps) {
  return (
    <section id={"hero"} className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      <Image src={data.bg.url} alt={data.bg.alt} fill objectFit={'cover'}/>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"/>

      <div className="container px-4 w-[1200px] mx-auto relative z-10 py-20 md:py-32 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-2 bg-blue-600/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white/90 text-sm font-medium tracking-wider px-4 py-1">{data.badge}</span>
            </div>

            <h1 className="lg:text-6xl text-2xl font-serif font-light text-white tracking-wide leading-tight mb-8">
              {data.heading}
            </h1>

            <div className="h-px w-40 bg-blue-500 mx-auto mb-8"></div>

            <p className="text-md md:text-lg text-white/90 max-w-3xl font-light leading-relaxed mb-16">
              {data.subHeading}
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 rounded-none px-10 py-7 text-lg min-w-[200px] min-h-[60px] text-base"
              >
                <Link href={data.leftCta.url}>{data.leftCta.text}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="hidden md:flex bg-blue-500 hover:bg-blue-600  rounded-none px-10 py-7 text-lg min-w-[200px] min-h-[60px] text-base"
              >
                <Link href={data.rightCta.url}>{data.rightCta.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <div className="absolute bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white/80">
        <p className="text-lg md:text-xl italic font-serif mb-2">{data.decorativeText}</p>
        {/*<p className="text-sm md:text-base">Descubra como podemos te ajudar!</p>*/}
        <div className="mt-2 animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90 mx-auto text-blue-500"/>
        </div>
      </div>
    </section>
  );
}