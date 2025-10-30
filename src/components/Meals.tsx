import type { ReactNode } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosCheckmark, IoIosStarOutline } from "react-icons/io";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const meals: {
  type?: string;
  title: string;
  details: { detail: string; icon: ReactNode }[] | string[];
  image?: string;
}[] = [
  {
    type: "vegetarian",
    title: "Japanese Gyozas",
    details: [
      {
        detail: "650 , calories",
        icon: <MdOutlineLocalFireDepartment />,
      },
      { detail: "NutriScore , ® 74", icon: <GiKnifeFork /> },
      {
        detail: " 4.9 , rating (537)",
        icon: <IoIosStarOutline />,
      },
    ],
    image: "meal-1",
  },
  {
    type: "Vegan Paleo",
    title: "Avocado Salad",
    details: [
      {
        detail: "400 , calories",
        icon: <MdOutlineLocalFireDepartment />,
      },
      { detail: "NutriScore , ® 92", icon: <GiKnifeFork /> },
      {
        detail: "4.8 , rating (441)",
        icon: <IoIosStarOutline />,
      },
    ],

    image: "meal-2",
  },
  {
    title: "Works with any diet:",
    details: [
      "Vegetarian",
      "Vegan",
      "Pescatarian",
      "Gluten-free",
      "Lactose-free",
      "Keto",
      "Paleo",
      "Low FODMAP",
      "Kid-friendly",
    ],
  },
];
export default function Meals() {
  return (
    <section id="meals" className="section-meals">
      <div className="container">
        <div className="meals-primary">
          <h2 className="works-heading">Meals</h2>
          <p className="works-description">
            Omnifood AI chooses from 5,000+ recipes
          </p>
        </div>
        <div className="grid-cols-3">
          {meals.map((meal) =>
            meal.image ? (
              <div className="grid-item" key={meal.title}>
                <img
                  src={`/meals/${meal.image}.jpg`}
                  alt={meal.title}
                  className="meal-img"
                />
                <div className="meal-content">
                  {Array.from(
                    { length: meal.type?.split(" ").length ?? 1 },
                    (_, i) => (
                      <span
                        className={`meal-type ${i > 0 && "meal-type-2"}`}
                        key={i}
                      >
                        {meal.type?.split(" ")[i]}
                      </span>
                    )
                  )}

                  <h2 className="meal-title">{meal.title}</h2>
                  <ul className="meal-details">
                    {meal.details.map(
                      (info) =>
                        typeof info === "object" && (
                          <li className="meal-detail" key={info.detail}>
                            {info.icon} <b>{info.detail.split(",")[0]}</b>
                            {info.detail.split(",")[1]}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid-item-list" key={meal.title}>
                <h2 className="meal-title">{meal.title}</h2>
                <ul>
                  {meal.details.map(
                    (info) =>
                      typeof info === "string" && (
                        <li className="meal-detail" key={info}>
                          <IoIosCheckmark size={34} />
                          {info}
                        </li>
                      )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
