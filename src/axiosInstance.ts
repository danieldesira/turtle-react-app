import axios from "axios";
import { store } from "./store";

export const axiosTurtleApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const axiosWordpressApiInstance = axios.create({
  baseURL:
    "https://public-api.wordpress.com/rest/v1.1/sites/missionseaturtlenest.wordpress.com",
});

axiosWordpressApiInstance.interceptors.request.use((config) => {
  if (store.getState().wpcomToken.value) {
    config.headers.Authorization = `Bearer ${store.getState().wpcomToken.value}`;
  }
  return config;
});

export const axiosWordpressOauthBEInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_WP_COM_OAUTH_URL,
});
