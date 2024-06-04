import Menu from "./Menu";
import Link from "next/link";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className=" bg-zinc-900 fixed w-full">
      <nav className="wrapper flex justify-between items-center py-6  px-4 text-zinc-300">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold ">Card Control</h1>
        </Link>
        <Menu />
      </nav>
    </header>
  );
}
