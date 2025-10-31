import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { closeModel } from "../utils/helper";

export default function useHeader(
  ref: HTMLElement,
  navRef: HTMLElement
): {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
} {
  const [show, setShow] = useState<boolean>(false);

  // Header Keyboard Event
  useEffect(() => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setShow(false);
        closeModel(navRef);
      }
    };
    document.querySelector("body")?.addEventListener("keydown", eventListener);
    return () => {
      document
        .querySelector("body")
        ?.removeEventListener("keydown", eventListener);
    };
  }, [navRef]);

  // Sticky Event
  useEffect(() => {
    const hero = document.querySelector(".hero-section") as HTMLElement;
    if (!hero) return;

    const funObserver = ([e]: IntersectionObserverEntry[]): void => {
      if (!ref) return;
      if (e.isIntersecting) ref.classList.remove("sticky");
      else ref.classList.add("sticky");
    };
    const heroObserver = new IntersectionObserver(funObserver, {
      threshold: 0.1,
      root: null,
    });
    heroObserver.observe(hero);
    return () => {
      heroObserver.unobserve(hero);
    };
  }, [ref]);
  return { show, setShow };
}
