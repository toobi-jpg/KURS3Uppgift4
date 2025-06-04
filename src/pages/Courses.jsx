import CourseCard from "../components/CourseCard";
import CoursesData from "../data/courses";

export default function Courses() {
  const courses = CoursesData();

  return (
    <>
      <h4>Courses</h4>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row f-4">
          {courses.map((course) => (
            <div key={course.id} className="col-12 col-sm-6 col-md-4 p-3">
              <CourseCard
                title={course.title}
                description={course.description}
                to={course.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
