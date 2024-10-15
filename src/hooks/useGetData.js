import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function useGetData(url, getToggle) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, [getToggle]);

  return { data, isLoading };
}
