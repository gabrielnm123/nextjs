// src/app/posts/[id]/page.tsx

import { Suspense } from "react";
import { PostInfo } from "./_components/post";

// Em Next.js 15 (App Router), mesmo em rotas dinâmicas ([id]),
// os parâmetros vêm como Promise e devem ser aguardados.
interface Props {
  params: Promise<{ id: string }>;
}

export default async function DetailPost({ params }: Props) {
  // Aguarda a Promise que contém o parâmetro dinâmico
  const { id } = await params;


  return (
    <div>
      <h1 className="text-4xl font-bold">Detalhes do post: {id}</h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
