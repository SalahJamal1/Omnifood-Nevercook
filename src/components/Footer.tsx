// type Props = {};

import type { ReactNode } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const icons: ReactNode[] = [<FaFacebook />, <BsTwitterX />, <FaInstagram />];
const footerData: { title: string; links: { text: string; href: string }[] }[] =
  [
    {
      title: "Account",
      links: [
        { text: "Create account", href: "#" },
        { text: "Sign in", href: "#" },
        { text: "iOS app", href: "#" },
        { text: "Android app", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Omnifood", href: "#" },
        { text: "For Business", href: "#" },
        { text: "Cooking partners", href: "#" },
        { text: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Recipe directory", href: "#" },
        { text: "Help center", href: "#" },
        { text: "Privacy & terms", href: "#" },
      ],
    },
  ];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-cols-5">
          <div className="footer-item">
            <Link to="/">
              <img src="/omnifood-logo.png" alt="logo" className="logo" />
            </Link>
            <div className="footer-icons">
              {icons.map((icon, i) => (
                <span className="icon" key={i}>
                  {icon}
                </span>
              ))}
            </div>
            <p className="copyright">
              Copyright © {new Date().getFullYear()} by Omnifood, Inc. All
              rights reserved.
            </p>
          </div>
          <div className="footer-item">
            <h2 className="footer-item-title">Contact us</h2>
            <address className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </address>
            <Link to="mailto:hello@omnifood.com" className="footer-item-link">
              hello@omnifood.com
            </Link>
            <Link to="tel:415-201-6370" className="footer-item-link">
              415-201-6370
            </Link>
          </div>

          {footerData.map((data) => (
            <div className="footer-item" key={data.title}>
              <h2 className="footer-item-title">{data.title}</h2>
              <ul className="footer-item-links">
                {data.links.map((link) => (
                  <li key={link.text}>
                    <Link to={link.href} className="footer-item-link">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
