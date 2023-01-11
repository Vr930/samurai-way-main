import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProFile} from "./components/Profile/ProFile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="app-wrapper">
                    <Header title="Highway"/>
                    <Navbar title="TipeString"/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" component={ProFile}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
