export default function Header() {
  return (
    <header className="absolute top-0 right-0 z-10 max-w-5xl">
      <nav className="flex gap-4 p-4 font-bold text-lg">
        <a href="#works" className="hover:underline">
          Works
        </a>
        <a href="#profile" className="hover:underline">
          Profile
        </a>
      </nav>
    </header>
  );
}
