import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <Link href="/" className="brand-name">
          MacroSoft
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          {auth ? (
            <>
              <ul>
                <li>
                  <Link className="nav-link" to="/">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/add">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/update">
                    Update Product
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" onClick={logout} to="/signup">
                    Log Out
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <li>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
