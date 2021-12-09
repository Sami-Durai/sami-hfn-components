// axios
import axios from "axios";

// config
import config from "assets/config";

export const ax = axios.create({
  baseURL: config.apiURL
});

export const axApp = axios.create({
  baseURL: config.appURL
});

export const axCityAutoComplete = axios.create({
  baseURL: config.cityAutoCompleteURL
});