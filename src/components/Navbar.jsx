import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Proper boolean check
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Hide back arrow on Home and Dashboard
  const hideOnRoutes = ["/", "/dashboard"];
  const showBackArrow = !hideOnRoutes.includes(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showBackArrow && (
          <span
            className="back-arrow"
            onClick={() => navigate(-1)}
          >
            ←
          </span>
        )}

        <h2 className="navbar-title">Encrypted File Vault</h2>
      </div>

      <div className="nav-links">
        <Link to="/instructions">Instructions</Link>
        <Link to="/contact">Contact</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="nav-btn">Dashboard</Link>
            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;