import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { links } from "../utils/helper";

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const [show, setShow] = useState<boolean>(false);
  const toggleModel = (): void => {
    navRef?.current?.classList.toggle("nav_mobile");
  };
  const closeModel = (): void => {
    navRef?.current?.classList.remove("nav_mobile");
  };
  const onClick = (): void => {
    setShow(!show);
    toggleModel();
  };

  useEffect(() => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setShow(false);
        closeModel();
      }
    };
    document.querySelector("body")?.addEventListener("keydown", eventListener);
    return () => {
      document
        .querySelector("body")
        ?.removeEventListener("keydown", eventListener);
    };
  }, [show]);

  useEffect(() => {
    const hero = document.querySelector(".hero-section") as HTMLElement;
    if (!hero) return;
    const funObserver = ([e]: IntersectionObserverEntry[]): void => {
      const target = ref.current;
      if (!target) return;
      if (e.isIntersecting) target.classList.remove("sticky");
      else target.classList.add("sticky");
    };
    const heroObserver = new IntersectionObserver(funObserver, {
      threshold: 0.1,
      root: null,
    });
    heroObserver.observe(hero);
    return () => {
      heroObserver.unobserve(hero);
    };
  }, []);

  return (
    <header className="headers" ref={ref}>
      <Link to="/">
        <img src="/omnifood-logo.png" alt="logo" className="logo" />
      </Link>
      <nav className="nav" ref={navRef}>
        <ul className="nav_list">
          {links.map((link) => (
            <li key={link.to}>
              <a href={link.to} className="nav_links">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <span onClick={onClick}>
          {show ? (
            <IoClose size={24} color="#222" className="close" />
          ) : (
            <IoMdMenu size={24} color="#222" className="menu" />
          )}
        </span>
      </nav>
    </header>
  );
}
