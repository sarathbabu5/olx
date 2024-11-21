import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AuthContext";
import Loading from "../components/Loading";
import "./Login.css"; // External CSS for styling

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State for error messages

  const { loginUser, authState, loadingTrue, loadingFalse } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!form.email || !form.password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      setError(""); // Clear previous error messages
      loadingTrue();

      const res = await axios.post(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        form
      );

      if (loginUser) {
        loginUser({ email: form.email, token: res.data.token });
      }

      loadingFalse();
      navigate("/");
    } catch (error) {
      loadingFalse();
      setError("Login failed. Please check your email and password.");
    }
  };

  if (authState.isLoading) return <Loading />;

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          autoComplete="on"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" disabled={authState.isLoading}>
          {authState.isLoading ? "Logging in..." : "Login"}
        </button>
        <div>
          Go To
          <Link to="/">Home Page</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
