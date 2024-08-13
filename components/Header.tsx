import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div>
      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ngoc Thang <span className="text-accent">.</span>
            </h1>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
}
