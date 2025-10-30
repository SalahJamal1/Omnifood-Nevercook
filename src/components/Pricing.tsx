// type Props = {};

import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { pricing } from "../utils/helper";
import type { ReactNode } from "react";
import { IoInfiniteOutline, IoLeafOutline } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
import { AiOutlinePause } from "react-icons/ai";
const features: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Never cook again!",
    description:
      "Our subscriptions cover 365 days per year, even including major holidays.",
    icon: <IoInfiniteOutline />,
  },
  {
    title: "Local and organic",
    description:
      "Our cooks only use local, fresh, and organic products to prepare your meals.",
    icon: <RiAppleLine />,
  },
  {
    title: "No waste",
    description:
      "All our partners only use reusable containers to package all your meals.",
    icon: <IoLeafOutline />,
  },
  {
    title: "Pause anytime",
    description:
      "Going on vacation? Just pause your subscription, and we refund unused days.",
    icon: <AiOutlinePause />,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pricing">
      <div className="container">
        <h2 className="works-heading">Pricing</h2>
        <p className="works-description">
          Eating well without breaking the bank
        </p>
        <div className="pricing-box">
          {pricing.map((price) => (
            <div className="pricing-cart" key={price.title}>
              <span className="price-cart-title">{price.title}</span>
              <p className="cart-price">
                $ <span className="price-cart-price">{price.price}</span>
              </p>
              <p className="price-cart-description">{price.description}</p>
              <ul className="pricing-details">
                {price.details.map((detail) => (
                  <li key={detail} className="pricing-detail">
                    {!detail.length ? (
                      <IoIosClose size={34} color="#e67e22" />
                    ) : (
                      <IoIosCheckmark size={34} color="#e67e22" />
                    )}
                    {detail}
                  </li>
                ))}
              </ul>
              <a href="#try-for-free" className="btn">
                Start eating well
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-description">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
        <ul className="features">
          {features.map((feature) => (
            <li key={feature.title} className="feature">
              <span className="feature-icon">{feature.icon}</span>
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
