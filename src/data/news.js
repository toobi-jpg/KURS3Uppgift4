export default async function NewsData() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  if (!response.ok) {
    throw new Error("Failed to fetch dummyjson posts");
  }

  const data = await response.json();

  return data;
}
