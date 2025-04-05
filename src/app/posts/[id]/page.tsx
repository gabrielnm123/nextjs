import { PostProps } from '../page'

export default async function DetailPost({ params }: { params: { id: string } }) {
  const { id } = params;

  await new Promise((resolve) => setTimeout(resolve, 4000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h1>Detalhes do post: {id}</h1>

      <h2>{data.title}</h2>
      <p>{data.body}</p>

    </div>
  );
}
