import { createContext, useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IsVisibleProvider = createContext(null);
export default function IsVisible({ children }: Props) {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    if (!sections) return;
    const funObserver = (
      [e]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ): void => {
      if (!e.isIntersecting) return;
      else e.target.classList.remove("section--hidden");
      observer.unobserve(e.target);
    };
    const sectionObserver = new IntersectionObserver(funObserver, {
      threshold: 0.1,
      root: null,
    });
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        return;
      }
      section.classList.add("section--hidden");
      sectionObserver.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (!section) return;
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  return (
    <IsVisibleProvider.Provider value={null}>
      {children}
    </IsVisibleProvider.Provider>
  );
}
