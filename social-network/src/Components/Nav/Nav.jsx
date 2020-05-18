import React from "react";
import styleOfNav from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={styleOfNav.nav}>
        <div className={styleOfNav.item}>
            <NavLink to="/profile" activeClassName={styleOfNav.active}>Profile</NavLink>
        </div>
        <div className={styleOfNav.item}>
            <NavLink to="/dialogs" activeClassName={styleOfNav.active}>Messages</NavLink>
        </div>
        <div className={`${styleOfNav.item} ${styleOfNav.active}`}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={styleOfNav.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={styleOfNav.item}>
            <NavLink to="/settings" activeClassName={styleOfNav.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;