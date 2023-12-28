import pepe from "./assets/pepe-macara-pepe.gif"
import tom from "./assets/tomsite.png"
import calc from "./assets/calc.png"
import random from "./assets/randomgame.png"
import todolsit from "./assets/todolist.png"
import { useState } from "react"

function Projects(){
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return(
        <div className="Tit">
            <div className="projectstitle">
                <h2>My projects</h2>
            </div>
            <div className="Projects">
                    <div className="tomsite" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="https://strong-faloodeh-f3a1f1.netlify.app" target="_blank" rel="noopener noreferrer">
                            <img src={tom} alt="img" />
                        </a>
                        {isHovered &&(
                        <div className="slidemenu">
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
                        </div>
                        )}
                    </div>
             
                <div className="calc" >
                    <a href="https://flourishing-pothos-c85010.netlify.app" target="_blank">
                        <img src={calc} alt="img" />
                    </a>
                </div>
                <div className="random" >
                    <a href="https://enchanting-tulumba-b0699a.netlify.app" target="_blank">
                        <img src={random} alt="img" />
                    </a>
                </div>
                <div className="todolist">
                    <a href="https://comforting-twilight-357180.netlify.app" target="_blank">
                        <img src={todolsit} alt="img" />
                    </a>
                </div>
            </div>
        </div>
        
);

}

export default Projects