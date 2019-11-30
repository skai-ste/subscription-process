import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setCardNumber, setCardExpDate, setCardSecurityCode } from "./actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: 220,
        marginTop: theme.spacing(10)
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(10)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    textField: {
        margin: theme.spacing(1),
        width: 280,
        height: 50
    }
}));

export function Payment() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);
    const classes = useStyles();

    const allowNext =
        state.card_number &&
        state.card_number.length > 0 &&
        state.card_exp_date &&
        state.card_exp_date.length > 0 &&
        state.card_sec_code &&
        state.card_sec_code.length > 0;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.paper}>
                    <h1>Add your payment information :</h1>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            value={state.card_number}
                            type="tel"
                            name="card_number"
                            maxLength="19"
                            variant="outlined"
                            className={classes.textField}
                            placeholder="Card Number"
                            autoComplete="off"
                            required
                            onChange={e => {
                                e.preventDefault();
                                dispatch(setCardNumber(e.target.value));
                            }}
                        />
                        <TextField
                            value={state.card_exp_date}
                            type="tel"
                            name="card expiration date"
                            maxLength="7"
                            variant="outlined"
                            className={classes.textField}
                            placeholder="MM / YY"
                            autoComplete="off"
                            required
                            onChange={e => {
                                e.preventDefault();
                                dispatch(setCardExpDate(e.target.value));
                            }}
                        />
                        <TextField
                            value={state.card_sec_code}
                            type="tel"
                            name="card security code"
                            maxLength="4"
                            variant="outlined"
                            className={classes.textField}
                            placeholder="CVC"
                            autoComplete="off"
                            required
                            onChange={e => {
                                e.preventDefault();
                                dispatch(setCardSecurityCode(e.target.value));
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <Button>
                        <Link to="/info">PREV</Link>
                    </Button>
                    <Button>
                        {allowNext ? (
                            <Link to="/confirmation">NEXT</Link>
                        ) : (
                            <div />
                        )}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
