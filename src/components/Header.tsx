
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-gaming-purple to-gaming-blue bg-clip-text text-xl font-bold text-transparent">
              Aicade
            </span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" className="hidden rounded-full md:inline-flex">
            Subscribe
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <Button variant="default" className="mt-2 w-full rounded-full">
              Subscribe
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
