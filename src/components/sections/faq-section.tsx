import React from "react";
import {FaqSectionData} from "@/types/app";

interface FaqSectionProps {
  data: FaqSectionData;
}

export default function FaqSection({data}: FaqSectionProps) {
  return <section id={"faq"} className="py-32 bg-stone-100 relative">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-blue-600 text-sm tracking-widest uppercase font-medium">{data.badge}</span>
        <h2 className="text-4xl font-serif font-light text-stone-800 mt-3 mb-6">{data.heading}</h2>
        <div className="h-px w-20 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-lg text-stone-700">{data.subHeading}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {
          data.items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-stone-800 mb-2">{item.heading}
              </h3>
              <p className="text-stone-700">
                {item.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  </section>;
}