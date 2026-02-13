import { MessageCircle, Twitter, Youtube, Twitch, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

const footerLinks = {
  servidor: [
    { label: 'Início', href: '#home' },
    { label: 'Ranking', href: '#ranking' },
    { label: 'Loja', href: '#', action: 'shop' },
    { label: 'Como Jogar', href: '#how-to-play' },
  ],
  comunidade: [
    { label: 'Discord', href: '#', external: true },
    { label: 'Fórum', href: '#', external: true },
    { label: 'Wiki', href: '#', external: true },
    { label: 'Regras', href: '#', external: true },
  ],
  suporte: [
    { label: 'FAQ', href: '#' },
    { label: 'Contato', href: '#' },
    { label: 'Reportar Bug', href: '#' },
    { label: 'Termos de Uso', href: '#' },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitch, href: '#', label: 'Twitch' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (link: { href: string; action?: string; external?: boolean }) => {
    if (link.action === 'shop') {
      onNavigate('shop');
    } else if (link.external) {
      window.open(link.href, '_blank');
    } else {
      const element = document.querySelector(link.href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-omega-black border-t border-omega-gray-light">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-omega-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-6">
              <span className="font-military text-4xl text-omega-red">Ω</span>
              <div className="flex flex-col">
                <span className="font-military text-2xl text-omega-white tracking-wider">
                  OMEGA<span className="text-omega-red">ROYALE</span>
                </span>
                <span className="font-tech text-[10px] text-omega-muted tracking-[0.3em]">
                  R6 & BATTLE ROYALE
                </span>
              </div>
            </button>
            <p className="text-omega-muted text-sm leading-relaxed mb-6 max-w-sm">
              O servidor de PVP tático mais competitivo do GTA V. 
              Junte-se a milhares de jogadores e prove suas habilidades no campo de batalha.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-omega-gray border border-omega-gray-light text-omega-muted hover:border-omega-red hover:text-omega-red transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-military text-omega-white mb-4 tracking-wider">SERVIDOR</h4>
            <ul className="space-y-3">
              {footerLinks.servidor.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-omega-muted hover:text-omega-red transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-military text-omega-white mb-4 tracking-wider">COMUNIDADE</h4>
            <ul className="space-y-3">
              {footerLinks.comunidade.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-omega-muted hover:text-omega-red transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-military text-omega-white mb-4 tracking-wider">SUPORTE</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-omega-muted hover:text-omega-red transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-omega-gray-light">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-omega-red/10 border border-omega-red/30 rounded">
                <span className="font-military text-omega-red text-lg">18+</span>
              </div>
              <div className="text-xs text-omega-muted">
                <p>Sangue e violência gráfica, violência intensa</p>
                <p>Humor maduro, linguagem forte</p>
              </div>
            </div>

            {/* Legal */}
            <div className="text-center lg:text-right">
              <p className="text-[10px] text-omega-muted/60 max-w-xl">
                Grand Theft Auto e Grand Theft Auto V são marcas registradas da Take-Two Interactive Software. 
                Todas as marcas são de propriedade de seus respectivos donos. Omega Royale não é afiliado ou 
                endossado pela Rockstar, Take-Two ou titulares de direitos.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-omega-gray-light/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-omega-muted">
            © 2026 Omega Royale. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-omega-muted hover:text-omega-red transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-xs text-omega-muted hover:text-omega-red transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="h-1 bg-gradient-to-r from-omega-red via-omega-orange to-omega-red" />
    </footer>
  );
}
