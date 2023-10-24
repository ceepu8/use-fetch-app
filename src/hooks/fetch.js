import { useEffect, useState } from "react";
import { API_ROOT, StatusCode, TIMEOUT } from "../constants";
import logger from "../utils/logger";

const session = { user: { accessToken: "" } };

async function redirectIfUnAuthorized() {
  if (typeof window !== "undefined") {
    if (session.user) {
      // await logout();
    }
    window.location.href = "/";
  }
}

/**
 * @param {string} url - The base URL.
 */

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // function: huỷ bỏ một request html nếu cần thiết, tránh việc fetch data khi component đã unmounted
    const controller = new AbortController();


    const fetchData = async () => {
      const timer = setTimeout(() => controller.abort(), TIMEOUT);

      try {
        const response = await fetch(API_ROOT + url, {
          method: "GET",
          ...options,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${session.user.accessToken || ""}`,
          },
          signal: controller.signal,
        });

        if (response.status === StatusCode.UNAUTHORIZED) {
          redirectIfUnAuthorized();
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof SyntaxError) {
          logger.error(`[SyntaxError] ${error}`);
        } else {
          logger.error(`[Error] ${error}`);
        }
        setError(error);
      } finally {
        clearTimeout(timer);
        setLoading(false);
      }
    };
    console.log(123);


    fetchData();

    // Cleanup function to cancel the fetch if the component is unmounted
    return () => controller.abort();
  }, []);

  return { data, error, loading };
};
