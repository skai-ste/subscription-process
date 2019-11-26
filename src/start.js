import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducers";

const startingState = {
    duration: "12 months",
    size_gb: "5",
    upfront_payment: "no"
};

const store = createStore(
    reducer,
    startingState,
    applyMiddleware(reduxPromise)
);

let elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector("main"));
