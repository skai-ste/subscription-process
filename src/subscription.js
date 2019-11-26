import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setDuration, setAmountOfGb, setUpfrontPayment } from "./actions";

export function Subscription() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);

    return (
        <div>
            <form>
                <select
                    value={state.duration}
                    name="type"
                    placeholder="type"
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setDuration(e.target.value));
                    }}
                >
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="12 months">12 months</option>
                </select>

                <select
                    value={state.size_gb}
                    name="type"
                    placeholder="type"
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setAmountOfGb(e.target.value));
                    }}
                >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>

                <select
                    value={state.upfront_payment}
                    name="type"
                    placeholder="type"
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setUpfrontPayment(e.target.value));
                    }}
                >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
            </form>
            <div>
                <Link to="/info">NEXT</Link>
            </div>
        </div>
    );
}
