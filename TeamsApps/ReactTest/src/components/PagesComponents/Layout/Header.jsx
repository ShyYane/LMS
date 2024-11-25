import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const toggleBtn = document.getElementById("toggle-btn");
    const body = document.body;
    let darkMode = localStorage.getItem("dark-mode");

    const enableDarkMode = () => {
      toggleBtn.classList.replace("fa-sun", "fa-moon");
      body.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
      toggleBtn.classList.replace("fa-moon", "fa-sun");
      body.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
      enableDarkMode();
    }

    toggleBtn.onclick = () => {
      darkMode = localStorage.getItem("dark-mode");
      if (darkMode === "disabled") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    };

    // const profile = document.querySelector(".header .flex .profile");
    const search = document.querySelector(".header .flex .search-form");
    const sideBar = document.querySelector(".side-bar");

    // document.querySelector("#user-btn").onclick = () => {
    //   profile.classList.toggle("active");
    //   search.classList.remove("active");
    // };

    // document.querySelector("#search-btn").onclick = () => {
    //   search.classList.toggle("active");
    //   profile.classList.remove("active");
    // };

    document.querySelector("#menu-btn").onclick = () => {
      sideBar.classList.toggle("active");
      body.classList.toggle("active");
    };

    document.querySelector("#close-btn").onclick = () => {
      sideBar.classList.remove("active");
      body.classList.remove("active");
    };

      // window.onscroll = () => {
      //   profile.classList.remove("active");
      //   search.classList.remove("active");

      //   if (window.innerWidth < 1200) {
      //     sideBar.classList.remove("active");
      //     body.classList.remove("active");
      //   }
      // };
  }, []);
  return (
    <header class="header">
      <section class="flex">
        <a href="home.html" class="logo">
          LMS
        </a>

        <form action="search.html" method="post" class="search-form">
          <input
            type="text"
            name="search_box"
            required
            placeholder="search courses..."
            maxlength="100"
          />
          <button type="submit" class="fas fa-search"></button>
        </form>

        <div class="icons">
          <div id="menu-btn" class="fas fa-bars"></div>
          <div id="search-btn" class="fas fa-search"></div>
          {/* <div id="user-btn" class="fas fa-user"></div> */}
          <div id="toggle-btn" class="fas fa-sun"></div>
        </div>

        {/* <div class="profile">
          <img src="images/pic-1.jpg" class="image" alt="" />
          <h3 class="name">shaikh anas</h3>
          <p class="role">studen</p>
          <a href="profile.html" class="btn">
            view profile
          </a>
          <div class="flex-btn">
            <a href="login.html" class="option-btn">
              login
            </a>
            <a href="register.html" class="option-btn">
              register
            </a>
          </div>
        </div> */}
      </section>
    </header>
  );
}

export default Header;
