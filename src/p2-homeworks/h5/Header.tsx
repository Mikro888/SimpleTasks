import React from 'react'
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";


function Header() {
    return (
        <div className={classes.header}>
            <NavLink to={'/pre-junior'} activeClassName={classes.activeLink}>Pre-junior</NavLink>
            <NavLink to={'/junior'} activeClassName={classes.activeLink} >Junior</NavLink>
            <NavLink to={'/junior+'} activeClassName={classes.activeLink}>Junior+</NavLink>
            <div className={classes.menuButton}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </div>

        </div>
    )
}

export default Header
