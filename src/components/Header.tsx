import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { href: 'work', label: 'WORK' },
    { href: 'about', label: 'ABOUT' },
    { href: 'journey', label: 'JOURNEY' },
    { href: 'cool-stuff', label: 'COOL sshh' },
    { href: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (window.location.pathname !== '/') {
      navigate('/');
      setCurrentPage('home');

      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-lg tracking-wide font-medium text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            <Link to="/" className="hover:text-blue-500 transition-colors">
              UZMA
            </Link>
          </button>

          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm tracking-wider text-foreground hover:opacity-60 transition-opacity duration-200 ${
                  (currentPage === 'cool-shit' && item.href === 'cool-shit') ||
                  (currentPage === 'home' && item.href !== 'cool-shit') ? 'opacity-60' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-sm tracking-wider text-foreground hover:opacity-60 transition-opacity duration-200 text-left w-full"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-2"
              >
                Schedule a call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}