import { useEffect, useState } from "react";

type FetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T = unknown>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Fetch error");
        return res.json();
      })
      .then((json: T) => setData(json))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err?.message ?? String(err));
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
