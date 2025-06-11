import { useCourses } from "../../contexts/CoursesContext";
import CoursesData from "../data/courses";
import CourseCard from "../components/CourseCard";
import BootstrapIcon from "../../public/bootstrapIcon.jsx";
import viteLogo from "../../public//vite.svg";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const courses = CoursesData();
  const { registeredCourses } = useCourses();
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
        <div className="d-flex flex-row gap-5 justify-content-center align-items-center">
          <div className="icon-fade">
            <img
              src={viteLogo}
              style={{ width: "6rem", height: "6rem" }}
              alt="Vite Logo"
            />
          </div>
          <div className="icon-fade">
            <img
              src={reactLogo}
              style={{ width: "6rem", height: "6rem" }}
              alt="React Logo"
            />
          </div>
          <div className="icon-fade">
            <BootstrapIcon width="7rem" height="7rem" />
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
