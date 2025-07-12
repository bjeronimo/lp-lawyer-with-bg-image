'use client';

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Facebook, Instagram, Youtube, Mail, MapPin, Phone, Clock} from "lucide-react"
import {Brand} from "@/components/brand";
import {useScroll} from "@/hooks/use-scroll";

const navItems = [
  {name: "Home", href: "/", scrollTo: 'hero'},
  {name: "Serviços", href: "/", scrollTo: 'services'},
  {name: "Diferenciais", href: "/", scrollTo: 'differentials'},
  {name: "Sobre", href: "/", scrollTo: 'about'},
  {name: "Perguntas Frequentes", href: "/", scrollTo: 'faq'},
  {name: "Localização", href: "/localization", scrollTo: 'localization'},
]

export default function Footer() {
  const {scrollToElement} = useScroll();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with detailed info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-16">
          <div className={'flex flex-col items-start '}>
            {/*<h3 className="text-xl font-serif mb-4 sm:mb-6 text-blue-400">Burmese Vihar</h3>*/}
            <div className={'max-h-16 '}>
              <Brand className={'h-full w-full'}/>
            </div>
            <p className="text-stone-300 mb-6 sm:mb-8 leading-relaxed max-w-md text-sm sm:text-base">
              Advocacia contemporânea com foco na solução de conflitos
              em Direito Trabalhista, Tributário, Civil, Consumidor e Previdenciário.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-400 hover:text-blue-400 hover:bg-stone-800 rounded-full h-9 w-9 sm:h-10 sm:w-10"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5"/>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-400 hover:text-blue-400 hover:bg-stone-800 rounded-full h-9 w-9 sm:h-10 sm:w-10"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5"/>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-400 hover:text-blue-400 hover:bg-stone-800 rounded-full h-9 w-9 sm:h-10 sm:w-10"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5"/>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-400 hover:text-blue-400 hover:bg-stone-800 rounded-full h-9 w-9 sm:h-10 sm:w-10"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5"/>
              </Button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
              <div>
                <p className="font-medium text-blue-400 mb-1 text-sm sm:text-base">Nosso endereço</p>
                <p className="text-white/70 text-xs sm:text-sm">
                  R. Empresario Clovis Rolim, 2051 - Bairro dos Ipês, João Pessoa - PB, 58033-454
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
              <div>
                <p className="font-medium text-blue-400 mb-1 text-sm sm:text-base">Contato</p>
                <p className="text-stone-300 text-xs sm:text-sm">(83) 3031-5861</p>
                <p className="text-stone-300 text-xs sm:text-sm">(83) 9636-5333</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
              <div>
                <p className="font-medium text-blue-400 mb-1 text-sm sm:text-base">Atendimento</p>
                <p className="text-stone-300 text-xs sm:text-sm">Segunda à Sexta</p>
                <p className="text-stone-300 text-xs sm:text-sm">das 8:00 às 12:00 - 13:00 às 17:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4 sm:mb-6 text-blue-400">Navegue pelo site</h3>
            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              {navItems.map((item) => (
                <p
                  key={item.name}
                  className={`px-3 lg:px-4 py-2 text-sm text-left transition-colors ${
                    "text-white/90 hover:text-white"
                  }`}
                  onClick={() => item.scrollTo && scrollToElement(item.scrollTo)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and newsletter */}
        <div
          className="py-4 sm:py-6 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-stone-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Igor Santos Advocacia. Todos os Direitos Reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-stone-400">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
