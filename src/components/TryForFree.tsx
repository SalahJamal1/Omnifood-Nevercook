import { options } from "../utils/helper";

export default function TryForFree() {
  return (
    <section className="section-try-for-free" id="try-for-free">
      <div className="container">
        <div className="try-for-free">
          <div className="try-for-free-text-box">
            <h2 className="try-for-free-primary">
              Get your first meal for free!
            </h2>
            <p className="try-for-free-description">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="grid-col-2">
              <div className="form-item">
                <label className="label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="input"
                  placeholder="John Smith"
                />
              </div>
              <div className="form-item">
                <label className="label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  placeholder="me@example.com"
                />
              </div>
              <div className="form-item">
                <label className="label" htmlFor="media">
                  Where did you hear from us?
                </label>
                <select name="media" className="select" id="media">
                  {options.map((option) => (
                    <option value={option.value} key={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btns">Sign up now</button>
            </form>
          </div>
          <div className="try-for-free-text-img"></div>
        </div>
      </div>
    </section>
  );
}
