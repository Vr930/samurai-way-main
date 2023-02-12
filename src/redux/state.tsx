export type PostsType = {
    id: number,
    message: string,
    likeNumbers: number
}
export type DialogsDateType = {
    id: number,
    title: string
}
export type MessagePageTypeMessage = {
    id: number,
    message: string
}
export type ProfilePageType = {
    postsState: Array<PostsType>
    newPostPage: string
}
export type DialogsPageType = {
    dialogsDate: Array<DialogsDateType>
    messages: Array<MessagePageTypeMessage>
    newMessagesText: string
}
type Sidebar = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

/////////////////////////////////       Action Types

export type ActionAddPost = {
    type: "ADD-POST"
}
export type ActionUpdateNewPostText = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionAddMessage = {
    type: "ADD-MESSAGE"
}
export type ActionUpdateMessage = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
}

export type ActionsTypes = ActionAddPost | ActionUpdateNewPostText | ActionUpdateMessage | ActionAddMessage;

/////////////////////////////////       Action Creates
export const addPostAC = (): ActionsTypes => {
    return {type: "ADD-POST"}
}
export const changeNewTextAC = (newText: string): ActionsTypes => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}
export const changeNewMessageAC = (newMessage: string): ActionsTypes => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    }
}
//////////////////////    STOR    /////////////////

export type StorType = {
    _state: RootStateType
    callSubscriber: () => void
    _subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

const stor: StorType = {
    _state: {
        profilePage: {
            postsState: [
                {id: 1, message: "Hello, my name is Nick", likeNumbers: 1},
                {id: 2, message: "Yo Nick", likeNumbers: 3},
            ],
            newPostPage: "Enter the text"
        },
        dialogsPage: {
            dialogsDate: [
                {id: 1, title: "Vladislav"},
                {id: 2, title: "Darya"},
                {id: 3, title: "Vital"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Best of the best"},
            ],
            newMessagesText: "Enter the text"
        }
    },
    _subscribe(callback: () => void) {
        this.callSubscriber = callback
    },
    callSubscriber() {
        console.log("state change")
    },

    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            this._state.profilePage.postsState.push({
                id: 3,
                message: this._state.profilePage.newPostPage,
                likeNumbers: 0
            })
            this._state.profilePage.newPostPage = "";
            this.callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostPage = action.newText;
            this.callSubscriber();
        } else if (action.type === "ADD-MESSAGE") {
            this._state.dialogsPage.messages.push({id: 1, message: this._state.dialogsPage.newMessagesText })
            this.callSubscriber();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessagesText = action.newMessage;
            this.callSubscriber();
        }
    }
}
export default stor;

////////////////////////////////////////////     STATE         /////////////////
//  let state: RootStateType = {
//     profilePage: {
//         postsState: [
//             {id: 1, message: "Hello, my name is Nick", likeNumbers: 0},
//             {id: 2, message: "Yo Nick", likeNumbers: 3},
//         ],
//         newPostPage: "Enter the text"
//     },
//     dialogsPage: {
//         dialogsDate: [
//             {id: 1, title: "Vladislav"},
//             {id: 2, title: "Darya"},
//             {id: 3, title: "Vital"},
//         ],
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How are you?"},
//             {id: 3, message: "Best of the best"},
//         ]
//     }
// }
// let rerenderEnterTree = () => {
//     console.log("state change")
// }
// export const addPost = (postMessage: string) => {
//     state.profilePage.postsState.push({
//         id: 3,
//         message: postMessage,
//         likeNumbers: 100
//     })
//     rerenderEnterTree();
// }
// export const changeNewPostText = (value: string) =>{
//     state.profilePage.newPostPage = value;
//     rerenderEnterTree();
// }
//
// export const subscribe = (callback: ()=> void) => {
//     rerenderEnterTree = callback
// }
