
// é um server component, ou seja renderiza no lado do servidor, diferente do react que renderiza no lado do cliente, isso tira a responsabilidade do cliente de renderizar a página, o que melhora a performance e a indexação do google, pois o google consegue ler o conteúdo da página
// por padrão é server component, mas se você quiser que seja um client component, você deve adicionar "use client" no topo do arquivo, isso faz com que o componente seja renderizado no lado do cliente, o que pode ser útil em alguns casos, como quando você precisa usar hooks ou state
import { Button } from "@/components/button";
import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function PostsPage() {
  const response = await fetch('https://dummyjson.com/posts');
  const json = await response.json();

  const data: ResponseProps = { posts: json.posts };

  console.log(data);

  async function handleFetchPosts() { // aqui a interatividade acontece, pois estou usando o use client, o que faz com que o componente seja renderizado novamente quando os dados forem carregados
    'use server';

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }

  async function handleSearchUsers(formData: FormData) {
    'use server'
    
    const userId = formData.get('userId')
    
    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
    const data: ResponseProps = await response. json()
    
    console.log(data)
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

      <Button /> {/* sem nunhum problema posso usar components client dentro de components server */}
      <button onClick={handleFetchPosts} className="bg-blue-500 text-white p-2 rounded-md">
        Fetch Posts
      </button>

      <form className="flex gap-2 my-4" action={handleSearchUsers}>
        <input
          type="text"
          placeholder="ID do usuário"
          className="border border-gray-200 p-2"
          name="userId"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
        >
          Buscar usuário
        </button>
      </form>


      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md text-black">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link className='text-blue-500' href={`posts/${post.id}`}>Abrir post</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

