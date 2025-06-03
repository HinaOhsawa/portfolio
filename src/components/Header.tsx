import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col w-9/10 mx-auto ">
      {/* <header className="absolute top-0 right-0 z-10 max-w-5xl"> */}
      <nav className="justify-end flex gap-4 p-4 font-bold text-lg">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/#works" className="hover:underline">
          Works
        </Link>
        <Link href="/#profile" className="hover:underline">
          Profile
        </Link>
      </nav>
    </header>
  );
}
