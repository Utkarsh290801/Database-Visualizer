import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../AppContext";
const Header = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { loggedIn, setloggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    //destroy session value
    sessionStorage.removeItem("user");
    //  setloggedIn to false
    setloggedIn(false);
    //  navigate to login page
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.kindpng.com/picc/m/752-7524489_data-analytics-logo-png-transparent-png.png"
            width="30px"
          />{" "}
          DataBase Visualization
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav m-auto"
            id="id"
            style={{ paddingLeft: "50%" }}
          >
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {!loggedIn ? (
              <>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/loginin">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/addshow">
                    AddShow
                  </NavLink>
                </li>
                <li className="nav-item active" style={{ paddingLeft: "6%" }}>
                  <NavLink className="nav-link" to="/manageshow">
                    Manage
                  </NavLink>
                </li>
                <button onClick={logout} className="btn btn-danger">
                  Logout
                </button>
              </>
            )}
            {/* <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/loginin">
                Login
              </NavLink>
            </li> */}
          </ul>
          {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
