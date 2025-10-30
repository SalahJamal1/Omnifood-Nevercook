import { logos } from "../utils/helper";

export default function Logos() {
  return (
    <section className="section-logos">
      <div className="container">
        <h2 className="logos-primary">As featured in</h2>
        <div className="logos-box">
          {Array.from({ length: 2 }, (_, i) => (
            <div
              className="logos-hover"
              style={{
                left: i === 0 ? 0 : "unset",
                right: i !== 0 ? 0 : "unset",
                backgroundImage: `linear-gradient(to ${
                  i === 0 ? "right" : "left"
                }, white 0%,rgba(255, 255, 255, 0.8) 40%,rgba(255, 255, 255, 0) 100%)`,
              }}
              key={i}
            ></div>
          ))}
          <div className="logos">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                src={`/logos/${logo}.png`}
                alt={logo}
                className="logos__img"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
