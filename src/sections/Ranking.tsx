import { useState } from 'react';
import { Trophy, Medal, Target, Users, TrendingUp, Star, ChevronRight } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'xX_SniperElite_Xx', clan: 'GHOST', kd: '4.2', wins: 1567, points: 45230 },
  { rank: 2, name: 'TacticalStorm', clan: 'NAVY', kd: '3.8', wins: 1423, points: 41890 },
  { rank: 3, name: 'ShadowHunter', clan: 'SPEC', kd: '3.5', wins: 1389, points: 39560 },
  { rank: 4, name: 'NightWolf', clan: 'GHOST', kd: '3.2', wins: 1256, points: 37210 },
  { rank: 5, name: 'ViperStrike', clan: 'DELTA', kd: '3.0', wins: 1189, points: 35480 },
  { rank: 6, name: 'RapidFire', clan: 'NAVY', kd: '2.9', wins: 1123, points: 33120 },
  { rank: 7, name: 'GhostRecon', clan: 'SPEC', kd: '2.7', wins: 1089, points: 31890 },
  { rank: 8, name: 'IronSight', clan: 'GHOST', kd: '2.6', wins: 1023, points: 29670 },
  { rank: 9, name: 'DeadEye', clan: 'DELTA', kd: '2.5', wins: 987, points: 28450 },
  { rank: 10, name: 'WarMachine', clan: 'NAVY', kd: '2.4', wins: 945, points: 27130 },
];

const clansData = [
  { rank: 1, name: 'GHOST', tag: '[GST]', members: 47, wins: 5234, points: 156780 },
  { rank: 2, name: 'NAVY', tag: '[NVY]', members: 52, wins: 4890, points: 142350 },
  { rank: 3, name: 'SPEC', tag: '[SPC]', members: 38, wins: 4234, points: 128940 },
  { rank: 4, name: 'DELTA', tag: '[DLT]', members: 41, wins: 3890, points: 115620 },
  { rank: 5, name: 'ALPHA', tag: '[ALP]', members: 45, wins: 3456, points: 102340 },
];

const tabs = [
  { id: 'players', label: 'JOGADORES', icon: Target },
  { id: 'clans', label: 'CLÃS', icon: Users },
];

function getRankIcon(rank: number) {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
  return <span className="font-tech text-cod-muted">#{rank}</span>;
}

function getRankStyle(rank: number) {
  if (rank === 1) return 'bg-yellow-400/10 border-yellow-400/30';
  if (rank === 2) return 'bg-gray-300/10 border-gray-300/30';
  if (rank === 3) return 'bg-amber-600/10 border-amber-600/30';
  return 'bg-cod-gray/50 border-cod-gray-light';
}

export default function Ranking() {
  const [activeTab, setActiveTab] = useState('players');

  return (
    <section id="ranking" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cod-dark" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cod-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cod-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-cod-green" />
            <span className="font-tech text-sm text-cod-green tracking-[0.3em]">LEADERBOARD</span>
            <Trophy className="w-4 h-4 text-cod-green" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-cod-white mb-4">
            RANKING <span className="text-cod-green">COMPETITIVO</span>
          </h2>
          <p className="text-cod-muted max-w-2xl mx-auto">
            Os melhores jogadores e clãs do COD Royale. Suba no ranking e prove seu valor no campo de batalha.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-semibold tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-cod-green text-cod-black'
                  : 'bg-cod-gray text-cod-muted hover:text-cod-white'
              }`}
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="card-tactical overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-cod-gray/80 border-b border-cod-gray-light text-xs font-semibold text-cod-muted tracking-wider">
            <div className="col-span-1 text-center">RANK</div>
            <div className="col-span-4">{activeTab === 'players' ? 'JOGADOR' : 'CLÃ'}</div>
            {activeTab === 'players' ? (
              <>
                <div className="col-span-2 text-center">CLÃ</div>
                <div className="col-span-2 text-center">K/D</div>
                <div className="col-span-2 text-center">VITÓRIAS</div>
              </>
            ) : (
              <>
                <div className="col-span-2 text-center">TAG</div>
                <div className="col-span-2 text-center">MEMBROS</div>
                <div className="col-span-2 text-center">VITÓRIAS</div>
              </>
            )}
            <div className="col-span-1 text-right">PTS</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-cod-gray-light/50">
            {(activeTab === 'players' ? leaderboardData : clansData).map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-cod-gray/30 transition-all ${
                  index < 3 ? getRankStyle(item.rank) : ''
                }`}
              >
                <div className="col-span-1 flex justify-center">
                  {getRankIcon(item.rank)}
                </div>
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cod-gray-light rounded flex items-center justify-center">
                      <Star className="w-4 h-4 text-cod-muted" />
                    </div>
                    <span className="font-semibold text-cod-white">{item.name}</span>
                  </div>
                </div>
                {'clan' in item ? (
                  <div className="col-span-2 text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-cod-green/10 text-cod-green text-xs font-semibold rounded">
                      {item.clan}
                    </span>
                  </div>
                ) : (
                  <div className="col-span-2 text-center">
                    <span className="text-cod-muted font-tech">{item.tag}</span>
                  </div>
                )}
                <div className="col-span-2 text-center font-tech text-cod-white">
                  {'kd' in item ? item.kd : item.members}
                </div>
                <div className="col-span-2 text-center font-tech text-cod-white">
                  {item.wins.toLocaleString()}
                </div>
                <div className="col-span-1 text-right">
                  <span className="font-tech text-cod-green">{item.points.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-cod-green hover:text-cod-white transition-colors font-semibold tracking-wider">
            VER RANKING COMPLETO
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="card-tactical p-6 text-center tactical-corner">
            <TrendingUp className="w-8 h-8 text-cod-green mx-auto mb-3" />
            <div className="font-tech text-3xl text-cod-white mb-1">2.4M+</div>
            <div className="text-xs text-cod-muted uppercase tracking-wider">Partidas Jogadas</div>
          </div>
          <div className="card-tactical p-6 text-center tactical-corner">
            <Users className="w-8 h-8 text-cod-orange mx-auto mb-3" />
            <div className="font-tech text-3xl text-cod-white mb-1">150K+</div>
            <div className="text-xs text-cod-muted uppercase tracking-wider">Jogadores Ativos</div>
          </div>
          <div className="card-tactical p-6 text-center tactical-corner">
            <Trophy className="w-8 h-8 text-cod-red mx-auto mb-3" />
            <div className="font-tech text-3xl text-cod-white mb-1">R$ 50K</div>
            <div className="text-xs text-cod-muted uppercase tracking-wider">Em Prêmios/Mês</div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
