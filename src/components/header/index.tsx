import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-2 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div><Link href='/'>Home</Link></div>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li><Link href='/contatos'>Contatos</Link></li>
            <li><Link href='/posts'>Posts</Link></li>
            <li><Link href='/buscar-post.old'>Buscar Post Old</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}