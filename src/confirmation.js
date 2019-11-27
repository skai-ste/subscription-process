import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { agreedTerms } from "./actions";

export function Confirmation() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);

    const title = () => {
        return (
            <div>
                <p>{`You selected ${state.size_gb}GB of space for ${
                    state.duration
                } months`}</p>
            </div>
        );
    };

    const payment = () => {
        return (
            <div>
                <p>{`Upfront payment: ${
                    state.upfront_payment ? "yes" : "no"
                }`}</p>
            </div>
        );
    };

    const price = () => {
        var totalPrice = state.size_gb * state.duration * 2.0;
        if (state.upfront_payment == "true") {
            totalPrice *= 0.9;
        }
        return (
            <div>
                <p>{`Price in total $${totalPrice}`}</p>
            </div>
        );
    };

    const onSave = e => {
        e.preventDefault();

        axios
            .post("/post", state)
            .then(res => {
                console.log("res", res.data);
            })
            .catch(err => {
                console.log("ERROR", err);
            });
    };

    return (
        <div>
            {title()}
            {payment()}
            {price()}
            <input
                defaultChecked={state.agreed_terms}
                type="checkbox"
                name="terms"
                required
                onClick={e => {
                    dispatch(agreedTerms(e.target.checked));
                }}
            />
            I Agree Terms & Coditions
            <button disabled={!state.agreed_terms} onClick={onSave}>
                Confirm
            </button>
        </div>
    );
}
