import { Link } from "react-router-dom";
import ReactIcon from "../../public/reactIcon";
import JavascriptIcon from "../../public/javascriptIcon";
import NodeJsIcon from "../../public/nodejsIcon";
import MongoDBIcon from "../../public/mongodbIcon";

export default function CourseCard({
  title,
  description,
  to,
  onRegisterClick,
}) {
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
    <div className="card h-100 bg-dark text-white shadow custom-border rounded-4 overflow-hidden">
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{ marginTop: "0px" }}>
          {keyword}
          <span style={{ color: textColor }}> {secondWord}</span>
          <div>
            {CourseIcon && (
              <CourseIcon
                className="position-absolute end-0 bottom-0 me-4 mb-4"
                width="7rem"
                height="7rem"
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
          to={`/courses/${to}`}
        >
          Read more
        </Link>
        <Link
          className="btn btn-primary fs-6 py-2 px-3 fw-bold ms-2"
          onClick={onRegisterClick}
        >
          Resgister
        </Link>
      </div>
    </div>
  );
}
