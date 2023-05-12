import React from "react";
import "./FirstPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import {
  changeBgColor,
  setCurrPage,
} from "../../features/BackgroundColor/BackgroundColor";

function FirstPage(props) {
  const currRef = useRef(null);
  const dispatch = useDispatch();

  //listening user scroll and checking whether currentpage or not, if current page => change bg color stage to curr bg color

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const currentPage = Math.ceil(scrollPosition / pageHeight);
      if (currentPage === 1) {
        const col = currRef.current.style.backgroundColor;
        dispatch(changeBgColor(col));
        dispatch(setCurrPage(currentPage));
      }
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="first-page--container"
        ref={currRef}
        // style={{ backgroundColor: "yellow" }}
      >
        <div className="container"></div>
      </div>
    </>
  );
}

export default FirstPage;
