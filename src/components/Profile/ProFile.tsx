import React from "react";
import s from "./ProFile.module.css"
import {MyPosts} from "./MyPost/MyPosts";
import {ProFileInfo} from "./MyPost/ProfileInfo/ProFileInfo";
import {ActionAddPost, ActionsTypes, ActionUpdateNewPostText, ProfilePageType} from "../../redux/state";

export type ProfilePageAddType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export function ProFile(props: ProfilePageAddType) {
    return (
        <div className={s.main}>
            <ProFileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    )
}