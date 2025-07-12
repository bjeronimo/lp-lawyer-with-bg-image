"use client"

import {useState, useEffect} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Menu} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {Brand} from "@/components/brand";
import {useScroll} from "@/hooks/use-scroll";
import {cn} from "@/lib/utils";

const navItems = [
  {name: "Home", href: "/", scrollTo: 'hero'},
  {name: "Serviços", href: "/", scrollTo: 'services'},
  {name: "Diferenciais", href: "/", scrollTo: 'differentials'},
  {name: "Sobre", href: "/", scrollTo: 'about'},
  {name: "Perguntas Frequentes", href: "/", scrollTo: 'faq'},
  {name: "Localização", href: "/localization", scrollTo: 'localization'},
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const {scrollToElement} = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    // For the home page, only match exact "/"
    if (path === "/") {
      return pathname === "/" || pathname === ""
    }

    // For other pages, check if the pathname starts with the path
    // But make sure we're matching complete segments to avoid partial matches
    // e.g., /about should not match /about-us
    const pathSegments = path.split("/").filter(Boolean)
    const pathnameSegments = pathname?.split("/").filter(Boolean)

    if (!pathnameSegments || pathSegments.length === 0) return false

    for (let i = 0; i < pathSegments.length; i++) {
      if (i >= pathnameSegments.length || pathSegments[i] !== pathnameSegments[i]) {
        return false
      }
    }

    return true
  }

  return (
    <header
      className={
        cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? "bg-slate-900 shadow-lg py-3" : "bg-transparent py-6"
        )
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Brand className={'max-w-64 h-20'}/>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={'link'}
                className={`px-3 lg:px-4 py-2 text-sm transition-colors duration-300 ${
                  isScrolled
                    ? "text-white/80 hover:text-white/60"
                    : "text-white/90 hover:text-white"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => item.scrollTo && scrollToElement(item.scrollTo)}
              >
                {item.name}
              </Button>
            ))}

            <Button
              asChild
              className={`ml-2 lg:ml-3 rounded-none px-4 lg:px-6 ${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              }`}
            >
              <Link
                href={'https://api.whatsapp.com/send?phone=5583996365333&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20atendimento'}>
                Fale Conosco
              </Link>
            </Button>
          </nav>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${isScrolled ? "text-white" : "text-white/70"} focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label="Menu"
              >
                <Menu className="h-6 w-6"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[300px] bg-slate-900 p-0 border-l border-l-slate-700">
              <SheetHeader>
                <SheetTitle className={'align-left text-start text-left'}>
                  <Brand className={'w-auto h-full max-h-16'}/>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col p-6">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant={'link'}
                      className={`px-3 lg:px-4 py-2 text-sm transition-colors duration-300 text-white/80 hover:text-white/70`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        item.scrollTo && scrollToElement(item.scrollTo)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </nav>

                <div className="mt-auto p-6">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-none py-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      href="https://api.whatsapp.com/send?phone=5583996365333&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20atendimento">Fale
                      Conosco</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
