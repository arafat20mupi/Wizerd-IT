import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container flex">
        <div className="row">
          {/* <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">+1 840 841 25 69</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>Support@uithemez.com</p>
              </div>

              <div className="social-icon-circle mt-50">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div> */}
          <div>
            <div className="social-media d-flex justify-content-end">
              <ul className="rest d-flex align-items-center fz-14">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f mr-10"></i> Facebook
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-50">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble mr-10"></i> Dribbble
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-50">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in mr-10"></i> LinkedIn
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-50">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram mr-10"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="row pt-80">

              <div className="column">
                <h6 className="sub-title mb-30">Useful Links</h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="#0">About</a>
                      </li>
                      <li className="mb-15">
                        <a href="#0">Services</a>
                      </li>
                      <li className="mb-15">
                        <a href="#0">Blog</a>
                      </li>
                      <li>
                        <a href="#0">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="#0">FAQS</a>
                      </li>
                      <li className="mb-15">
                        <a href="#0">Term & Conditions</a>
                      </li>
                      <li className="mb-15">
                        <a href="#0">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#0">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subscribe-minimal mt-50">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="ti-arrow-top-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1 valign">
          <div className="full-width">
            <div className="sec-head mb-50">
              <h6 className="sub-title main-color mb-15">Let&#39;s Chat</h6>
              <h3 className="text-u ls1">
                Send a <span className="fw-200">message</span>
              </h3>
            </div>
            <form
              id="contact-form"
              className="form2"
              method="post"
              action="contact.php"
            >
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="mt-30">
                    <button
                      type="submit"
                      className="butn butn-full butn-bord radius-30"
                    >
                      <span className="text">Let&#39;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
