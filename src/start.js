import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducers";
const store = createStore(reducer, applyMiddleware(reduxPromise));

let elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector("main"));