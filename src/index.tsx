import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stor from "./redux/state";

let rerenderEnterTree = () => {
    ReactDOM.render(
        <App state={stor.getState()}
             dispatch={stor.dispatch.bind(stor)}/>,
        document.getElementById('root')
    );
}


rerenderEnterTree();

stor._subscribe(rerenderEnterTree);