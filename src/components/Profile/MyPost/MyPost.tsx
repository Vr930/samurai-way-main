import React from "react";
import m from "./MyPost.module.css"
import {Post} from "./Post/Post";

export function MyPost() {
    return (
        <div className={m.main}>
            <Post massege="Hello, my name is Nick"
                likeNambers = {0}
            />
            <Post massege="Hello, my name is Nick"
                  likeNambers = {7}
            />
        </div>
    )
}