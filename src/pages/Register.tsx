// src/pages/Dashboard.tsx
import { useState } from 'react';
import { 
  User, Shield, Swords, Trophy, Calendar, Package, 
  Settings, LogOut, ChevronRight, Star, Target, 
  Crosshair, Award, Clock, TrendingUp, Home,
  ShoppingBag, Bell
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

const sidebarItems = [
  { id: 'overview', icon: Shield, label: 'Visão Geral' },
  { id: 'matches', icon: Swords, label: 'Partidas' },
  { id: 'stats', icon: TrendingUp, label: 'Estatísticas' },
  { id: 'inventory', icon: Package, label: 'Inventário' },
  { id: 'achievements', icon: Trophy, label: 'Conquistas' },
  { id: 'settings', icon: Settings, label: 'Configurações' },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-omega-black flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-omega-black/95 backdrop-blur-md border-b border-omega-red/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
              <span className="font-military text-3xl text-omega-red group-hover:scale-110 transition-transform duration-300 inline-block">
                Ω
              </span>
              <div className="flex flex-col">
                <span className="font-military text-xl lg:text-2xl text-omega-white tracking-wider">
                  OMEGA<span className="text-omega-red">ROYALE</span>
                </span>
              </div>
            </button>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('shop')}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-omega-muted hover:text-omega-white transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="font-tech text-sm">LOJA</span>
              </button>

              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-omega-gray rounded-full border border-omega-gray-light">
                <Star className="w-4 h-4 text-omega-yellow fill-omega-yellow" />
                <span className="font-bold text-omega-white font-military">2.450</span>
                <span className="text-xs text-omega-muted font-tech">créditos</span>
              </div>
              
              <button className="p-2 text-omega-muted hover:text-omega-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-omega-red rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-omega-gray-light">
                <div className="text-right hidden md:block">
                  <div className="font-bold text-omega-white font-military">Operador</div>
                  <div className="text-xs text-omega-red font-tech">● Online</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-omega-red flex items-center justify-center text-white font-bold font-military">
                  O
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-7xl mx-auto w-full pt-20 px-6 gap-8">
        
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block pt-8">
          <div className="card-tactical rounded-2xl p-4 sticky top-24">
            <div className="flex items-center gap-3 p-4 bg-omega-gray rounded-xl mb-6 tactical-corner">
              <div className="w-12 h-12 rounded-full bg-omega-red flex items-center justify-center text-white font-bold text-lg font-military">
                O
              </div>
              <div>
                <div className="font-bold text-omega-white font-military">Operador</div>
                <div className="text-xs text-omega-red font-tech">Recruta</div>
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-tech text-left ${
                    activeSection === item.id
                      ? 'bg-omega-red text-white'
                      : 'text-omega-muted hover:text-omega-white hover:bg-omega-gray/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-omega-gray-light">
              <button 
                onClick={() => onNavigate('home')}
                className="w-full flex items-center gap-3 px-4 py-3 text-omega-muted hover:text-omega-red transition-colors font-tech"
              >
                <LogOut className="w-5 h-5" />
                <span>Desconectar</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-8">
          
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Welcome Banner */}
              <div className="card-tactical rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-omega-red/10 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="relative z-10">
                  <h1 className="font-military text-3xl text-omega-white mb-2 tracking-wider">
                    BEM-VINDO A UNIDADE, <span className="text-omega-red">OPERADOR</span>
                  </h1>
                  <p className="text-omega-muted font-tech">
                    Status: <span className="text-green-400">Ativo</span> | Próxima operação: Em breve
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-tactical rounded-2xl p-6 tactical-corner group hover:border-omega-red/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-omega-red/20 flex items-center justify-center text-omega-red group-hover:scale-110 transition-transform">
                      <Crosshair className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-omega-gray rounded-full text-xs font-bold text-omega-muted font-tech">K/D</span>
                  </div>
                  <h3 className="font-military text-3xl text-omega-white mb-1">1.84</h3>
                  <p className="text-sm text-omega-muted font-tech">Taxa de eliminação</p>
                </div>

                <div className="card-tactical rounded-2xl p-6 tactical-corner group hover:border-omega-red/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-omega-orange/20 flex items-center justify-center text-omega-orange group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-omega-gray rounded-full text-xs font-bold text-omega-muted font-tech">PRECISÃO</span>
                  </div>
                  <h3 className="font-military text-3xl text-omega-white mb-1">68%</h3>
                  <p className="text-sm text-omega-muted font-tech">Taxa de acerto</p>
                </div>

                <div className="card-tactical rounded-2xl p-6 tactical-corner group hover:border-omega-red/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-omega-yellow/20 flex items-center justify-center text-omega-yellow group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-omega-gray rounded-full text-xs font-bold text-omega-muted font-tech">VITÓRIAS</span>
                  </div>
                  <h3 className="font-military text-3xl text-omega-white mb-1">127</h3>
                  <p className="text-sm text-omega-muted font-tech">Operações bem-sucedidas</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-tactical rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-military text-xl text-omega-white tracking-wider">ATIVIDADE RECENTE</h3>
                  <button className="text-omega-red hover:text-omega-red-light text-sm font-tech flex items-center gap-2">
                    Ver histórico <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { map: 'Banco', mode: 'R6 Siege', result: 'Vitória', score: '4-2', time: '2h atrás' },
                    { map: 'Erangel', mode: 'Battle Royale', result: 'Top 3', score: '8 kills', time: '5h atrás' },
                    { map: 'Fronteira', mode: 'R6 Siege', result: 'Derrota', score: '2-4', time: '1d atrás' },
                  ].map((match, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-omega-gray rounded-xl border border-omega-gray-light hover:border-omega-red/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-12 rounded-full ${
                          match.result === 'Vitória' ? 'bg-green-500' : 
                          match.result === 'Top 3' ? 'bg-omega-yellow' : 'bg-red-500'
                        }`} />
                        <div>
                          <div className="font-bold text-omega-white font-military">{match.map}</div>
                          <div className="text-sm text-omega-muted font-tech">{match.mode}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold font-military ${
                          match.result === 'Vitória' ? 'text-green-400' : 
                          match.result === 'Top 3' ? 'text-omega-yellow' : 'text-red-400'
                        }`}>{match.result}</div>
                        <div className="text-sm text-omega-muted font-tech">{match.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other Sections */}
          {activeSection !== 'overview' && (
            <div className="card-tactical rounded-2xl p-12 text-center animate-fade-in">
              <div className="w-24 h-24 rounded-full bg-omega-gray flex items-center justify-center mx-auto mb-6">
                {(() => {
                  const Icon = sidebarItems.find(i => i.id === activeSection)?.icon || Shield;
                  return <Icon className="w-12 h-12 text-omega-red" />;
                })()}
              </div>
              <h2 className="font-military text-2xl text-omega-white mb-2">
                {sidebarItems.find(i => i.id === activeSection)?.label.toUpperCase()}
              </h2>
              <p className="text-omega-muted font-tech">Seção em desenvolvimento.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}