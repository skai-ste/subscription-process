import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Subscription } from "./subscription";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Subscription} />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}
