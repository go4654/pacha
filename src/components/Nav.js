import React from "react";
import { Link } from "react-router-dom";

const handleScroll = () => {
  const header = document.querySelector("header");
  const sct = window.pageYOffset;
  console.log(sct);
  if (sct >= 300) {
    header.classList.add("header_active");
  } else {
    header.classList.remove("header_active");
  }
};

window.addEventListener("scroll", handleScroll);

const Nav = () => {
  return (
    <header>
      <Link className="logo" to="/">
        Pacha
      </Link>
      <nav>
        <Link className="menu" to="/">
          Home
        </Link>
        <Link className="menu" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
