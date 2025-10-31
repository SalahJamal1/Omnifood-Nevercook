import { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { closeModel, links, openModel } from "../utils/helper";
import useHeader from "../hooks/useHeader";

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [overlay, setOverlay] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setOverlay(document.querySelector(".overlay") as HTMLElement);
  }, []);

  const { show, setShow } = useHeader(ref, navRef, overlay);
  const onClick = (): void => {
    if (!show) {
      openModel(navRef.current!, overlay!);
      setShow(true);
    } else {
      closeModel(navRef.current!, overlay!);
      setShow(false);
    }
  };

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
          <span onClick={onClick}>
            {show && <IoClose size={24} className="close" />}
          </span>
        </ul>
        <span onClick={onClick}>
          {!show && <IoMdMenu size={24} color="#222" className="menu" />}
        </span>
      </nav>
    </header>
  );
}
