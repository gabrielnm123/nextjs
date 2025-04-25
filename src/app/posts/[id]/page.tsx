// src/app/posts/[id]/page.tsx

// import { redirect } from 'next/navigation';
import { PostProps } from '../page';  // ou de onde você definiu PostProps

// Em Next.js 15 (App Router), mesmo em rotas dinâmicas ([id]),
// os parâmetros vêm como Promise e devem ser aguardados.
interface Props {
  params: Promise<{ id: string }>;
}

export default async function DetailPost({ params }: Props) {
  // Aguarda a Promise que contém o parâmetro dinâmico
  const { id } = await params;
  
  // Simula delay opcional
  await new Promise((resolve) => setTimeout(resolve, 4000));

  // Busca os dados do post
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
