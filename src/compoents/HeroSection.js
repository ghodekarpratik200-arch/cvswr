import React from 'react';
import '../them/HeroSection.css';

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log('Form submitted:', data);
  };

  const slide = {
    formTitle: 'Start a Project',
    content_btn: 'Get in Touch',
    btnText: 'Let’s Talk',

  };

    const { content_btn, formTitle, btnText } = slide;

  return (
    <div className={`single-hero-section`}>
      <div className="overlay d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
              <p className='contain-p'>Creative work, creative mind</p>
              <h1 className="fw-bold">
                We Are Digital<br />
                Creative Agency
              </h1>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabi sed metus id et viverra augue.
              </p>
              <button className='hero-btn'>{content_btn}</button>
            </div>
            <div className="col-md-6">
              <div className="form-stack-wrapper position-relative d-flex justify-content-center align-items-center">
                <div className="stack-card card-4"></div>
                <div className="stack-card card-3"></div>
                <div className="stack-card card-2"></div>
                <div className="stack-card card-1 form-section p-4 rounded shadow bg-white position-relative">
                  <h4 className="mb-3">{formTitle}</h4>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-control mb-3"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-control mb-3"
                    />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your Mobile Number"
                      required
                      pattern="[0-9]{10}"
                      className="form-control mb-3"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows="4"
                      className="form-control mb-3"
                    ></textarea>
                    <button type="submit" className="btn btn-primary w-100">
                      {btnText}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
