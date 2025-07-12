import React from "react";

import DynamicIcon from "@/components/dynamic-icon";
import {Card, CardContent} from "@/components/ui/card";
import {DifferentialsSectionData} from "@/types/app";


type DifferentialsSectionProps = {
  data: DifferentialsSectionData;
}

export default function DifferentialsSection({data}: DifferentialsSectionProps) {
  return (
    <section id={'differentials'} className="py-32 bg-white relative">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm tracking-widest uppercase font-medium">{data.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mt-3 mb-6">{data.heading}</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((differential, index) => (
            <Card
              key={index}
              className="bg-stone-50 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  {differential.icon &&
                      <DynamicIcon name={differential.icon} className="text-blue-400 w-12 h-12 mb-6 opacity-50"/>}

                  <p className="text-foreground text-lg mb-4 leading-relaxed">{differential.title}</p>
                  <p className="text-foreground/70 italic text-lg mb-8 leading-relaxed">{differential.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}