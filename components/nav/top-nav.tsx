import { Logo } from "@/components/logo";
import { MENU } from "@/constants";
import Link from "next/link";

export function Topnav() {
  return (
    <nav className="z-10 fixed top-0 px-[5%] h-20 w-full flex items-center justify-between border-b border-custom-3">
      <Logo />
      <ul className="space-x-5 font-medium text-custom-3">
        {MENU.map((item) => (
          <li key={item.id} className="inline underline-offset-4 hover:underline">
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="h-0.5 w-16" />
    </nav>
  );
}
