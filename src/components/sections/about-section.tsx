import React from "react";
import Link from "next/link";
import Image from "next/image";
import {ChevronRight} from "lucide-react";

import {Button} from "@/components/ui/button";
import {AboutSectionData} from "@/types/app";

interface AboutSectionProps {
  data: AboutSectionData
}

export default function AboutSection({data}: AboutSectionProps) {
  return <section id={"about"} className="py-32 bg-white relative">
    <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-blue-600 text-xs tracking-widest uppercase font-medium">{data.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mt-3 mb-6">
            {data.profile.name}
          </h2>
          <div className="h-px w-20 bg-blue-500 mb-8"></div>

          <p className="text-stone-700 text-lg mb-6 leading-relaxed">
            {data.profile.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-none px-8 py-6">
              <Link href={data.cta.url} className="flex items-center">
                {data.cta.text}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative h-[550px]">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500"></div>
            <Image
              src={data.profile.image.url}
              alt={data.profile.image.alt}
              fill
              className="w-full h-auto max-h-[550px] object-cover relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-stone-100 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}