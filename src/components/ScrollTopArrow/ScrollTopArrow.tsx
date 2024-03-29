import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import classes from "./ScrollTopArrow.module.css";

// scroll top arrow styling
// import '../App.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className={classes.scrollTop}
      onClick={scrollTop}
      style={{
        height: 50,
        display: showScroll ? "flex" : "none",
        color: "#5c2c90",
      }}
    />
  );
};

export default ScrollTopArrow;
