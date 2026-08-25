import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Entrada suave ao fazer scroll.
 * Respeita prefers-reduced-motion (o CSS global neutraliza a duração).
 * Conteúdo nasce visível (SSR e no-JS nunca ficam com opacity-0 permanente);
 * só fica oculto depois de confirmarmos, antes do primeiro paint, que o JS
 * está activo para o poder revelar.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }
    setMounted(true);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisivel(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={visivel && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(visivel ? "animate-rise" : mounted ? "opacity-0" : "", className)}
    >
      {children}
    </Tag>
  );
}
