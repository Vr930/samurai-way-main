import React from "react";
import s from "./Header.module.css";

export type HeaderType = {
    title: string
}
export function Header(props: HeaderType) {
    return (
        <div className={s.header}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
                alt="No"/>
            <span className={s.header__span}>{props.title}</span>
        </div>
    )
}