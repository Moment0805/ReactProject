import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const LoginSignUp = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login </h1>
        <div className="input-box">
          <input type="Username" placeholder="Username" />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
          <RiLockPasswordFill className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p> Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;
