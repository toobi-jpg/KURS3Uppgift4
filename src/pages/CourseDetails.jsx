import { useParams, Link } from "react-router-dom";
import CoursesData from "../data/courses";

export default function CourseDetails() {
  const { courseId } = useParams();
  const courses = CoursesData();

  const course = courses.find(
    (c) => c.id === courseId || c.id.toString() === courseId
  );

  return (
    <>
      <Link
        className="btn btn-secondary position-absolute"
        style={{ top: "100px", left: "10%" }}
        to={"/courses"}
      >
        Back
      </Link>
      <div className="text-center d-flex flex-column justify-content-center align-items-center">
        <h2>
          {course.title}
          <span className="text-secondary"> - Course Details</span>
        </h2>
        <p className="w-50">{course.details}</p>
      </div>
    </>
  );
}
