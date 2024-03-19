import { Link } from "react-router-dom";
import "../assets/css/App.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show-books" className="nav-link">
        Show Books
      </Link>
      <Link to="/add-book" className="nav-link">
        Add Book
      </Link>
    </nav>
  );
}
