
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
  const response = await fetch('https://dummyjson.com/posts', {
    cache: "force-cache", // força o cache, ou seja, não vai fazer a requisição novamente, só vai usar o que já está no cache
    next: {
      revalidate: 60, // revalida a cada 60 segundos, ou seja, se a requisição demorar mais que isso, ele vai fazer a requisição novamente
    }
  });
  const json = await response.json();

  const data: ResponseProps = { posts: json.posts };

  console.log(data);

  async function handleFetchPosts() { // para o erro: Os manipuladores de não podem ser passados para as propriedades do Client Component
    // 'use client'; // se eu colocar isso aqui, o componente vai ser renderizado no lado do cliente, o que não é o que queremos
    // o que queremos é que o componente seja renderizado no lado do servidor, então não precisamos colocar isso aqui
    'use server'; // isso evita o erro e faz o que queremos

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }

  async function handleSearchUsers(formData: FormData) {
    'use server'

    const userId = formData.get('userId') // aqui pego o valor do input, o formData é um objeto que contém os dados do formulário, então posso usar o método get para pegar o valor do input com o name userId

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
    const data: ResponseProps = await response.json()

    console.log(data)
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

      <Button /> {/* sem nunhum problema posso usar components client dentro de components server */}
      <button onClick={handleFetchPosts} className="bg-blue-500 text-white p-2 rounded-md">
        Fetch Posts
      </button>

      <form className="flex gap-2 my-4" action={handleSearchUsers}> {/* action passo uma função para o form que posso usar o parametro formData pra passar valores */}
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

