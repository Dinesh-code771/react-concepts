export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}
