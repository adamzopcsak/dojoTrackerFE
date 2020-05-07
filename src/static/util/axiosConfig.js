import axios from "axios";

const API_URL = "http://dtbackend:5000";
const TIMEOUT = 10000000000000000000;

const instance = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT,
    withCredentials: true,
});

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

//request interceptor, add headers
const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
    }
    return request;
};

//response interceptor anything outside 2xx range
const errorHandler = (error, user) => {
    if (isHandlerEnabled(error.config)) {
        if (error.response) {
            if (error.response.status == 500) {
                console.log(error);

                // history.push("/500");
            }
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            //history.push("/no-connection");
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    }
    return Promise.reject({ ...error });
};

//response interceptor anything inside 2xx range
const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
    }
    return response;
};

export const setup = {
    setupInterceptors: (userContext) => {
        instance.interceptors.request.use((request) => requestHandler(request));

        instance.interceptors.response.use(
            (response) => successHandler(response),
            (error) => errorHandler(error, userContext)
        );
    },
};

export default instance;
