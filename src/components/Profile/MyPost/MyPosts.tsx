import React, {useRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageAddType} from "../ProFile";
import {addPostAC, changeNewTextAC} from "../../../redux/state";

export function MyPosts(props: ProfilePageAddType) {
    let newPostEl = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        if(newPostEl.current) {
            props.dispatch(addPostAC());
        }
    }
    const newPostTextareaHandler = () =>{
        if(newPostEl.current) {
            props.dispatch(changeNewTextAC(newPostEl.current.value))
        }
    }

    return (
        <div className={s.main}>
            <div className={s.textarea}>
                <h3>My posts</h3>
                <div>
                    <textarea name="name" id="" cols={79} rows={3}
                              value={props.profilePage.newPostPage}
                              onChange={newPostTextareaHandler}
                              ref={newPostEl}></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={addPostHandler}>Send</button>
                </div>
            </div>
            {props.profilePage.postsState.map((p) => {
                return <Post key={p.id}
                             id={p.id}
                             message={p.message}
                             likeNumbers={p.likeNumbers}

                />
            })}
        </div>
    )
}