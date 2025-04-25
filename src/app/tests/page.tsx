
'use client';
// é um server component, ou seja renderiza no lado do servidor, diferente do react que renderiza no lado do cliente, isso tira a responsabilidade do cliente de renderizar a página, o que melhora a performance e a indexação do google, pois o google consegue ler o conteúdo da página
// por padrão é server component, mas se você quiser que seja um client component, você deve adicionar "use client" no topo do arquivo, isso faz com que o componente seja renderizado no lado do cliente, o que pode ser útil em alguns casos, como quando você precisa usar hooks ou state
// interface PostProps {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// interface ResponseProps {
//   posts: PostProps[];
// }

// export default async function PostsPage() {
//   const response = await fetch('https://dummyjson.com/posts');
//   const json = await response.json();

//   const data: ResponseProps = { posts: json.posts };

//   console.log(data);

//   return (
//     <div>
//       <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

//       <div className="flex flex-col gap-4 mx-2">
//         {data.posts.map((post) => (
//           <div key={post.id} className="bg-gray-200 p-4 rounded-md text-black">
//             <h2 className="font-bold">{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// codigo acima da erro pois usa async/await, o que não é suportado no lado do cliente, pois o cliente não tem acesso ao fetch, o que faz com que o código acima não funcione, para resolver isso, você pode usar o useEffect e o useState, que são hooks do react, para fazer a requisição e armazenar os dados no estado do componente, o que faz com que o componente seja renderizado novamente quando os dados forem carregados

// abaixo codigo correto pra ser usado no lado do cliente, o que faz com que o componente seja renderizado novamente quando os dados forem carregados

import { useEffect, useState } from 'react';

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// interface ResponseProps {
//   posts: PostProps[];
// }

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]); // hooks so podem ser usados em components clients, em componentes server não pode
  
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      }
      )
  }, []);

  console.log(posts)

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

      <div className="flex flex-col gap-4 mx-2">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md text-black">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}