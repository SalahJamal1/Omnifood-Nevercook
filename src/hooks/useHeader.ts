import {
  useEffect,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { closeModel } from "../utils/helper";

export default function useHeader(
  ref: RefObject<HTMLElement | null>,
  navRef: RefObject<HTMLElement | null>
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
        closeModel(navRef.current!);
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
      if (!ref.current) return;
      if (e.isIntersecting) ref.current?.classList.remove("sticky");
      else ref.current?.classList.add("sticky");
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
