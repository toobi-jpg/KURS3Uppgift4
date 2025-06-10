import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-dark customNavStyle justify-content-around w-100 custom-shadow1 mt-4 rounded-4"
      style={{
        position: "absolute",
        maxWidth: "800px",
      }}
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
