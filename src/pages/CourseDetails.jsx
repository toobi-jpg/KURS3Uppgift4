import { useParams, Link } from "react-router-dom";
import CoursesData from "../data/courses";

export default function CourseDetails() {
  const { courseId } = useParams();
  const courses = CoursesData();

  const course = courses.find(
    (c) => c.id === courseId || c.id.toString() === courseId
  );

  return (
    <div className="d-flex flex-column w-100" style={{ maxWidth: "800px" }}>
      <div className="text-center d-flex flex-column justify-content-center align-items-center">
        <h2>
          {course.title}
          <span className="text-secondary"> - Course Details</span>
        </h2>
        <p className="col-12 col-md-9">{course.details}</p>
      </div>
      <Link
        className="btn btn-secondary align-self-center mt-5"
        to={"/courses"}
      >
        Back
      </Link>
    </div>
  );
}
