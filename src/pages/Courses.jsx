import CourseCard from "../components/CourseCard";
import CoursesData from "../data/courses";
import { useState } from "react";
import FormDialog from "../components/RegisterForm";

export default function Courses() {
  const courses = CoursesData();
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [courseForRegistration, setCourseForRegistration] = useState(null);

  const handleOpenRegisterForm = (courseTitle) => {
    setCourseForRegistration(courseTitle);
    setIsRegisterFormOpen(true);
  };

  const handleCloseRegisterForm = () => {
    setIsRegisterFormOpen(false);
    setCourseForRegistration(null);
  };

  return (
    <>
      <h2>Courses</h2>
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row f-4">
          {courses.map((course) => (
            <div key={course.id} className="col-12 col-sm-6 col-md-4 p-3">
              <CourseCard
                title={course.title}
                description={course.description}
                to={course.id}
                onRegisterClick={() => handleOpenRegisterForm(course.title)}
              />
            </div>
          ))}
        </div>
        <FormDialog
          open={isRegisterFormOpen}
          onClose={handleCloseRegisterForm}
          courseTitle={courseForRegistration}
        />
      </div>
    </>
  );
}
