export default function(state = {}, action) {
    if (action.type == "SET_DURATION") {
        state = {
            ...state,
            duration: action.data
        };
    } else if (action.type == "SET_AMOUNT_OF_GB") {
        state = {
            ...state,
            size_gb: action.data
        };
    } else if (action.type == "SET_UPFRONT_PAYMENT") {
        state = {
            ...state,
            upfront_payment: action.data
        };
    } else if (action.type == "SET_LAST_NAME") {
        state = {
            ...state,
            last_name: action.data
        };
    } else if (action.type == "SET_FIRST_NAME") {
        state = {
            ...state,
            first_name: action.data
        };
    } else if (action.type == "SET_EMAIL") {
        state = {
            ...state,
            email: action.data
        };
    } else if (action.type == "SET_ADDRESS") {
        state = {
            ...state,
            address: action.data
        };
    } else if (action.type == "SET_CARD_NUMBER") {
        state = {
            ...state,
            card_number: action.data
        };
    } else if (action.type == "SET_CARD_EXP_DATE") {
        state = {
            ...state,
            card_exp_date: action.data
        };
    } else if (action.type == "SET_CARD_SECURITY_CODE") {
        state = {
            ...state,
            card_sec_code: action.data
        };
    }
    return state;
}

// // state
// {}
//
// // added action
// {
//     type: "SET_DURATION"
//     data: {size_gb : 2, duration : 12, prepaid : true, card_number: "1233455" }
// }
//
// // state
// {
//     data: {size_gb : 2, duration : 12, prepaid : true, card_number: "1233455" }
// }
//
// // action
//
// {
//     type: "CHANGE_SOMETHING"
//     name: ""
// }
//
// // add to state
//
// {
//     data: {size_gb : 2, duration : 12, prepaid : true, card_number: "1233455" }
// }
