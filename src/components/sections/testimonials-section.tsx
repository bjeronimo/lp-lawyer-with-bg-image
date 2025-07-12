import React from "react";
import Image from "next/image";

import {Card, CardContent} from "@/components/ui/card";
import {TestimonialsSectionData} from "@/types/app";

interface TestimonialsSectionProps {
  data: TestimonialsSectionData
}

export default function TestimonialsSection({data}: TestimonialsSectionProps) {
  return (
    <section id={'testimonial'} className="py-32 bg-white relative">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm tracking-widest uppercase font-medium">{data.badge}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mt-3 mb-6">{data.heading}</h2>
          <div className="h-px w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto">
            {data.subHeading}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-stone-50 border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="p-8">
                  <Image src={'/images/quote.svg'}
                         className="text-blue-400 w-12 h-12 mb-6 opacity-50"
                         width={48}
                         height={48}
                         alt={'quote'}
                  />

                  <div>
                    <p
                      className="text-stone-700 italic text-lg mb-8 leading-relaxed line-clamp-3">{testimonial.quote}</p>

                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar.url || "//placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-500"
                      />
                      <div>
                        <p className="font-medium text-stone-800 text-lg">{testimonial.author}</p>
                        <p className="text-blue-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}