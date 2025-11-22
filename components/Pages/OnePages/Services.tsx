"use client";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Services() {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2>Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-2s">
              <ArrowUpRight className="icopos" />
              <h5>01</h5>
              <h4>React & Next.js Development</h4>
              <p>
                Build fast, accessible web apps with React, Next.js and
                TypeScript. Strong focus on component architecture, state
                management, performance and SEO.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-4s">
              <ArrowUpRight className="icopos" />
              <h5>02</h5>
              <h4>UI Engineering</h4>
              <p>
                Pixel-perfect, responsive UI with modern CSS, Tailwind/Sass,
                design systems and accessibility best practices.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-4 col-md-5">
            <div className="service-item wow fadeInUp delay-0-6s">
              <ArrowUpRight className="icopos" />
              <h5>03</h5>
              <h4>API Integration</h4>
              <p>
                Clean data fetching with REST/GraphQL, React Query, caching,
                error handling and robust typing.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
          {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
          <div className="col-lg-8 col-md-7">
            <div className="service-item wow fadeInUp delay-0-8s">
              <ArrowUpRight className="icopos" />
              <h5>04</h5>
              <h4>Performance & DX</h4>
              <p>
                Lighthouse-driven optimization, code-splitting, caching, testing
                and CI to keep apps fast and maintainable.
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
}
