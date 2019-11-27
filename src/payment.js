import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setCardNumber, setCardExpDate, setCardSecurityCode } from "./actions";

export function Payment() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);

    return (
        <div>
            <h1>Add your payment information :</h1>
            <form>
                <input
                    value={state.card_number}
                    type="tel"
                    name="card_number"
                    maxLength="19"
                    placeholder="Card Number"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setCardNumber(e.target.value));
                    }}
                />
                <input
                    value={state.card_exp_date}
                    type="tel"
                    name="card expiration date"
                    maxLength="7"
                    placeholder="MM / YY"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setCardExpDate(e.target.value));
                    }}
                />
                <input
                    value={state.card_sec_code}
                    type="tel"
                    name="card security code"
                    maxLength="4"
                    placeholder="CVC"
                    autoComplete="off"
                    required
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setCardSecurityCode(e.target.value));
                    }}
                />
            </form>
            <div>
                <Link to="/info">PREV</Link>
            </div>
        </div>
    );
}
