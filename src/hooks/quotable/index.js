import { API } from "../../constants";
import { useFetch } from "../fetch";

export const useGetQuotable = () => useFetch(API.QUOTABLE.RANDOM);
