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
    <div className="Tit" id="projects">
      <div className="projectstitle">
        <h2>My projects</h2>
      </div>
      <div className="Projects">
        <div className="tomsite" onMouseEnter={handleMouseEnter(setTomsiteHovered)} onMouseLeave={handleMouseLeave(setTomsiteHovered)}>
          
            <img src={tom} alt="img" />
          
          {tomsiteHovered && (
            <animated.div className="slidemenu" style={slideMenuAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a className="link" href="https://strong-faloodeh-f3a1f1.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
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
                    <a className="link" href="https://strong-faloodeh-f3a1f1.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="calc" onMouseEnter={handleMouseEnter(setCalcHovered)} onMouseLeave={handleMouseLeave(setCalcHovered)}>
          
            <img src={calc} alt="img" />
          
          {calcHovered && (
            <animated.div className="slidemenu" style={calcAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a className="link" href="https://flourishing-pothos-c85010.netlify.app " target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
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
                    <a className="link" href="https://flourishing-pothos-c85010.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="random" onMouseEnter={handleMouseEnter(setRandomHovered)} onMouseLeave={handleMouseLeave(setRandomHovered)}>
          
            <img src={random} alt="img" />
          
          {randomHovered && (
            <animated.div className="slidemenu" style={randomAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a className="link" href="https://enchanting-tulumba-b0699a.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
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
                    <a className="link" href="https://enchanting-tulumba-b0699a.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
                  </li>
                </ul>
              </nav>
            </animated.div>
          )}
        </div>
        <div className="todolist" onMouseEnter={handleMouseEnter(setTodolistHovered)} onMouseLeave={handleMouseLeave(setTodolistHovered)}>
          
            <img src={todolist} alt="img" />
          
          {todolistHovered && (
            <animated.div className="slidemenu" style={todolistAnimationEnter}>
              <nav className="slidenav">
                <ul>
                  <li>
                    <a className="link" href="https://comforting-twilight-357180.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
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
                    <a className="link" href="https://comforting-twilight-357180.netlify.app" target="_blank">Live Preview</a>
                  </li>
                  <li>
                    <a className="link" href="#">About Site</a>
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