import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setWait(false);
    setLoading(true);

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal });
        const jsonResult = await response.json();

        if (!wait) {
          if (Array.isArray(jsonResult)) setResult(jsonResult);
          if (!Array.isArray(jsonResult)) setResult([jsonResult]);
        }

        setLoading(false);
      } catch (error) {
        if (!wait) setLoading(false);
        console.error(error);
      }
    };

    fetchData();

    return () => {
      setWait(true);
      controller.abort();
    };
  }, [url]);

  return [result, loading];
};

export default useFetch;
