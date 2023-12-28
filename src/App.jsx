import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Stack from "./Stack.jsx";
import AnimatedBackground from './Background.jsx';
import { useSpring, animated } from 'react-spring';



function App() {

  return (
    <>

      <Header/>
      <AnimatedBackground/>
      <About/>
      <Projects/>
      <Stack/>
    </>
  );
}

export default App
