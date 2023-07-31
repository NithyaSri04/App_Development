import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
            Job<span>Hunt</span>
          </h1>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/post-job">Post Job</Link>
            </li>
            <li>
              <Link to="/save-job">Saved Job</Link>
            </li>
            <li>
              <Link to="/apply-jobs">Apply Jobs</Link>
            </li>
            <li>
              <Link to="/discussion">Review</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="/feedback">FeedBack</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
