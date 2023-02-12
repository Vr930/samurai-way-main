import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProFile} from "./components/Profile/ProFile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {ActionAddPost, ActionsTypes, ActionUpdateNewPostText, RootStateType} from "./redux/state";


export type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="app-wrapper">
                    <Header title="Highway"/>
                    <Navbar title="TipeString"/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" render={() =>
                            <ProFile profilePage={props.state.profilePage}
                                     dispatch={props.dispatch}
                            />}/>
                        <Route path="/dialogs" render={() =>
                            <Dialogs dialogsPage={props.state.dialogsPage}
                                     dispatch={props.dispatch}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        {/*<div> {console.log(props.posts)} </div>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
