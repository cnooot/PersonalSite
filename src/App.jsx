import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Menu from "./Menu.jsx";
import AnimatedBackground from './Background.jsx';
import { useSpring, animated } from 'react-spring';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Switch from 'react-switch';


export const ThemeContext = createContext(null);

function App() {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    
  };
  const [theme, setTheme] = useState("light");
  const lightBackgroundColor = "#ccc";
  const darkBackgroundColor = "#242424";
  return (  
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="application" id={theme} > 
      <style>
          {`:root { background-color: ${theme === "light" ? lightBackgroundColor : darkBackgroundColor}; }`}
        </style>
            <header>
              <div className="switch">
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              </div>
                <nav className="nav">
                  <ul className="links">
                    <li className="link"><a href="#">About</a></li>
                    <li id="link1" className="link"><a href="##">Projects</a></li>
                    <li id="link2" className="link"><a href="#">Get in touch!</a></li>
                  </ul>
                </nav>
                  <button class="getintouch">Hire me!</button>
            </header>
          
        <About/>
        <Projects/>
        <Menu/>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;