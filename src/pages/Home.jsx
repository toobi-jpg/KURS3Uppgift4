import { useCourses } from "../../contexts/CoursesContext";
import CoursesData from "../data/courses";
import CourseCard from "../components/CourseCard";
import BootstrapIcon from "../../public/bootstrapIcon.jsx";
import viteLogo from "../../public//vite.svg";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const courses = CoursesData();
  const { registeredCourses } = useCourses();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const hasRegisteredCourses =
    registeredCourses && registeredCourses.length > 0;

  return (
    <main
      style={{ maxHeight: "70vh", maxWidth: "800px" }}
      className="w-100 px-5"
    >
      <h1 className="custom-text-gradient fw-bold text-center mb-5">
        KWL - StudentPortal
      </h1>

      <div className="mb-0">
        <h4 className="text-center custom-text-gradient">Made with</h4>
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-4">
          <div
            className="position-relative customCardGradient p-3 custom-border rounded logo-hover"
            onMouseEnter={() => setHoveredIcon("Vue")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={viteLogo}
              style={{ width: "4rem", height: "4rem" }}
              alt="Vite Logo"
              className="logo-hover"
            />
            {hoveredIcon === "Vue" && (
              <p className="position-absolute mt-4 top-100 start-50 translate-middle fs-5">
                {hoveredIcon}
              </p>
            )}
          </div>
          <div
            className="position-relative customCardGradient p-3 custom-border rounded logo-hover"
            onMouseEnter={() => setHoveredIcon("React")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={reactLogo}
              style={{ width: "4rem", height: "4rem" }}
              alt="React Logo"
              className="logo-hover"
            />
            {hoveredIcon === "React" && (
              <p className="position-absolute mt-4 top-100 start-50 translate-middle fs-5">
                {hoveredIcon}
              </p>
            )}
          </div>
          <div
            className="position-relative customCardGradient p-2 custom-border rounded logo-hover"
            onMouseEnter={() => setHoveredIcon("Bootstrap")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <BootstrapIcon width="5rem" height="5rem" className="logo-hover" />
            {hoveredIcon === "Bootstrap" && (
              <p className="position-absolute mt-4 top-100 start-50 translate-middle fs-5">
                {hoveredIcon}
              </p>
            )}
          </div>
        </div>
      </div>

      <div style={{ height: "100px" }}></div>

      {hasRegisteredCourses ? (
        <>
          <h4 className="mb-0">Registered courses:</h4>
          <div className="row fs-4">
            {courses
              .filter((course) => registeredCourses.includes(course.id))
              .map((course) => (
                <div key={course.id} className="col-12 col-sm-6 col-md-6 p-3">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    courseId={course.id}
                  />
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>You have no registered courses!</h4>
          <p>
            Head over to{" "}
            <Link
              to="/courses"
              className="fw-bold text-white text-decoration-underline "
            >
              Courses
            </Link>{" "}
            to register
          </p>
        </div>
      )}
    </main>
  );
}
