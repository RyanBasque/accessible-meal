import axios from "axios";

const api = axios.create({ baseURL: 'http://10.0.2.2:8080' })

export const getData = async (params) => {
    return JSON.parse(api.get(params));
};

export const postData = async (params) => {
    return 
};