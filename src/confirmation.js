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

    return (
        <div>
            <div>
                <h1>HIIIIIII</h1>
            </div>
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
            <button disabled={!state.agreed_terms}>Confirm</button>
        </div>
    );
}
