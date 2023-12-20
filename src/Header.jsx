import pepe from "./assets/pikapika.gif"


function Header(){
    return(
        <header>
            <img src={pepe} alt="gif" class="gif"></img>
            <nav className="nav">
                <ul className="links">
                    <li className="link"><a href="#">About</a></li>
                    <li id="link1" className="link"><a href="##">Projects</a></li>
                    <li id="link2" className="link"><a href="#">Get in touch!</a></li>
                </ul>
            </nav>
            <button class="getintouch">Hire me!</button>
        </header>
);
}

export default Header