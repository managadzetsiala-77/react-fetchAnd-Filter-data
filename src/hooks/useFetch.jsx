import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controler = new AbortController();

    async function getData() {
      try {
        const res = await fetch(url, { signal: controler.signal });

        if (!res.ok) {
          throw new Error("something went wrong!");
        }
        const tempData = await res.json();
        setData(tempData);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
    return () => controler.abort();
  }, [url]);

  return { data };
}
