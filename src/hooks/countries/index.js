import { API } from "../../constants";
import { useFetch } from "../fetch";

export const useGetCountries = () => useFetch(API.COUNTRIES.ALL);
