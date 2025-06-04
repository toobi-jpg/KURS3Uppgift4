import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-dark bg-dark justify-content-around w-100 border border-top-0 border-secondary"
      style={{ position: "absolute", maxWidth: "1300px" }}
    >
      <Link className="nav-link" to="home">
        Home
      </Link>
      <Link className="nav-link" to="courses">
        Courses
      </Link>
      <Link className="nav-link" to="news">
        News
      </Link>
    </nav>
  );
}
