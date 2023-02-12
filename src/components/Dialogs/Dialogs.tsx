import React, {ChangeEvent, ChangeEventHandler, useRef} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogMessages} from "./DialogMessages/DialogsMessages";
import {ActionsTypes, changeNewMessageAC, DialogsPageType} from "../../redux/state";


export type MessagePageType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: MessagePageType) {
    let newPostEl = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageAC(e.currentTarget.value)) ;
    }
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {props.dialogsPage.dialogsDate.map((d) => {
                    return <DialogItem key={d.id}
                                       id={d.id}
                                       title={d.title}/>
                })}
            </div>
            <div className={s.messagesEnter}>
                <div className={s.messages}>
                    {props.dialogsPage.messages.map((m) => {
                        return <DialogMessages key={m.id}
                                               id={m.id}
                                               message={m.message}/>
                    })}
                </div>
                <div className={s.enter}>
                    <textarea ref={newPostEl}
                              value={props.dialogsPage.newMessagesText}
                              onChange={onChangeMessageHandler}
                    ></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
