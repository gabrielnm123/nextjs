// Este componente é um Server Component (não tem 'use client')
// Ele roda 100% no lado do servidor — inclusive o fetch da API
import { redirect } from 'next/navigation';

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Tipagem para acessar os parâmetros da URL (?id=3, por exemplo)
interface Props {
  searchParams: { id?: string };
}

// Este componente será executado no servidor a cada requisição
export default async function BuscarPostPage({ searchParams }: Props) {
  const postId = searchParams.id; // Lê o ID passado pela URL (ex: /buscar-post?id=2)
  let post: PostProps | null = null;
  let erro = false;

  // Se tiver um ID na URL, faz a requisição no lado do servidor
  if (postId) {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${postId}`);
      if (!res.ok) throw new Error('Erro ao buscar post');
      post = await res.json(); // Dados do post
    } catch {
      erro = true; // Em caso de erro (ex: ID inexistente), marca como erro
    }
  }

  // Esta função é uma Server Action — executada somente no servidor
  // Quando o usuário envia o formulário, ela é chamada automaticamente
  async function handleSearch(formData: FormData) {
    'use server'; // Instrução obrigatória para Server Actions
    const id = formData.get('id')?.toString().trim();
    
    // Redireciona o usuário para a mesma página com o ID na URL (ex: /buscar-post?id=2)
    if (id) redirect(`/buscar-post?id=${id}`);
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Buscar Post por ID</h1>

      {/* Formulário enviado via Server Action (nada roda no cliente) */}
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

      {/* Mensagem de erro caso o post não seja encontrado */}
      {erro && <p className="text-red-600">Erro: Post não encontrado.</p>}

      {/* Exibição do post — renderizado no lado do servidor */}
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
