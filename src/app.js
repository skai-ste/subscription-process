import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Subscription } from "./subscription";
import { Info } from "./info";
import { Payment } from "./payment";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Subscription} />
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/payment" component={Payment} />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}
