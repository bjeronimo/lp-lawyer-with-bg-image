import Link from "next/link";
import {ChevronRight, MapPin} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {LocalizationSectionData} from "@/types/app";

interface LocalizationSectionProps {
  data: LocalizationSectionData;
}

export default function LocalizationSection({data}: LocalizationSectionProps) {
  return (
    <section id={'localization'} className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="md:col-span-2 bg-stone-100 rounded-lg overflow-hidden shadow-lg h-[500px] flex items-center justify-center">
            <div className="w-full">
              <iframe
                src={data.iframe.src}
                width="100%"
                height="500"
                style={{
                  border: 0,
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-none">
              <CardContent className="p-6">
                <h3 className="text-3xl font-medium text-stone-800 mb-4 flex items-center">
                  <MapPin className="h-7 w-7 text-blue-600 mr-2"/>
                  Visite nosso escritório
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-stone-800">Nosso endereço</h4>
                    <p className="text-stone-600 text-sm">
                      {data.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Contato</h4>
                    <p className="text-stone-600 text-sm">
                      {data.contact.map((item, i) => (
                        <span key={i} className={'pr-6'}>
                          {item}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Atendimento</h4>
                    <p className="text-stone-600 text-sm">
                      {data.address}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap my-12 gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-none px-8 py-6">
                    <Link href={data.cta.url} className="flex items-center">
                      {data.cta.text}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
}
