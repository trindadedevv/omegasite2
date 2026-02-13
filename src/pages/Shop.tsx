import { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Search, 
  Gem, 
  TrendingUp, 
  Clock,
  Star,
  ChevronRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface ShopProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

const categories = [
  { id: 'all', name: 'TODOS', icon: Package },
  { id: 'boxes', name: 'CAIXAS', icon: Package },
  { id: 'skins', name: 'SKINS', icon: Sparkles },
  { id: 'boosts', name: 'BOOSTS', icon: TrendingUp },
  { id: 'premium', name: 'VIP', icon: Star },
];

const boxes = [
  {
    id: 1,
    name: 'Caixa Tática Elite',
    description: 'Contém skins raras e itens exclusivos de combate',
    price: 500,
    image: '📦',
    rarity: 'legendary',
    items: ['Skin AK-47 Dragão', 'Colete Tático', 'Máscara Ghost'],
    discount: null,
  },
  {
    id: 2,
    name: 'Caixa de Operações',
    description: 'Equipamentos especiais para missões táticas',
    price: 300,
    image: '🎯',
    rarity: 'epic',
    items: ['Skin M4A1', 'Capacete Night', 'Luvas Táticas'],
    discount: 10,
  },
  {
    id: 3,
    name: 'Caixa Inicial',
    description: 'Perfeita para quem está começando',
    price: 100,
    image: '🎁',
    rarity: 'rare',
    items: ['Skin Pistola', 'Bandana', 'Adesivos'],
    discount: null,
  },
  {
    id: 4,
    name: 'Caixa Lendária',
    description: 'As skins mais raras do servidor',
    price: 1000,
    image: '👑',
    rarity: 'mythic',
    items: ['Skin Exclusiva Omega', 'Mito do Servidor', 'Título Único'],
    discount: null,
  },
  {
    id: 5,
    name: 'Caixa de Evento',
    description: 'Edição limitada do evento atual',
    price: 250,
    image: '🎉',
    rarity: 'epic',
    items: ['Skin Evento', 'Emote Especial', 'Banner'],
    discount: 20,
    limited: true,
  },
  {
    id: 6,
    name: 'Caixa de Armas',
    description: 'Foque apenas em skins de armas',
    price: 400,
    image: '🔫',
    rarity: 'rare',
    items: ['5 Skins de Armas', 'Charme', 'Mira'],
    discount: null,
  },
];

const featuredItems = [
  {
    id: 101,
    name: 'Skin Omega Exclusiva',
    type: 'skin',
    price: 2000,
    rarity: 'mythic',
    image: '🔴',
    description: 'A skin mais rara do servidor. Apenas 100 existem.',
  },
  {
    id: 102,
    name: 'Boost XP 2x - 7 Dias',
    type: 'boost',
    price: 350,
    rarity: 'epic',
    image: '⚡',
    description: 'Dobre seus ganhos de XP por uma semana inteira.',
  },
  {
    id: 103,
    name: 'Pacote de Diamantes',
    type: 'currency',
    price: 50,
    rarity: 'common',
    image: '💎',
    description: '500 Diamantes para gastar na loja.',
  },
];

const rarityColors: Record<string, string> = {
  common: 'text-gray-400 border-gray-600',
  rare: 'text-blue-400 border-blue-600',
  epic: 'text-purple-400 border-purple-600',
  legendary: 'text-yellow-400 border-yellow-600',
  mythic: 'text-red-500 border-red-600',
};

const rarityNames: Record<string, string> = {
  common: 'COMUM',
  rare: 'RARO',
  epic: 'ÉPICO',
  legendary: 'LENDÁRIO',
  mythic: 'MÍTICO',
};

export default function Shop({ onNavigate }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div className="min-h-screen bg-omega-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-omega-dark/95 backdrop-blur-md border-b border-omega-red/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group"
            >
              <span className="font-military text-2xl text-omega-red group-hover:scale-110 transition-transform">Ω</span>
              <span className="font-military text-xl text-omega-white">
                OMEGA <span className="text-omega-red">ROYALE</span>
              </span>
            </button>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-omega-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-tactical w-full pl-10 pr-4 py-2"
                  placeholder="Buscar itens..."
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Balance */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-omega-gray rounded">
                <Gem className="w-5 h-5 text-omega-red" />
                <span className="font-tech text-omega-white">2,450</span>
              </div>

              {/* Cart */}
              <button className="relative p-2 text-omega-muted hover:text-omega-red transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-omega-red text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Back */}
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-omega-muted hover:text-omega-red transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-semibold">VOLTAR</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Banner */}
        <div className="relative mb-12 overflow-hidden">
          <div className="card-tactical p-8 tactical-corner bg-gradient-to-r from-omega-red/20 to-transparent">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-omega-red/20 text-omega-red text-xs font-bold rounded mb-4">
                  <Sparkles className="w-4 h-4" />
                  OFERTA ESPECIAL
                </div>
                <h1 className="font-military text-3xl lg:text-4xl text-omega-white mb-4">
                  CAIXA TÁTICA ELITE
                </h1>
                <p className="text-omega-muted mb-6 max-w-lg">
                  A caixa mais cobiçada do servidor. Chance de obter skins lendárias 
                  e itens exclusivos que só os melhores jogadores possuem.
                </p>
                <div className="flex items-center gap-4">
                  <button className="btn-tactical flex items-center gap-2">
                    <Gem className="w-5 h-5" />
                    500 DIAMANTES
                  </button>
                  <div className="flex items-center gap-2 text-omega-muted">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Restam 47 unidades</span>
                  </div>
                </div>
              </div>
              <div className="text-8xl lg:text-9xl">📦</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 font-semibold tracking-wider text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-omega-red text-white'
                  : 'bg-omega-gray text-omega-muted hover:text-omega-white'
              }`}
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Items */}
        <div className="mb-12">
          <h2 className="font-military text-2xl text-omega-white mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-omega-red" />
            DESTAQUES DA SEMANA
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="card-tactical p-6 tactical-corner group hover:border-omega-red/40 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{item.image}</span>
                  <span className={`px-2 py-1 text-xs font-bold border ${rarityColors[item.rarity]}`}>
                    {rarityNames[item.rarity]}
                  </span>
                </div>
                <h3 className="font-semibold text-omega-white mb-2">{item.name}</h3>
                <p className="text-sm text-omega-muted mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-omega-red">
                    <Gem className="w-4 h-4" />
                    <span className="font-tech">{item.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(item.id)}
                    className="px-4 py-2 bg-omega-gray hover:bg-omega-red text-white text-sm font-semibold transition-colors"
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Boxes */}
        <div>
          <h2 className="font-military text-2xl text-omega-white mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-omega-red" />
            CAIXAS DISPONÍVEIS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxes.map((box) => (
              <div key={box.id} className="card-tactical p-6 tactical-corner group hover:border-omega-red/40 transition-all">
                {/* Discount Badge */}
                {box.discount && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-omega-red text-white text-xs font-bold">
                    -{box.discount}%
                  </div>
                )}
                {box.limited && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-omega-orange text-white text-xs font-bold">
                    LIMITADO
                  </div>
                )}

                {/* Image & Rarity */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{box.image}</span>
                  <span className={`px-2 py-1 text-xs font-bold border ${rarityColors[box.rarity]}`}>
                    {rarityNames[box.rarity]}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-omega-white mb-2">{box.name}</h3>
                <p className="text-sm text-omega-muted mb-4">{box.description}</p>

                {/* Items Preview */}
                <div className="mb-4">
                  <p className="text-xs text-omega-muted mb-2">PODE CONTER:</p>
                  <div className="flex flex-wrap gap-1">
                    {box.items.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-omega-gray text-xs text-omega-white rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-omega-gray-light">
                  <div className="flex items-center gap-1">
                    <Gem className="w-5 h-5 text-omega-red" />
                    <span className="font-tech text-xl text-omega-white">
                      {box.discount 
                        ? Math.floor(box.price * (1 - box.discount / 100))
                        : box.price
                      }
                    </span>
                    {box.discount && (
                      <span className="text-sm text-omega-muted line-through">{box.price}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => addToCart(box.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-omega-red hover:bg-omega-red-light text-white text-sm font-semibold transition-colors"
                  >
                    COMPRAR
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card-tactical p-6 text-center">
            <Package className="w-8 h-8 text-omega-red mx-auto mb-3" />
            <h3 className="font-semibold text-omega-white mb-2">Entrega Imediata</h3>
            <p className="text-sm text-omega-muted">Itens entregues diretamente no seu inventário</p>
          </div>
          <div className="card-tactical p-6 text-center">
            <TrendingUp className="w-8 h-8 text-omega-red mx-auto mb-3" />
            <h3 className="font-semibold text-omega-white mb-2">Probabilidades</h3>
            <p className="text-sm text-omega-muted">Todas as chances de drop são públicas</p>
          </div>
          <div className="card-tactical p-6 text-center">
            <Star className="w-8 h-8 text-omega-red mx-auto mb-3" />
            <h3 className="font-semibold text-omega-white mb-2">Itens Exclusivos</h3>
            <p className="text-sm text-omega-muted">Skins únicas que não encontrará em outro lugar</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-omega-gray-light mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-military text-2xl text-omega-red">Ω</span>
              <span className="font-military text-lg text-omega-white">
                OMEGA <span className="text-omega-red">ROYALE</span>
              </span>
            </div>
            <p className="text-sm text-omega-muted">
              © 2026 Omega Royale. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
