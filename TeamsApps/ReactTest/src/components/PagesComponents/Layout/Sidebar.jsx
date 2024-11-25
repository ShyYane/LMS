import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="side-bar">
      <div id="close-btn">
        <i class="fas fa-times"></i>
      </div>

      {/* <div class="profile">
        <img src="/images/pic-1.jpg" class="image" alt="" className="mx-auto" />
        <h3 class="name">Hoag</h3>
        <p class="role">student</p>
        <a href="profile.html" class="btn">
          view profile
        </a>
      </div> */}

      <nav class="navbar" >
        <Link to="/">
          <i class="fas fa-home"></i>
          <span>home</span>
        </Link>
        <Link to="/grade">
          <i class="fas fa-award"></i>
          <span>grade</span>
        </Link>
        <Link to="/course">
          <i class="fas fa-graduation-cap"></i>
          <span>courses</span>
        </Link>
        <Link to="/teachers">
          <i class="fas fa-chalkboard-user"></i>
          <span>teachers</span>
        </Link>
        {/* <a href="contact.html">
          <i class="fas fa-headset"></i>
          <span>contact us</span>
        </a> */}
      </nav>
    </div>
  );
}

export default Sidebar;
