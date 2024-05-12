import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { login } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif"

const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((userData) => ({
      ...userData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(userData.email, userData.password);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    loading ? <div className="login-spinner">
      <img src={spinner} alt="" />
    </div> :
    <div className="login">
      <img src={Logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Strong Password"
            required
          />
          <button type="submit">Sign In</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "white" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
