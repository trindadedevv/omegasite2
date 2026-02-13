import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Trophy, ChevronLeft, ChevronRight, Flame, Target, Zap } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Campeonato Solo',
    date: '15 FEV',
    time: '20:00',
    type: 'competition',
    prize: 'R$ 5.000',
    players: '64/128',
    mode: 'Battle Royale',
    icon: Trophy,
    color: 'cod-orange',
  },
  {
    id: 2,
    title: 'Evento 2x XP',
    date: '16 FEV',
    time: 'Todo dia',
    type: 'bonus',
    prize: '-',
    players: 'Ilimitado',
    mode: 'Todos os modos',
    icon: Zap,
    color: 'cod-green',
  },
  {
    id: 3,
    title: 'Guerra de Clãs',
    date: '17 FEV',
    time: '21:00',
    type: 'clan',
    prize: 'R$ 10.000',
    players: '8 Clãs',
    mode: 'Território',
    icon: Flame,
    color: 'cod-red',
  },
  {
    id: 4,
    title: 'Torneio Duos',
    date: '18 FEV',
    time: '19:00',
    type: 'competition',
    prize: 'R$ 3.000',
    players: '32/64',
    mode: 'Duo Battle',
    icon: Trophy,
    color: 'cod-orange',
  },
  {
    id: 5,
    title: 'Desafio Sniper',
    date: '19 FEV',
    time: '20:00',
    type: 'special',
    prize: 'Skin Exclusiva',
    players: '50/100',
    mode: 'Sniper Only',
    icon: Target,
    color: 'cod-green',
  },
  {
    id: 6,
    title: 'Campeonato Elite',
    date: '22 FEV',
    time: '19:00',
    type: 'competition',
    prize: 'R$ 15.000',
    players: '16/32',
    mode: 'Ranqueado',
    icon: Trophy,
    color: 'cod-orange',
  },
];

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export default function Calendar() {
  const [currentMonth] = useState('FEVEREIRO 2026');

  return (
    <section id="calendar" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cod-dark" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cod-green/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cod-orange/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <CalendarIcon className="w-4 h-4 text-cod-green" />
            <span className="font-tech text-sm text-cod-green tracking-[0.3em]">EVENTOS</span>
            <CalendarIcon className="w-4 h-4 text-cod-green" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-cod-white mb-4">
            CALENDÁRIO DE <span className="text-cod-green">EVENTOS</span>
          </h2>
          <p className="text-cod-muted max-w-2xl mx-auto">
            Não perca nenhum evento! Fique por dentro de campeonatos, torneios e eventos especiais.
          </p>
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 text-cod-muted hover:text-cod-green transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h3 className="font-military text-2xl text-cod-white">{currentMonth}</h3>
          <button className="p-2 text-cod-muted hover:text-cod-green transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center py-2 text-xs font-semibold text-cod-muted tracking-wider"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-12">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
            const event = events.find((e) => parseInt(e.date) === day);
            const isToday = day === 13;

            return (
              <div
                key={day}
                className={`aspect-square p-2 border ${
                  isToday
                    ? 'border-cod-green bg-cod-green/10'
                    : event
                    ? `border-${event.color}/30 bg-${event.color}/5`
                    : 'border-cod-gray-light bg-cod-gray/30'
                } hover:border-cod-green/50 transition-all cursor-pointer`}
              >
                <div className="flex flex-col h-full">
                  <span
                    className={`font-tech text-sm ${
                      isToday ? 'text-cod-green' : event ? 'text-cod-white' : 'text-cod-muted'
                    }`}
                  >
                    {day}
                  </span>
                  {event && (
                    <div className="mt-auto">
                      <event.icon className={`w-4 h-4 text-${event.color}`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="font-military text-xl text-cod-white mb-6 flex items-center gap-3">
            <Flame className="w-5 h-5 text-cod-orange" />
            PRÓXIMOS EVENTOS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.slice(0, 6).map((event) => (
              <div
                key={event.id}
                className="card-tactical p-4 tactical-corner group hover:border-cod-green/40 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 bg-${event.color}/10 border border-${event.color}/30 rounded`}>
                    <event.icon className={`w-5 h-5 text-${event.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="font-tech text-lg text-cod-white">{event.date}</div>
                    <div className="text-xs text-cod-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-cod-white mb-2">{event.title}</h4>

                {/* Details */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-cod-muted">
                    <MapPin className="w-3 h-3" />
                    <span>{event.mode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cod-muted">
                    <Users className="w-3 h-3" />
                    <span>{event.players}</span>
                  </div>
                  {event.prize !== '-' && (
                    <div className="flex items-center gap-2 text-cod-green">
                      <Trophy className="w-3 h-3" />
                      <span>{event.prize}</span>
                    </div>
                  )}
                </div>

                {/* Action */}
                <button className="w-full mt-4 py-2 text-xs font-semibold tracking-wider bg-cod-gray hover:bg-cod-green hover:text-cod-black text-cod-white transition-all">
                  INSCREVER-SE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
