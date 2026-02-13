import { useEffect, useRef, useState } from 'react';
import { Users, Trophy, Swords, Shield, Target, Zap } from 'lucide-react';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function Counter({ end, prefix = '', suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Users, value: 276678, label: 'CONTAS CRIADAS', suffix: '' },
  { icon: Trophy, value: 800000, label: 'EM PREMIAÇÕES', prefix: 'R$ ', suffix: '+' },
  { icon: Swords, value: 100, label: 'CAMPEONATOS', prefix: '+ de ', suffix: '' },
  { icon: Shield, value: 2621, label: 'CLÃS ATIVOS', suffix: '' },
  { icon: Target, value: 22890, label: 'CONTAS BANIDAS', suffix: '' },
  { icon: Zap, value: 50, label: 'EVENTOS/MÊS', suffix: '+' },
];

const features = [
  {
    icon: Target,
    title: 'PVP TÁTICO',
    description: 'Sistema de combate refinado com mecânicas realistas e balanceadas.',
  },
  {
    icon: Shield,
    title: 'SISTEMA DE CLÃS',
    description: 'Forme sua equipe, conquiste territórios e domine o ranking.',
  },
  {
    icon: Trophy,
    title: 'CAMPEONATOS',
    description: 'Competições semanais e mensais com prêmios em dinheiro.',
  },
  {
    icon: Zap,
    title: 'EVENTOS ESPECIAIS',
    description: 'Modos de jogo exclusivos e eventos sazonais.',
  },
];

export default function About() {
  return (
    <section id="discover" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-omega-black via-omega-dark to-omega-black" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-omega-red/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-omega-orange/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-omega-red" />
            <span className="font-tech text-sm text-omega-red tracking-[0.3em]">INTEL</span>
            <div className="w-8 h-px bg-omega-red" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-omega-white mb-4">
            NOSSA <span className="text-omega-red">TRAJETÓRIA</span>
          </h2>
          <p className="text-omega-muted max-w-2xl mx-auto">
            O Omega Royale nasceu com um propósito claro: criar o ambiente competitivo mais 
            acessível, justo e envolvente do GTA, colocando a comunidade no centro de tudo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="card-tactical p-6 lg:p-8 tactical-corner">
              <h3 className="font-military text-2xl text-omega-white mb-4">
                O QUE É O <span className="text-omega-red">OMEGA ROYALE</span>?
              </h3>
              <p className="text-omega-muted leading-relaxed mb-6">
                Mais do que um servidor, o Omega Royale é um ecossistema competitivo onde todos 
                os tipos de jogadores têm espaço para competir, evoluir e fazer história. 
                Nossa plataforma oferece uma experiência única de PVP tático no universo do GTA V.
              </p>
              <p className="text-omega-muted leading-relaxed">
                Com sistemas anti-cheat avançados, servidores de alta performance e uma 
                equipe dedicada, garantimos partidas justas e emocionantes 24 horas por dia.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-tactical p-4 group hover:border-omega-red/40 transition-all"
                >
                  <feature.icon className="w-6 h-6 text-omega-red mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-omega-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-omega-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-omega-red/20 pointer-events-none" />
            <div className="absolute -inset-8 border border-omega-red/10 pointer-events-none" />
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-omega-red" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-omega-red" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-omega-red" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-omega-red" />

            <div className="card-tactical p-6 lg:p-8">
              <h3 className="font-tech text-lg text-omega-red tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-5 h-5" />
                ESTATÍSTICAS DO SERVIDOR
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-omega-gray/50 border border-omega-gray-light hover:border-omega-red/30 transition-all group"
                  >
                    <stat.icon className="w-5 h-5 text-omega-orange mb-2 group-hover:text-omega-red transition-colors" />
                    <div className="font-tech text-2xl lg:text-3xl text-omega-white">
                      <Counter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-[10px] text-omega-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="btn-tactical">
            LER MAIS SOBRE NÓS
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
