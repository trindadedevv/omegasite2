import { useState, useEffect } from 'react';
import { Menu, X, Crosshair, User, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'INÍCIO', href: '#home' },
  { label: 'RANKING', href: '#ranking' },
  { label: 'LOJA', href: '#shop' },
  { label: 'DESCOBRIR', href: '#discover' },
  { label: 'CALENDÁRIO', href: '#calendar' },
  { label: 'ATUALIZAÇÕES', href: '#updates' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cod-black/95 backdrop-blur-md border-b border-cod-green/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <Crosshair className="w-8 h-8 text-cod-green group-hover:rotate-45 transition-transform duration-300" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-military text-xl lg:text-2xl text-cod-white tracking-wider">
                COD<span className="text-cod-green">ROYALE</span>
              </span>
              <span className="font-tech text-[10px] text-cod-muted tracking-[0.3em] -mt-1">
                TACTICAL FIVEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link px-4 py-2 text-sm font-semibold tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#how-to-play"
              className="flex items-center gap-2 text-cod-orange hover:text-cod-white transition-colors text-sm font-semibold tracking-wider"
            >
              <ChevronRight className="w-4 h-4" />
              COMO JOGAR
            </a>
            
            {/* LINK DA ÁREA DO USUÁRIO - DESKTOP */}
            <a
              href="/area-usuario.html"
              className="btn-tactical flex items-center gap-2 text-sm"
            >
              <User className="w-4 h-4" />
              ENTRAR
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-cod-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-cod-dark/98 backdrop-blur-lg border-b border-cod-green/30 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 px-4 text-cod-muted hover:text-cod-green hover:bg-cod-gray/50 rounded transition-all font-semibold tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-cod-gray-light">
            {/* LINK DA ÁREA DO USUÁRIO - MOBILE */}
            <a
              href="/area-usuario.html"
              className="btn-tactical w-full flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              ENTRAR
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}