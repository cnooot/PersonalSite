import pepe from "./assets/pepe-macara-pepe.gif"

function About(){
    return(
        <div className="about">
            <div className="gifpepe">
                <img src={pepe} alt="maraca" />
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