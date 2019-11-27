import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Subscription } from "./subscription";
import { Info } from "./info";
import { Payment } from "./payment";
import { Confirmation } from "./confirmation";

export function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Subscription} />
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/payment" component={Payment} />
                    <Route
                        exact
                        path="/confirmation"
                        component={Confirmation}
                    />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}
