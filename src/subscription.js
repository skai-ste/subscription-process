import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Route, Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";
import { setDuration, setAmountOfGb, setUpfrontPayment } from "./actions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export function Subscription() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);
    const classes = useStyles();

    return (
        <div>
            <h1>Subscription order process in 4 steps:</h1>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Duration</InputLabel>
                <NativeSelect
                    value={state.duration}
                    name="type"
                    placeholder="type"
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setDuration(e.target.value));
                    }}
                >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                </NativeSelect>
                <FormHelperText>Select period</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">GB</InputLabel>
                <NativeSelect
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
                </NativeSelect>
                <FormHelperText>
                    Select amount of gigabytes in a cloud
                </FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">
                    Upfront payment
                </InputLabel>
                <NativeSelect
                    value={state.upfront_payment}
                    name="type"
                    placeholder="type"
                    onChange={e => {
                        e.preventDefault();
                        dispatch(setUpfrontPayment(e.target.value));
                    }}
                >
                    <option value="true">yes</option>
                    <option value="false">no</option>
                </NativeSelect>
                <FormHelperText>Select payment method</FormHelperText>
            </FormControl>
            <Button variant="contained">
                <Link to="/info">NEXT</Link>
            </Button>
        </div>
    );
}
