import { useState, useEffect } from "react";

export default function useNewsData(page = 1, limit = 5, search = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        let url;
        if (search) {
          url = `https://dummyjson.com/posts/search?q=${search}`;
        } else {
          url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const posts = await response.json();
        setData(posts);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNews();
  }, [page, limit, search]);

  return { data, loading, error };
}
