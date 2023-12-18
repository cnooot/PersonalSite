import pepe from "./assets/pepe-macara-pepe.gif"
import tom from "./assets/tomsite.png"
import calc from "./assets/calc.png"
import random from "./assets/randomgame.png"



function Projects(){
    return(
        <div className="Tit">
            <h2>My projects</h2>
            <div className="Projects">
                <div className="tomsite">
                    <a href="https://strong-faloodeh-f3a1f1.netlify.app" target="_blank">
                        <img src={tom} alt="img" />
                    </a>
                </div>
                <div className="calc">
                    <a href="https://flourishing-pothos-c85010.netlify.app" target="_blank">
                        <img src={calc} alt="img" />
                    </a>
                </div>
                <div className="random">
                    <a href="https://enchanting-tulumba-b0699a.netlify.app" target="_blank">
                        <img src={random} alt="img" />
                    </a>
                </div>
                <div className="todolist">
                    <img src={pepe} alt="img" />
                </div>
            </div>
        </div>
);
}

export default Projects