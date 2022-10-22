import axios from "axios";

const api = axios.create({
  baseURL: "https://accessiblemeal-final-api.azurewebsites.net",
});

export const getData = async (route, params) => {
  const response = api.get(route, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const postData = async (route, params) => {
  const response = api.post(route, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};
