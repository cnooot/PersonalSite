import React, { useContext } from 'react';
import { ThemeContext } from './App';
import lightbatman from "./assets/batmanlight.gif"
import batman from "./assets/batman.gif"

function About(){
    const { theme } = useContext(ThemeContext);
    return(
        <div className="about" id='about'>
            <div className="gifpepe">
                <img src={theme === 'light' ? lightbatman : batman} alt="maraca" />
            </div>
            <div className="AboutMe">
                <h1>Hi, My name is <span>Nikodem</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit eveniet ullam 
                provident modi sunt voluptatum 
                aperiam iste quam odit possimus ratione dolor deserunt,
                sed soluta cumque dolorem ea illum.</p>
            </div>
        </div>
);
}

export default About