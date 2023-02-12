import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogsDateType} from "../../../redux/state";


export function DialogItem(props: DialogsDateType) {
    return (
        <div className={s.user}>
            <NavLink to={"/dialogs/" + props.id} className={s.name}>{props.title}</NavLink>
        </div>
    )
}