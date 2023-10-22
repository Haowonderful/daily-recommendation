import { useState, useCallback } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fireRequest = useCallback(
    async (
      url,
      option,
      dataFormatter = ((data) => { return data; })
    ) => {
      setIsLoading(true);
      setError(null);

      if (!option) {
        option = {
          method: "GET",
        };
      }

      try {
        const response = await fetch(url, option);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const responseData = await response.json();
        return dataFormatter(responseData);
      } catch (err) {
        console.log(`The error in callling ${url} with method ${option.method} is `, err);
        setError(err.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    []
  );

  return {
    error,
    isLoading,
    fireRequest,
  };
};

export default useFetch;
