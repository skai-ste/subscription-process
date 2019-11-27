import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setLastName, setFirstName, setEmail, setAddress } from "./actions";

export function Info() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);

    const allowNext =
        state.last_name &&
        state.last_name.length > 0 &&
        state.first_name &&
        state.first_name.length > 0 &&
        state.email &&
        state.email.length > 0 &&
        state.address &&
        state.address.length > 0;

    return (
        <div>
            <h1>Please fill in :</h1>
            <form>
                <input
                    value={state.last_name}
                    type="text"
                    name="last"
                    placeholder="last name"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setLastName(e.target.value));
                    }}
                />
                <input
                    value={state.first_name}
                    type="text"
                    name="first"
                    placeholder="first name"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setFirstName(e.target.value));
                    }}
                />
                <input
                    value={state.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setEmail(e.target.value));
                    }}
                />
                <input
                    value={state.address}
                    type="text"
                    name="address"
                    placeholder="address"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setAddress(e.target.value));
                    }}
                />
            </form>
            <div>
                <Link to="/">PREV</Link>
            </div>
            <div>{allowNext ? <Link to="/payment">NEXT</Link> : <div />}</div>
        </div>
    );
}
