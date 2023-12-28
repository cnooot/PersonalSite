import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import tom from "./assets/tomsite.png";
import calc from "./assets/calc.png";
import random from "./assets/randomgame.png";
import todolist from "./assets/todolist.png";

function Projects() {
  const [tomsiteHovered, setTomsiteHovered] = useState(false);
  const [calcHovered, setCalcHovered] = useState(false);
  const [randomHovered, setRandomHovered] = useState(false);
  const [todolistHovered, setTodolistHovered] = useState(false);

  const handleMouseEnter = (setHovered) => () => {
    setHovered(true);
  };

  const handleMouseLeave = (setHovered) => () => {
    setHovered(false);
  };

  const slideMenuAnimationEnter = useSpring({
    left: tomsiteHovered ? 0 : -1000,
    config: config.default,
  });

  const slideMenuAnimationLeave = useSpring({
    left: tomsiteHovered ? 0 : 0,
    bottom: tomsiteHovered ? 100 : -10,
    config: config.default,
  });

  const calcAnimationEnter = useSpring({
    left: calcHovered ? 0 : -1000,
    config: config.default,
  });

  const calcAnimationLeave = useSpring({
    left: calcHovered ? 0 : 0,
    bottom: calcHovered ? 100 : -10,
    config: config.default,
  });

  const randomAnimationEnter = useSpring({
    left: randomHovered ? 0 : -1000,
    config: config.default,
  });

  const randomAnimationLeave = useSpring({
    left: randomHovered ? 0 : 0,
    bottom: randomHovered ? 100 : -10,
    config: config.default,
  });

  const todolistAnimationEnter = useSpring({
    left: todolistHovered ? 0 : -1000,
    config: config.default,
  });

  const todolistAnimationLeave = useSpring({
    left: todolistHovered ? 0 : 0,
    bottom: todolistHovered ? 100 : -10,
    config: config.default,
  });

  return (
    <div className="Tit">
      <div className="projectstitle">
        <h2>My projects</h2>
      </div>
      <div className="Projects">
        <div className="tomsite" onMouseEnter={handleMouseEnter(setTomsiteHovered)} onMouseLeave={handleMouseLeave(setTomsiteHovered)}>
          <a href="https://strong-faloodeh-f3a1f1.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={tom} alt="img" />
          </a>
          {tomsiteHovered && (
            <animated.div className="slidemenu" style={slideMenuAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
          {!tomsiteHovered && (
            <animated.div className="slidemenu" style={slideMenuAnimationLeave}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="calc" onMouseEnter={handleMouseEnter(setCalcHovered)} onMouseLeave={handleMouseLeave(setCalcHovered)}>
          <a href="https://flourishing-pothos-c85010.netlify.app" target="_blank">
            <img src={calc} alt="img" />
          </a>
          {calcHovered && (
            <animated.div className="slidemenu" style={calcAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
          {!calcHovered && (
            <animated.div className="slidemenu" style={calcAnimationLeave}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="random" onMouseEnter={handleMouseEnter(setRandomHovered)} onMouseLeave={handleMouseLeave(setRandomHovered)}>
          <a href="https://enchanting-tulumba-b0699a.netlify.app" target="_blank">
            <img src={random} alt="img" />
          </a>
          {randomHovered && (
            <animated.div className="slidemenu" style={randomAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
          {!randomHovered && (
            <animated.div className="slidemenu" style={randomAnimationLeave}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="todolist" onMouseEnter={handleMouseEnter(setTodolistHovered)} onMouseLeave={handleMouseLeave(setTodolistHovered)}>
          <a href="https://comforting-twilight-357180.netlify.app" target="_blank">
            <img src={todolist} alt="img" />
          </a>
          {todolistHovered && (
            <animated.div className="slidemenu" style={todolistAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
          {!todolistHovered && (
            <animated.div className="slidemenu" style={todolistAnimationLeave}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a href="#">Live Preview</a>
                  </li>
                  <li>
                    <a href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
