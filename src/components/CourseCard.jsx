import { Link } from "react-router-dom";

export default function CourseCard({ title, description, to }) {
  let titleColor;

  if (title.includes("React")) {
    titleColor = "#5e91ff";
  } else if (title.includes("JavaScript") || title.includes("Node")) {
    titleColor = "#d0be55";
  } else if (title.includes("Data")) {
    titleColor = "#8855d0";
  } else {
    titleColor = "white";
  }

  return (
    <div className="card h-100 bg-dark text-white shadow border-secondary">
      <div className="card-body">
        <h5
          className="card-title fw-bold"
          style={{ marginTop: "0px", color: titleColor }}
        >
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <Link className="btn btn-primary" to={`/courses/${to}`}>
          Läs mer
        </Link>
      </div>
    </div>
  );
}
