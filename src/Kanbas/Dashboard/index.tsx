export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" alt="Description of course 1"  />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%"  alt="Description of course 2" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" alt="Description of course 3"  />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" alt="Description of course 4" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" alt="Description of course 5" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a
                className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" alt="Description of course 6" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}