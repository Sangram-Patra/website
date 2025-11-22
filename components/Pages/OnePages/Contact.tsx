"use client";
import Image from "next/image";
import me from "@/public/images/avatar/me.jpeg";
import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
  User,
} from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-content-part wow fadeInUp delay-0-2s">
              <Image className="contactimg" src={me} alt="" />
              <p>Based in Bengaluru, India</p>
              <h2>Let’s build something in React</h2>
              <p>
                Hi, I’m <strong>Sangram Patra</strong> — Software Developer
                focused on modern React and Next.js apps.
              </p>
              {/* <!-- START CONTACT SINGLEDESIGN AREA --> */}
              <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                <div className="about-social">
                  <ul>
                    <li>
                      <Link
                        className="socaillink"
                        href="https://www.linkedin.com/in/sangram-patra/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkedinLogo />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="socaillink"
                        href="https://github.com/Sangram-Patra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubLogo />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="socaillink"
                        href="mailto:sangramkumarp530@gmail.com"
                      >
                        <EnvelopeSimple />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- / END CONTACT SINGLEDESIGN AREA --> */}
            </div>
          </div>
          {/* <!-- START CONTACT FORM DESIGN AREA --> */}
          <div className="col-lg-6">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contact-form"
                action="#"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value=""
                        placeholder="Steve Milner"
                        data-error="Please enter your Name"
                      />
                      <label htmlFor="name" className="for-icon">
                        <User />
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value=""
                        placeholder="hello@websitename.com"
                        data-error="Please enter your Email"
                      />
                      <label htmlFor="email" className="for-icon">
                        <EnvelopeSimple />
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="name">Phone</label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        value="9861852260"
                        placeholder="Your Phone"
                        data-error="Please enter your Name"
                      />
                      <label htmlFor="name" className="for-icon">
                        <Phone />
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Your message"
                        data-error="Please Write your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Me Message <i className="ri-mail-line"></i>
                      </button>
                      <div id="msgSubmit" className="hidden"></div>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <p className="input-success">
                      We have received your mail, We will get back to you soon!
                    </p>
                    <p className="input-error">
                      Sorry, Message could not send! Please try again.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- / END CONTACT FORM DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
