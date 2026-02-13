import { useState, useEffect } from 'react';
import { Menu, X, User, ChevronRight, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

const navItems = [
  { label: 'INÍCIO', href: '#home' },
  { label: 'RANKING', href: '#ranking' },
  { label: 'LOJA', href: '#shop', action: 'shop' },
  { label: 'DESCOBRIR', href: '#discover' },
  { label: 'CALENDÁRIO', href: '#calendar' },
  { label: 'ATUALIZAÇÕES', href: '#updates' },
];

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action === 'shop') {
      onNavigate('shop');
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-omega-black/95 backdrop-blur-md border-b border-omega-red/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
            <div className="relative">
              <span className="font-military text-3xl lg:text-4xl text-omega-red group-hover:scale-110 transition-transform duration-300 inline-block">
                Ω
              </span>
              <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-military text-xl lg:text-2xl text-omega-white tracking-wider">
                OMEGA<span className="text-omega-red">ROYALE</span>
              </span>
              <span className="font-tech text-[10px] text-omega-muted tracking-[0.3em] -mt-1">
                R6 & BATTLE ROYALE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="nav-link px-4 py-2 text-sm font-semibold tracking-wider bg-transparent"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => onNavigate('shop')}
              className="p-2 text-omega-muted hover:text-omega-red transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#how-to-play');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-omega-orange hover:text-omega-white transition-colors text-sm font-semibold tracking-wider"
            >
              <ChevronRight className="w-4 h-4" />
              COMO JOGAR
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="btn-tactical flex items-center gap-2 text-sm"
            >
              <User className="w-4 h-4" />
              ENTRAR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-omega-red"
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-omega-dark/98 backdrop-blur-lg border-b border-omega-red/30 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="py-3 px-4 text-omega-muted hover:text-omega-red hover:bg-omega-gray/50 rounded transition-all font-semibold tracking-wider text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-omega-gray-light">
            <button 
              onClick={() => {
                onNavigate('login');
                setIsMobileMenuOpen(false);
              }}
              className="btn-tactical w-full flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              ENTRAR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
