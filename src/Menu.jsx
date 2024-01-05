import React, { useRef, useState } from "react";
import angular from "./assets/angular.svg"
import css from "./assets/css3-alt.svg"
import html from "./assets/html5.svg"
import js from "./assets/js.svg"
import python from "./assets/python.svg"
import reactstack from "./assets/react.svg"

/* function Stack(=)[ */
/*   {id:"1", src:{angular} }, */
/*   {id:"2", src:{css} }, */
/*   {id:"3", src:{html} }, */
/*   {id:"4", src:{js}  }, */
/*   {id:"5", src:{python} }, */
/*   {id:"6", src:{reactstack}  }, */
/* ]; */


function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {
   
  };

  return (
    
    <div className="">
      <div className="stackparent">
            <div className="stack">
                <h2>My Tech Stack</h2>
            </div>
        </div>
      <div
        ref={containerRef}
        style={{
          width: "500px",
          overflowX: "scroll" ,
          margin: "auto",
          overflow:"hidden",
          scrollBehavior: "smooth",
        }}
      >
        <div className="stackicons">
            <div className="stackchild">
              <img src={angular} alt="" />
              <img src={css} alt="css icon" />
              <img src={html} alt="html icon" />
              <img src={js} alt="js icon" />
              <img src={python} alt="python icon" />
              <img src={reactstack} alt="react icon" />
            </div>
          
        </div>
      </div>

      <div className="scrollbuttons">
        <button onClick={() => handleScroll(-200)}>Scroll Left</button>
        <button onClick={() => handleScroll(200)}>Scroll Right</button>
      </div>
    </div>
  );
}



export default Menu;

