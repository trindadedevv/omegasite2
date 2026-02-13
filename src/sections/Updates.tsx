import { useState } from 'react';
import { Calendar, Clock, ChevronRight, Tag, AlertCircle, Sparkles, Wrench, Shield } from 'lucide-react';

const updates = [
  {
    id: 1,
    version: 'v2.5.0',
    title: 'Nova Season: Operação Tempestade',
    date: '10 FEV 2026',
    type: 'major',
    icon: Sparkles,
    color: 'cod-orange',
    summary: 'Nova temporada com mapa expandido, armas e sistema de recompensas renovado.',
    changes: [
      'Novo mapa: Zona de Guerra Industrial',
      '5 novas armas táticas',
      'Sistema de Battle Pass renovado',
      'Melhorias no anti-cheat',
    ],
  },
  {
    id: 2,
    version: 'v2.4.2',
    title: 'Patch de Balanceamento',
    date: '05 FEV 2026',
    type: 'patch',
    icon: Wrench,
    color: 'cod-green',
    summary: 'Ajustes de balanceamento em armas e correções de bugs reportados.',
    changes: [
      'Nerf na sniper Barrett (dano reduzido 15%)',
      'Buff no SMG MP5 (precisão aumentada)',
      'Correção de bug no sistema de mira',
      'Otimização de performance',
    ],
  },
  {
    id: 3,
    version: 'v2.4.1',
    title: 'Atualização de Segurança',
    date: '01 FEV 2026',
    type: 'security',
    icon: Shield,
    color: 'cod-red',
    summary: 'Atualização importante de segurança e melhorias no sistema anti-cheat.',
    changes: [
      'Nova camada de proteção anti-cheat',
      'Detecção aprimorada de macros',
      'Sistema de reportes melhorado',
      'Banimentos em massa de cheaters',
    ],
  },
  {
    id: 4,
    version: 'v2.4.0',
    title: 'Novo Modo: Resgate Tático',
    date: '25 JAN 2026',
    type: 'feature',
    icon: Sparkles,
    color: 'cod-orange',
    summary: 'Novo modo de jogo focado em trabalho em equipe e estratégia.',
    changes: [
      'Modo Resgate Tático 5v5',
      'Novo sistema de classes',
      'Habilidades únicas por classe',
      'Recompensas exclusivas do modo',
    ],
  },
];

const typeLabels: Record<string, string> = {
  major: 'ATUALIZAÇÃO MAJOR',
  patch: 'PATCH',
  security: 'SEGURANÇA',
  feature: 'NOVO RECURSO',
};

export default function Updates() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="updates" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cod-black" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-cod-green/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-cod-orange/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-cod-green" />
            <span className="font-tech text-sm text-cod-green tracking-[0.3em]">CHANGELOG</span>
            <AlertCircle className="w-4 h-4 text-cod-green" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-cod-white mb-4">
            ATUALIZAÇÕES <span className="text-cod-green">RECENTES</span>
          </h2>
          <p className="text-cod-muted max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, melhorias e correções do COD Royale.
          </p>
        </div>

        {/* Updates List */}
        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update.id}
              className={`card-tactical overflow-hidden transition-all duration-300 ${
                expandedId === update.id ? 'border-cod-green/40' : ''
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedId(expandedId === update.id ? null : update.id)}
                className="w-full p-6 flex items-center gap-4 hover:bg-cod-gray/30 transition-colors"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center bg-${update.color}/10 border border-${update.color}/30 rounded-lg`}>
                  <update.icon className={`w-6 h-6 text-${update.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 bg-${update.color}/10 text-${update.color} text-[10px] font-bold tracking-wider rounded`}>
                      <Tag className="w-3 h-3" />
                      {typeLabels[update.type]}
                    </span>
                    <span className="font-tech text-sm text-cod-muted">{update.version}</span>
                  </div>
                  <h3 className="font-military text-lg text-cod-white">{update.title}</h3>
                </div>

                {/* Date & Arrow */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 text-cod-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-tech">{update.date}</span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-cod-muted transition-transform ${
                      expandedId === update.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === update.id && (
                <div className="px-6 pb-6 border-t border-cod-gray-light/50">
                  <div className="pt-4">
                    <p className="text-cod-muted mb-4">{update.summary}</p>
                    
                    <h4 className="font-semibold text-cod-white text-sm mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cod-green" />
                      MUDANÇAS
                    </h4>
                    
                    <ul className="space-y-2">
                      {update.changes.map((change, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-cod-white/90"
                        >
                          <div className="w-1.5 h-1.5 bg-cod-green rounded-full mt-2 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-cod-green hover:text-cod-white transition-colors font-semibold tracking-wider">
            VER TODAS AS ATUALIZAÇÕES
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
