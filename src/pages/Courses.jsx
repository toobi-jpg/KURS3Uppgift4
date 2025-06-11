import CourseCard from "../components/CourseCard";
import CoursesData from "../data/courses";
import { useState } from "react";
import FormDialog from "../components/RegisterForm";
import AlertDialogSlide from "../components/UnRegister";

export default function Courses() {
  const courses = CoursesData();
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [courseForRegistration, setCourseForRegistration] = useState(null);
  const [isUnRegisterOpen, setIsUnRegisterOpen] = useState(false);
  const [courseForUnRegistration, setCourseForUnRegistration] = useState(null);

  const handleOpenRegisterForm = (courseTitle, courseId) => {
    setCourseForRegistration({ title: courseTitle, id: courseId });
    setIsRegisterFormOpen(true);
  };

  const handleCloseRegisterForm = () => {
    setIsRegisterFormOpen(false);
    setCourseForRegistration(null);
  };

  const handleOpenUnRegister = (courseTitle, courseId) => {
    setCourseForUnRegistration({ title: courseTitle, id: courseId });
    setIsUnRegisterOpen(true);
  };

  const handleCloseUnRegister = () => {
    setIsUnRegisterOpen(false);
    setCourseForUnRegistration(null);
  };

  return (
    <>
      <div style={{ maxHeight: "80vh" }}>
        <h1 className="custom-text-gradient ms-3 mb-0">Courses</h1>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="row fs-4">
            {courses.map((course) => (
              <div key={course.id} className="col-12 col-sm-12 col-md-12 p-3">
                <CourseCard
                  title={course.title}
                  description={course.description}
                  courseId={course.id}
                  onRegisterClick={() =>
                    handleOpenRegisterForm(course.title, course.id)
                  }
                  unRegisterClick={() =>
                    handleOpenUnRegister(course.title, course.id)
                  }
                />
              </div>
            ))}
          </div>
          <FormDialog
            open={isRegisterFormOpen}
            onClose={handleCloseRegisterForm}
            courseTitle={courseForRegistration?.title}
            courseId={courseForRegistration?.id}
          />
          <AlertDialogSlide
            open={isUnRegisterOpen}
            onClose={handleCloseUnRegister}
            courseTitle={courseForUnRegistration?.title}
            courseId={courseForUnRegistration?.id}
          />
        </div>
      </div>
    </>
  );
}
