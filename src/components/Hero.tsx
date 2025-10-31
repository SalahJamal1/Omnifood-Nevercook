import { imgs } from "../utils/helper";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="grid-col-2">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>

            <div className="btn-box">
              <a href="#try-for-free" className="btn">
                Start eating well
              </a>
              <a href="#how-it-works" className="btn btn--outline">
                Learn more &darr;
              </a>
            </div>
            <div className="delivered-meals">
              <figure className="delivered-meals__meal">
                {imgs.map((img) => (
                  <img
                    src={`/customers/${img}.jpg`}
                    alt={`${img}`}
                    className="delivered-meals__img"
                    key={img}
                  />
                ))}
              </figure>
              <span className="delivered-meals-text">
                <b>250,000+</b> meals delivered last year!
              </span>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="/gallery/gallery-12.jpg"
              alt="hero"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
