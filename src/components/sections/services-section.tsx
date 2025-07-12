import React from "react";
import {ServiceCard} from "@/components/service-card";
import {ServicesSectionData} from "@/types/app";

interface ServicesSectionProps {
  data: ServicesSectionData
}

export default function ServicesSection({data}: ServicesSectionProps) {
  return <section id={"services"} className="py-32 bg-slate-900 text-white relative">
    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950 to-transparent"></div>
    <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-500 text-sm tracking-widest uppercase font-medium">{data.badge}</span>
        <h2 className="text-4xl md:text-5xl font-serif font-light mt-3 mb-6">{data.heading}</h2>
        <div className="h-px w-20 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-md md:text-lg text-white/90 max-w-3xl font-light leading-relaxed mb-16">
          {data.subHeading}
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Program Card 1 */}
        {data.cards.map((card, index) => (
          <ServiceCard
            key={index}
            image={{
              url: card.image.url,
              alt: card.image.alt,
            }}
            heading={card.heading}
            description={card.description}
          />
        ))}


        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-01.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Meditation Programs"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Revisão de Juros Abusivos</h3>*/}
        {/*    <p className="text-md text-white/80 mb-6 line-clamp-4">*/}
        {/*      Você pode estar pagando mais do que deveria. Revisamos contratos de financiamento, empréstimos e*/}
        {/*      cartões de crédito.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 2 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-02.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Dhamma Teachings"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Cobranças Indevidas e Negativação Irregular</h3>*/}
        {/*    <p className="text-md text-white/80 mb-6 line-clamp-4">*/}
        {/*      Limpe seu nome de forma rápida e segura. Atuamos contra SPC, Serasa, protestos e cobranças não*/}
        {/*      autorizadas.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 3 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-03.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Defesa em Ações de Busca e Apreensão</h3>*/}
        {/*    <p className="text-md text-white/80 mb-6 line-clamp-4">*/}
        {/*      Proteja seu veículo e seus bens. Atuamos em ações de busca e apreensão de forma estratégica.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 4 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-04.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Superendividamento e Renegociação de Dívidas</h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Negociamos com bancos para reduzir dívidas e preservar seu patrimônio.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 5 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-05.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Golpes e Fraudes Bancárias</h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Caiu em golpe ou teve prejuízo por falha do banco? Você pode ser indenizado.*/}
        {/*    </p>*/}

        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 6 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-06.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Reparação por Golpes em Contas Digitais (Pix, TED, etc.)</h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Quando há falha na segurança do banco, o consumidor tem direito a ser ressarcido.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 7 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-07.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Encerramento de Conta com Pendência Indevida</h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Ação para regularizar situações em que o banco se nega a encerrar a conta sem justificativa válida.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 8 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}
        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-08.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Contestação de Débito Automático Indevido</h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Entramos com ações para cancelar e reaver valores de débitos não autorizados.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Program Card 9 *!/*/}
        {/*<div className="group relative overflow-hidden">*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>*/}

        {/*  <Image*/}
        {/*    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/card-09.jpg`}*/}
        {/*    fill*/}
        {/*    alt="Cultural Ceremonies"*/}
        {/*    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">*/}
        {/*    <h3 className="text-2xl font-serif mb-3">Defesa contra Cartão de Crédito Não Solicitado </h3>*/}
        {/*    <p className="text-white/80 mb-6 line-clamp-3">*/}
        {/*      Ajuizamos ações por envio de cartão não solicitado e cobranças indevidas associadas.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  </section>;
}