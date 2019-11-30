import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setLastName, setFirstName, setEmail, setAddress } from "./actions";
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
    }
}));

export function Info() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);
    const classes = useStyles();

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
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.paper}>
                    <h1>Please fill more details :</h1>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label="Last Name"
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
                        <TextField
                            label="Email"
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
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            label="First Name"
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
                        <TextField
                            label="Address"
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
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <Button>
                        <Link to="/">PREV</Link>
                    </Button>
                    <Button>
                        {allowNext ? <Link to="/payment">NEXT</Link> : <div />}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
