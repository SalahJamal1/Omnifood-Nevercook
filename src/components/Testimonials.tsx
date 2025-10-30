import { testimonials } from "../utils/helper";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="container">
        <h2 className="works-heading">Testimonials</h2>
        <p className="works-description">Once you try it, you can't go back</p>
        <div className="grid-col-2">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <img
                src={`/customers/${testimonial.name}.jpg`}
                alt={testimonial.name}
                className="testimonial-customer"
              />
              <p className="testimonial-description">
                {testimonial.description}
              </p>
              <span className="testimonial-name">— {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
      <figure className="testimonials-imgs">
        {Array.from({ length: 12 }, (_, i) => (
          <blockquote key={i} className="testimonials-img">
            <img
              src={`/gallery/gallery-${i + 1}.jpg`}
              alt={`gallery-${i + 1}`}
              className="testimonial-img"
            />
          </blockquote>
        ))}
      </figure>
    </section>
  );
}
