import ReactIcon from "../../public/reactIcon";
import JavascriptIcon from "../../public/javascriptIcon";
import NodeJsIcon from "../../public/nodejsIcon";
import MongoDBIcon from "../../public/mongodbIcon";
import { useCourses } from "../../contexts/CoursesContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CourseCard({
  title,
  description,
  courseId,
  onRegisterClick,
  unRegisterClick,
}) {
  const { registeredCourses } = useCourses();
  const isRegistered = registeredCourses.includes(courseId);
  let keyword = title.split(" ").slice(0, -1).toString();
  let secondWord = title.split(" ").pop();
  let CourseIcon = null;
  let textColor;

  if (title.includes("React")) {
    CourseIcon = ReactIcon;
  } else if (title.includes("JavaScript")) {
    CourseIcon = JavascriptIcon;
  } else if (title.includes("Node")) {
    CourseIcon = NodeJsIcon;
  } else if (title.includes("Mongo")) {
    CourseIcon = MongoDBIcon;
  }

  return (
    <div className="card h-100 customCardGradient text-white shadow custom-border rounded-4 overflow-hidden">
      <div className="card-body">
        <h5 className="card-title fw-bold mt-auto">
          {keyword}
          <span style={{ color: textColor }}> {secondWord}</span>
          <div>
            {CourseIcon && (
              <CourseIcon
                className="position-absolute end-0 bottom-0 me-4 mb-2"
                width="10rem"
                height="10rem"
                style={{ opacity: "25%", filter: "grayscale(25%)" }}
              />
            )}
          </div>
        </h5>
        <p
          className="card-text fs-5"
          style={{ opacity: "60%", marginBottom: "2.5rem" }}
        >
          {description}
        </p>
        <Link
          className="btn btn-secondary fs-6 py-2 px-3 fw-bold"
          to={`/courses/${courseId}`}
        >
          Read more
        </Link>
        {isRegistered ? (
          <Button
            className="fs-6 py-2 px-3 fw-bold ms-2"
            variant="outlined"
            onClick={unRegisterClick}
            color="error"
          >
            Unregister
          </Button>
        ) : (
          <Button
            className="fs-6 py-2 px-3 fw-bold ms-2"
            variant="contained"
            onClick={onRegisterClick}
          >
            Resgister
          </Button>
        )}
      </div>
    </div>
  );
}
