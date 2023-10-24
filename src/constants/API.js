export const DEBUG = process.env.NODE_ENV !== "production";
export const API_ROOT = process.env.REACT_APP_API_URI;

export const TIMEOUT = 5000;

export const API = {
  COUNTRIES: {
    ALL: "https://restcountries.com/v3.1/all",
    COUNTRY_NAME: "https://restcountries.com/v3.1/name/:name",
  },
  QUOTABLE: {
    RANDOM: "/random",
  },
};
