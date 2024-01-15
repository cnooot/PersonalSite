import React from "react";
import angular from "./assets/angular.svg"
import css from "./assets/css3-alt.svg"
import html from "./assets/html5.svg"
import js from "./assets/js.svg"
import python from "./assets/python.svg"
import reactstack from "./assets/react.svg"



function Menu() {
  const handleScroll = (event) => {
    const stackchild = event.target;
    const scrollAmount = event.deltaY;
    stackchild.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'

    });
  };
  return (
    
    <div className="">
      <div className="stackparent">
            <div className="stack" id="tech">
                <h2>My Tech Stack</h2>
            </div>
        </div>
        <div className="stackicons" >
            <div className="stackchild" onWheel={handleScroll}>
              <img src={angular} alt="" />
              <img src={css} alt="css icon" />
              <img src={html} alt="html icon" />
              <img src={js} alt="js icon" />
              <img src={python} alt="python icon" />
              <img src={reactstack} alt="react icon" />
            </div>
        </div>
      </div>
  );
}



export default Menu;

