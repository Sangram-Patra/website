import Link from "next/link";

export default function RecentWork() {
  return (
    <section className="projects-area" id="projects">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="section-title section-white-title wow fadeInUp delay-0-2s text-center">
            <h2>Projects</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-xl-4">
            <div className="project-link-card">
              <h4>Project One (Demo)</h4>
              <p>React/Next.js app – placeholder link.</p>
              <Link
                className="theme-btn"
                href="https://github.com/Sangram-Patra"
                target="_blank"
              >
                View Repo
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="project-link-card">
              <h4>Project Two (Demo)</h4>
              <p>Frontend component library – placeholder link.</p>
              <Link
                className="theme-btn"
                href="https://www.linkedin.com/in/sangram-patra/"
                target="_blank"
              >
                Case Study
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="project-link-card">
              <h4>Project Three (Demo)</h4>
              <p>Dashboard UI – placeholder link.</p>
              <Link
                className="theme-btn"
                href="https://github.com/Sangram-Patra"
                target="_blank"
              >
                View Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
