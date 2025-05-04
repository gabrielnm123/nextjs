import { PostProps } from "../../page";

export async function PostInfo({ id }: { id: string }) {
  // Simula delay opcional
  await new Promise((resolve) => setTimeout(resolve, 4000));

  // Busca os dados do post
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}