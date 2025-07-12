'use client';

import {useEffect, useState} from "react";
import {motion} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {WhatsappButtonData} from "@/types/app";

interface WhatsappButtonProps {
  data: WhatsappButtonData
}

export default function WhatsappButton({data}: WhatsappButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div className={'fixed bottom-2 right-6 flex flex-row gap-x-6 z-[999]'}>
          <Link href={data.url} passHref>
            <motion.span
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 100}}
              transition={{duration: 0.3}}
              className="relative p-4 rounded-full  text-white focus:outline-none z-50"
            >
              <Image src={`/images/logo-whatsapp.svg`} width={80} height={80} alt={'Logo whatsapp'}/>
            </motion.span>
          </Link>
        </motion.div>
      )}
    </>
  );
}