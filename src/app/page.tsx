import { Metadata } from "next";

export const metadata: Metadata = { // o metadadta serve para SEO, que é o que faz o google indexar sua página. Pode ser adicionado no layout.tsx, mas aqui fica mais fácil de entender, se tiver em layout.tsx todas as outras paginas vão herdar o mesmo metadata, caso não tenha, mas se tiver, cada página pode ter um metadata diferente
  title: "Aprendendo Next.js",
  description: "tutorial de Next.js",
  openGraph: { // aqui você pode adicionar o openGraph, serve para SEO, que é o que faz o google indexar sua página. aqui cria uma imagem de preview do conteúdo que você está compartilhando, como por exemplo quando você compartilha o link no facebook, ele vai pegar a imagem que você colocar aqui
    title: "Aprendendo Next.js",
    description: "tutorial de Next.js",
    images: "https://i.ytimg.com/vi/5xb8yocXWL4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygTMA8=&rs=AOn4CLC7G3DSDlRSZ5YR-pFfqKIcBR18ww", // images é o link da imagem que vai aparecer quando você compartilhar o link no facebook, por exemplo
    url: "https://www.youtube.com/watch?v=5xb8yocXWL4", // url é o link do vídeo que você está compartilhando
    siteName: "Aprendendo Next.js",
    type: "website", // type é o tipo de conteúdo que você está compartilhando, pode ser website, article, video, etc
    locale: "pt-BR", // locale é o idioma do conteúdo que você está compartilhando, pode ser pt-BR, en-US, etc
  },
  robots: {
    index: true, // index é se o conteúdo deve ser indexado pelo google ou não
    follow: true, // follow é se o google deve seguir os links do conteúdo ou não
    nocache: true, // nocache é se o google deve armazenar em cache o conteúdo ou não
    noarchive: true, // noarchive é se o google deve armazenar em cache o conteúdo ou não
    googleBot: {
      index: true, // index é se o google deve indexar o conteúdo ou não
      follow: true, // follow é se o google deve seguir os links do conteúdo ou não
      noimageindex: false, // noimageindex é se o google deve indexar as imagens do conteúdo ou não
      noarchive: false, // noarchive é se o google deve armazenar em cache o conteúdo ou não
      nosnippet: false, // nosnippet é se o google deve mostrar um snippet do conteúdo ou não
      notranslate: false, // notranslate é se o google deve traduzir o conteúdo ou não
    }, // googleBot é se o google deve seguir os links do conteúdo ou não
  }
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Home</h1>
      <a href="/contatos">contatos</a>
    </div>
  );
}
