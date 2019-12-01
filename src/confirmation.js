import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { agreedTerms, confirmedButton } from "./actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(10)
    },
    paper: {
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

export function Confirmation() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);
    const classes = useStyles();

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
                dispatch(confirmedButton(true));
            })
            .catch(err => {
                console.log("ERROR", err);
            });
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.paper}>
                    <h1>{title()}</h1>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h3>{payment()}</h3>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <h2>{price()}</h2>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.agreed_terms}
                                onChange={e => {
                                    dispatch(agreedTerms(e.target.checked));
                                }}
                            />
                        }
                        label="I Agree Terms & Coditions"
                    />
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <Button
                        variant="contained"
                        disabled={!state.agreed_terms}
                        onClick={onSave}
                    >
                        Confirm
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <div>
                        {state.confirmed_button ? (
                            <h4> Thank you! Your order was submitted.</h4>
                        ) : (
                            <div />
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
