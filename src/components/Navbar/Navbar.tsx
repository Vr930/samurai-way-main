import React from "react";
import n from "./Navbar.module.css"

export type Navbar = {
    title: string
}
export function Navbar(props: Navbar) {
    return (
        <div className={n.navbar}>
            <div className={`${n.item} ${n.active}`}><a href="/profile">Profile</a></div>
            <div className={n.item}><a href="/dialogs">Massage</a></div>
            <div><a href="/news">News</a></div>
            <div><a href="/music">Music</a></div>
            <div><a href="/settings">Settings</a></div>
        </div>
    )
}