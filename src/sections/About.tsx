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
      <div className="absolute inset-0 bg-gradient-to-b from-cod-black via-cod-dark to-cod-black" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cod-green/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cod-orange/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-cod-green" />
            <span className="font-tech text-sm text-cod-green tracking-[0.3em]">INTEL</span>
            <div className="w-8 h-px bg-cod-green" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-cod-white mb-4">
            NOSSA <span className="text-cod-green">TRAJETÓRIA</span>
          </h2>
          <p className="text-cod-muted max-w-2xl mx-auto">
            O COD Royale nasceu com um propósito claro: criar o ambiente competitivo mais 
            acessível, justo e envolvente do GTA, colocando a comunidade no centro de tudo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="card-tactical p-6 lg:p-8 tactical-corner">
              <h3 className="font-military text-2xl text-cod-white mb-4">
                O QUE É O <span className="text-cod-green">COD ROYALE</span>?
              </h3>
              <p className="text-cod-muted leading-relaxed mb-6">
                Mais do que um servidor, o COD Royale é um ecossistema competitivo onde todos 
                os tipos de jogadores têm espaço para competir, evoluir e fazer história. 
                Nossa plataforma oferece uma experiência única de PVP tático no universo do GTA V.
              </p>
              <p className="text-cod-muted leading-relaxed">
                Com sistemas anti-cheat avançados, servidores de alta performance e uma 
                equipe dedicada, garantimos partidas justas e emocionantes 24 horas por dia.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-tactical p-4 group hover:border-cod-green/40 transition-all"
                >
                  <feature.icon className="w-6 h-6 text-cod-green mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-cod-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-cod-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-cod-green/20 pointer-events-none" />
            <div className="absolute -inset-8 border border-cod-green/10 pointer-events-none" />
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cod-green" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cod-green" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-cod-green" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cod-green" />

            <div className="card-tactical p-6 lg:p-8">
              <h3 className="font-tech text-lg text-cod-green tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-5 h-5" />
                ESTATÍSTICAS DO SERVIDOR
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-cod-gray/50 border border-cod-gray-light hover:border-cod-green/30 transition-all group"
                  >
                    <stat.icon className="w-5 h-5 text-cod-orange mb-2 group-hover:text-cod-green transition-colors" />
                    <div className="font-tech text-2xl lg:text-3xl text-cod-white">
                      <Counter
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-[10px] text-cod-muted uppercase tracking-wider mt-1">
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
