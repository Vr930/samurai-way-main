import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export type NavbarType = {
    title: string
}

export function Navbar(props: NavbarType) {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Massage</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
    )
}