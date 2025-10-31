import { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { links, toggleModel } from "../utils/helper";
import useHeader from "../hooks/useHeader";

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { show, setShow } = useHeader(ref, navRef);
  const onClick = (): void => {
    setShow(!show);
    toggleModel(navRef.current!);
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
