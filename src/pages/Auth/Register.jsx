import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { register } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif"

const Register = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [loading , setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((userData) => ({
      ...userData,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await register(userData.fullname, userData.email, userData.password);
    } catch (err) {
      alert(err);
    }
  };

  return (
    loading ? <div className="login-spinner">
    <img src={spinner} alt="" />
  </div> :
    <div className="login">
      <img src={Logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            name="fullname"
            value={userData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Strong Password"
          />
          <button type="submit">Sign Up</button>
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
            Already have an account?{" "}
            <Link to="/login" style={{ color: "white" }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
