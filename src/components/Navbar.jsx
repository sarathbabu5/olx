import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AuthContext";

const Navbar = () => {
  const { authState, logoutUser } = useContext(AppContext);
  console.log(authState.isAuth);
  const navigate = useNavigate();

  return (
    <nav>
      <div className="brand" onClick={() => navigate("/")}>
        React-OLX
      </div>
      <div className="menu">
        {authState.isAuth ? (
          <>
            <span className="welcome">
              Welcome, {authState.userDetails.email}!
            </span>
            <button className="logout" onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
