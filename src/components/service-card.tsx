import Image from "next/image";
import React from "react";

import {ServiceCard as TServiceCard} from "@/types/app";

type ServiceCardProps = {} & TServiceCard

export function ServiceCard({heading, description, image}: ServiceCardProps) {
  return (
    <div className="group relative min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      <Image
        src={image.url}
        alt={image.alt}
        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        fill
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <h3 className="text-2xl font-serif mb-3">{heading}</h3>
        <p className="text-md text-white/80 mb-6 line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
}
