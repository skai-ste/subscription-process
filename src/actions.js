import axios from "axios";

export async function setDuration(data) {
    return {
        type: "SET_DURATION",
        data: data
    };
}

export async function setAmountOfGb(data) {
    return {
        type: "SET_AMOUNT_OF_GB",
        data: data
    };
}

export async function setUpfrontPayment(data) {
    return {
        type: "SET_UPFRONT_PAYMENT",
        data: data
    };
}

export async function setLastName(data) {
    return {
        type: "SET_LAST_NAME",
        data: data
    };
}

export async function setFirstName(data) {
    return {
        type: "SET_FIRST_NAME",
        data: data
    };
}

export async function setEmail(data) {
    return {
        type: "SET_EMAIL",
        data: data
    };
}

export async function setAddress(data) {
    return {
        type: "SET_ADDRESS",
        data: data
    };
}

export async function setCardNumber(data) {
    return {
        type: "SET_CARD_NUMBER",
        data: data
    };
}

export async function setCardExpDate(data) {
    return {
        type: "SET_CARD_EXP_DATE",
        data: data
    };
}

export async function setCardSecurityCode(data) {
    return {
        type: "SET_CARD_SECURITY_CODE",
        data: data
    };
}
