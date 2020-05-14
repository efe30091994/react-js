import React from "react";
import styleOfNav from "./Nav.module.css"

const Nav = () => {
    return <nav className={styleOfNav.nav}>
        <div className={styleOfNav.item}><a>Profile</a></div>
        <div className={styleOfNav.item}><a>Messages</a></div>
        <div className={`${styleOfNav.item} ${styleOfNav.active}`}><a>News</a></div>
        <div className={styleOfNav.item}><a>Music</a></div>
        <div className={styleOfNav.item}><a>Frieds</a></div>
    </nav>
}

export default Nav;