import { useCallback } from "react";

/**
 * Hook: useScroll
 *
 * Retorna helpers para controlar o scroll da janela (ou de qualquer container, caso queira
 * estender no futuro). Todos os métodos usam, por padrão, scroll suave (smooth),
 * mas você pode sobrescrever passando { behavior: "auto" }.
 */

// Tipo utilitário para opções de comportamento do scroll
interface ScrollOptions {
  /**
   * Comportamento da animação de scroll. "smooth" ou "auto".
   * Default: "smooth".
   */
  behavior?: ScrollBehavior;
}

export function useScroll() {
  /**
   * Core: scroll genérico para qualquer posição (x, y)
   */
  const scrollTo = useCallback(
    (
      x: number,
      y: number,
      { behavior = "smooth" }: ScrollOptions = {}
    ) => {
      window.scrollTo({ left: x, top: y, behavior });
    },
    []
  );

  /** Scroll para o topo da página */
  const scrollToTop = useCallback(
    (options?: ScrollOptions) => {
      scrollTo(0, 0, options);
    },
    [scrollTo]
  );

  /** Scroll para o fundo da página */
  const scrollToBottom = useCallback(
    (options?: ScrollOptions) => {
      const y =
        document.documentElement.scrollHeight - window.innerHeight || 0;
      scrollTo(0, y, options);
    },
    [scrollTo]
  );

  /** Scroll somente no eixo X */
  const scrollToX = useCallback(
    (x: number, options?: ScrollOptions) => {
      scrollTo(x, window.scrollY, options);
    },
    [scrollTo]
  );

  /** Scroll somente no eixo Y */
  const scrollToY = useCallback(
    (y: number, options?: ScrollOptions) => {
      scrollTo(window.scrollX, y, options);
    },
    [scrollTo]
  );

  /**
   * Scroll para um elemento (via HTMLElement ou id string)
   */
  const scrollToElement = useCallback(
    (
      elementOrId: HTMLElement | string,
      { behavior = "smooth" }: ScrollOptions = {}
    ) => {
      const element =
        typeof elementOrId === "string"
          ? document.getElementById(elementOrId)
          : elementOrId;

      element?.scrollIntoView({ behavior });
    },
    []
  );

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom,
    scrollToX,
    scrollToY,
    scrollToElement,
  } as const;
}

/**
 * Exemplo de uso:
 *
 * const {
 *   scrollToTop,
 *   scrollToBottom,
 *   scrollToX,
 *   scrollToY,
 *   scrollToElement,
 * } = useScroll();
 *
 * scrollToTop();               // Topo suave
 * scrollToBottom({ behavior:"auto"}); // Fundo instantâneo
 * scrollToY(500);              // Y = 500px suave
 * scrollToElement("footer");  // scroll pro elemento <div id="footer"/>
 */
