import { useEffect, useState, useRef } from 'react';
import { Play, Trophy, Users, DollarSign, Target, Crosshair } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function StatCard({ icon, value, label, prefix = '', suffix = '', delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const targetValue = parseInt(value.replace(/\D/g, ''));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, targetValue, delay]);

  const formattedCount = count.toLocaleString();

  return (
    <div
      ref={ref}
      className="card-tactical p-4 lg:p-6 tactical-corner group hover:border-omega-red/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-omega-red/10 rounded text-omega-red group-hover:bg-omega-red group-hover:text-white transition-all">
          {icon}
        </div>
      </div>
      <div className="font-tech text-2xl lg:text-3xl text-omega-white">
        {prefix}
        <span className="stat-number">{formattedCount}</span>
        {suffix}
      </div>
      <div className="text-xs text-omega-muted uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export default function Hero({ onNavigate }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-50" />
      
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-omega-red/5 via-transparent to-omega-orange/5"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Large Omega Symbol Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-military text-[50rem] text-omega-red/[0.02] select-none pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), calc(-50% + ${mousePos.y * 0.5}px))`,
        }}
      >
        Ω
      </div>

      {/* Scan Line */}
      <div className="scan-line absolute inset-0 pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-omega-red/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-omega-orange/20 rotate-45 hidden lg:block" />
      
      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-omega-red/40" />
      <div className="absolute bottom-24 right-4 w-16 h-16 border-r-2 border-b-2 border-omega-red/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-omega-red/20 border border-omega-red/40 rounded mb-6">
            <Target className="w-4 h-4 text-omega-red animate-pulse" />
            <span className="font-tech text-sm text-omega-red tracking-wider">SERVIDOR ONLINE</span>
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-military text-6xl sm:text-7xl lg:text-9xl text-omega-red omega-symbol">
              Ω
            </span>
          </div>
          <h1 className="font-military text-5xl sm:text-6xl lg:text-8xl text-omega-white mb-4 tracking-wider">
            <span className="glitch-text" data-text="OMEGA">OMEGA</span>
            <span className="text-omega-red glitch-text" data-text="ROYALE">ROYALE</span>
          </h1>

          {/* Subtitle */}
          <p className="font-tech text-lg sm:text-xl text-omega-muted mb-2 tracking-[0.3em]">
            R6 & BATTLE ROYALE
          </p>
          <p className="text-omega-orange font-semibold tracking-wider mb-10">
            By Players, For Players.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => onNavigate('login')}
              className="btn-tactical text-lg flex items-center gap-3 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              JOGAR AGORA
            </button>
            <button className="px-8 py-4 border-2 border-omega-gray-light text-omega-white font-semibold tracking-wider hover:border-omega-red hover:text-omega-red transition-all">
              VER TRAILER
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            <StatCard
              icon={<Trophy className="w-5 h-5" />}
              value="1"
              label="Ranking PVP"
              prefix="#"
              delay={0}
            />
            <StatCard
              icon={<DollarSign className="w-5 h-5" />}
              value="50000"
              label="Em Prêmios/Mês"
              prefix="R$ "
              delay={100}
            />
            <StatCard
              icon={<Users className="w-5 h-5" />}
              value="150000"
              label="Jogadores Ativos"
              suffix="+"
              delay={200}
            />
            <StatCard
              icon={<Crosshair className="w-5 h-5" />}
              value="99"
              label="Uptime %"
              suffix="%"
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-omega-black to-transparent" />

      {/* Disclaimer */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className="text-[10px] text-omega-muted/60 max-w-2xl mx-auto">
          O OMEGA ROYALE não é afiliado ou endossado pela Take-Two, Rockstar North Interactive 
          ou qualquer outro detentor de direitos autorais. Todas as marcas registradas são de 
          propriedade de seus respectivos proprietários.
        </p>
      </div>
    </section>
  );
}
