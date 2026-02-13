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
    color: 'omega-orange',
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
    color: 'omega-red',
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
    color: 'omega-red',
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
    color: 'omega-orange',
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
    color: 'omega-red',
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
    color: 'omega-orange',
  },
];

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export default function Calendar() {
  const [currentMonth] = useState('FEVEREIRO 2026');

  return (
    <section id="calendar" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-omega-dark" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-omega-red/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-omega-orange/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <CalendarIcon className="w-4 h-4 text-omega-red" />
            <span className="font-tech text-sm text-omega-red tracking-[0.3em]">EVENTOS</span>
            <CalendarIcon className="w-4 h-4 text-omega-red" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-omega-white mb-4">
            CALENDÁRIO DE <span className="text-omega-red">EVENTOS</span>
          </h2>
          <p className="text-omega-muted max-w-2xl mx-auto">
            Não perca nenhum evento! Fique por dentro de campeonatos, torneios e eventos especiais.
          </p>
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 text-omega-muted hover:text-omega-red transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h3 className="font-military text-2xl text-omega-white">{currentMonth}</h3>
          <button className="p-2 text-omega-muted hover:text-omega-red transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center py-2 text-xs font-semibold text-omega-muted tracking-wider"
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
                    ? 'border-omega-red bg-omega-red/10'
                    : event
                    ? 'border-omega-red/30 bg-omega-red/5'
                    : 'border-omega-gray-light bg-omega-gray/30'
                } hover:border-omega-red/50 transition-all cursor-pointer`}
              >
                <div className="flex flex-col h-full">
                  <span
                    className={`font-tech text-sm ${
                      isToday ? 'text-omega-red' : event ? 'text-omega-white' : 'text-omega-muted'
                    }`}
                  >
                    {day}
                  </span>
                  {event && (
                    <div className="mt-auto">
                      <event.icon className={`w-4 h-4 text-omega-red`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="font-military text-xl text-omega-white mb-6 flex items-center gap-3">
            <Flame className="w-5 h-5 text-omega-orange" />
            PRÓXIMOS EVENTOS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.slice(0, 6).map((event) => (
              <div
                key={event.id}
                className="card-tactical p-4 tactical-corner group hover:border-omega-red/40 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 bg-omega-red/10 border border-omega-red/30 rounded`}>
                    <event.icon className={`w-5 h-5 text-omega-red`} />
                  </div>
                  <div className="text-right">
                    <div className="font-tech text-lg text-omega-white">{event.date}</div>
                    <div className="text-xs text-omega-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-omega-white mb-2">{event.title}</h4>

                {/* Details */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-omega-muted">
                    <MapPin className="w-3 h-3" />
                    <span>{event.mode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-omega-muted">
                    <Users className="w-3 h-3" />
                    <span>{event.players}</span>
                  </div>
                  {event.prize !== '-' && (
                    <div className="flex items-center gap-2 text-omega-red">
                      <Trophy className="w-3 h-3" />
                      <span>{event.prize}</span>
                    </div>
                  )}
                </div>

                {/* Action */}
                <button className="w-full mt-4 py-2 text-xs font-semibold tracking-wider bg-omega-gray hover:bg-omega-red hover:text-white transition-all">
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

