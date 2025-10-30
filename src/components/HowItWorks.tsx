import { steps } from "../utils/helper";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-works">
      <div className="container">
        <h2 className="works-heading">How it works</h2>
        <p className="works-description">
          Your daily dose of health in 3 simple steps
        </p>
        <div className="works-box">
          {steps.map((step) => (
            <div className="works-step" key={step.num}>
              <div className="works-step-text">
                <span className="works-step-num">{step.num}</span>
                <h3 className="works-step-heading">{step.title}</h3>
                <p className="works-step-description">{step.description}</p>
              </div>
              <img
                src={`/app/${step.img}.png`}
                alt={step.title}
                className="works-step__img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
