import axios from "axios";

var instance = axios.create({
    baseURL: "https://httpbin.org",
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token"
});

export default instance;
