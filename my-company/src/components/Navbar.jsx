import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </li>
        <li>
          <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
