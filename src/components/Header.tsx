import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/aicade_full_logo.svg" alt="Aicade" width={128} />
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <a
              href="https://play.aicade.io/"
              target="_blank"
              className="text-sm font-medium hover:text-primary"
            >
              Play
            </a>
            <a
              target="_blank"
              href="https://play.aicade.io/"
              className="text-sm font-medium hover:text-primary"
            >
              Create
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container ">
          <nav className="flex flex-col items-center space-y-3 p-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/categories"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Button
              onClick={() => window.open('https://play.aicade.io', '_blank')}
              variant="default"
              className="mt-2 w-30 rounded-full"
            >
              Play Games
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
