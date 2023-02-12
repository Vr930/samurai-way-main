import React from "react";
import s from "./DialogMessages.module.css"
import {MessagePageTypeMessage} from "../../../redux/state";

export function DialogMessages (props: MessagePageTypeMessage){
    return(
        <div className={ props.id % 2 ? s.messages : s.messages__Revers}>
            <img className={s.DialogImg}
                src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs"
                alt=""/>
            <div className={props.id % 2 ? s.angle__Message : s.angle__Message__Revers}></div>
            <div className={props.id % 2 ? s.messages__Text : s.messages__Text__Revers}>{props.message}</div>
        </div>
    )
}