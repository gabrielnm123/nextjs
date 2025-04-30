// src/app/posts/[id]/page.tsx

// aqui acontece tudo no lado do servidor, ate a recsição dos dados no lado do servidor quando o cliente interage com o servidor, o que faz com que o componente seja renderizado novamente quando os dados forem carregados

import { redirect } from 'next/navigation';

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Props devem incluir BOTH params e searchParams como Promise
interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function BuscarPostPage({ params, searchParams }: Props) {
  // “Consome” params para satisfazer o tipo PageProps
  await params;  

  // Aqui sim extraímos o id via searchParams
  const { id } = await searchParams;  
  const postId = id ? parseInt(id, 10) : null;

  let post: PostProps | null = null;
  let erro = false;

  if (postId) {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${postId}`);
      if (!res.ok) throw new Error('Erro ao buscar post');
      post = await res.json();
    } catch {
      erro = true;
    }
  }

  async function handleSearch(formData: FormData) {
    'use server';
    const novoId = formData.get('id')?.toString().trim();
    if (novoId) {
      redirect(`/posts/${novoId}`);
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Buscar Post por ID</h1>
      <form action={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          name="id"
          placeholder="Digite o ID do post"
          className="border border-gray-300 p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Buscar
        </button>
      </form>

      {erro && <p className="text-red-600">Erro: Post não encontrado.</p>}

      {post && (
        <div className="bg-gray-200 p-4 rounded-md text-black">
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p className="mt-2">{post.body}</p>
          <span className="text-sm text-gray-600">User ID: {post.userId}</span>
        </div>
      )}
    </div>
  );
}
