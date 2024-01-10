import React from "react";
import github from "./assets/github.svg"
import discord from "./assets/discord.svg"
import card from "./assets/address-card-regular (1).svg"

function Footer(){

    return(   
        <footer class="icons">
    <a href="https" target="_blank">
        <img class='icon' src={discord} alt=""></img>
    </a>
    <a href="https://github.com/cnooot" target="_blank">
        <img class='icon' src={github} alt=""></img>
    </a>
    <a href="" target="_blank">
        <img class='icon' src={card} alt=""></img>
    </a>
</footer>
);
}

export default Footer;