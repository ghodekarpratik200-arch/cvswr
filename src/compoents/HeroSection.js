import React from 'react';
import '../them/HeroSection.css';
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />


const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log('Form submitted:', data);
  };

  const slides = [
      {
      title: 'Media Planning',
      text: 'The meticulous Media Planning & Execution lets you relish the golden eggs. We use it diligently so that it delivers success consistently!',
      formTitle: 'Start a Project',
      btnText: 'Let’s Talk',
      bgClass: 'slide-bg-3',
      requirements: [
        'New Project',
        'Partnership',
        'Investment',
        'Collaboration',
        'Other',
      ],
    },
     {
      title: 'Events &  Exhibitions',
      text: 'All those Events & Exhibitions that we organise have a magnetic pull. We make sure that your target group sits up, takes notice and follows nothing but your brand! ',
      formTitle: 'Contact Us',
      btnText: 'Send Message',
      bgClass: 'slide-bg-2',
      requirements: [
        'Consulting',
        'Marketing',
        'Brand Strategy',
        'Support',
        'Other',
      ],
    },
    {
      title: 'Print Media Advertising',
      text: 'Our creativity has the power to turn your brand into pure gold. Rest assured that your brand is in safe hands-the hands with a Midas touch! ',
      formTitle: 'Inquiry Form',
      btnText: 'Submit',
      bgClass: 'slide-bg-1',
      requirements: [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'SEO Services',
        'Other',
      ],
    },
   
  
  ];

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map(
          (
            { title, text, formTitle, btnText, bgClass, requirements },
            i
          ) => (
            <div
              key={i}
              className={`carousel-item ${bgClass} ${i === 0 ? 'active' : ''}`}
              data-bs-interval="5000"
            >
              <div className="overlay d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 text-white text-center text-md-start mb-4 mb-md-0">
                      <h1 className=" fw-bold">{title}</h1>
                      <p>{text}</p>
                    </div>
                    <div className="col-md-5">
                      <div className="form-section p-4 rounded shadow">
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
                          <select
                            name="requirement"
                            required
                            className="form-select mb-3"
                          >
                            <option value="">-- Select Requirement --</option>
                            {requirements.map((option, idx) => (
                              <option key={idx} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows="3"
                            className="form-control mb-3"
                          ></textarea>
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            {btnText}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
