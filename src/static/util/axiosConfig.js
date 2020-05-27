import axios from "axios";
import customHistory from "./customHistory";

const API_URL = "";
const TIMEOUT = 5000;

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
const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        if (error.response) {
            if (error.response.status === 500) {
                console.log(error);

                customHistory.push("/error");
            }
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
        } else if (error.request) {
            customHistory.push("/error");
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
        } else {
            customHistory.push("/error");
        }
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
    setupInterceptors: () => {
        instance.interceptors.request.use((request) => requestHandler(request));

        instance.interceptors.response.use(
            (response) => successHandler(response),
            (error) => errorHandler(error)
        );
    },
};

export default instance;
