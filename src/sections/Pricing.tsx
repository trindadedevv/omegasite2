import { Check, Star, Zap, Crown, Gem, Shield } from 'lucide-react';

const plans = [
  {
    name: 'RECRUTA',
    icon: Shield,
    price: null,
    duration: 'GRATUITO',
    description: 'Experiência básica para conhecer o servidor.',
    features: [
      'Acesso ao modo casual',
      'Chat global',
      'Estatísticas básicas',
      'Suporte via Discord',
    ],
    notIncluded: [
      'Modo ranqueado',
      'Lobbys premium',
      'Campeonatos',
    ],
    color: 'omega-muted',
    popular: false,
    buttonText: 'JOGAR GRÁTIS',
  },
  {
    name: 'SOLDADO',
    icon: Star,
    price: 13,
    duration: '7 DIAS',
    description: 'Todos os benefícios Premium por tempo limitado.',
    features: [
      'Acesso ao modo ranqueado',
      'Sala Premium no Discord',
      'Lobbys de alta performance',
      'Suporte prioritário',
    ],
    notIncluded: [
      'Campeonatos oficiais',
      'Edição de avatar/banner',
    ],
    color: 'omega-red',
    popular: false,
    buttonText: 'COMPRAR NA LOJA',
  },
  {
    name: 'ELITE',
    icon: Zap,
    price: 30,
    duration: '30 DIAS',
    description: 'Acesso completo ao modo ranqueado e campeonatos.',
    features: [
      'Acesso ao modo ranqueado',
      'Sala Premium no Discord',
      'Lobbys de alta performance',
      'Jogue campeonatos',
      'Requer participação em um Clã',
      'Estatísticas avançadas',
    ],
    notIncluded: [
      'Edição ilimitada de avatar',
    ],
    color: 'omega-orange',
    popular: true,
    buttonText: 'COMPRAR NA LOJA',
  },
  {
    name: 'COMANDANTE',
    icon: Crown,
    price: 50,
    duration: '30 DIAS',
    description: 'A experiência completa com bônus exclusivos.',
    features: [
      'Tudo do Elite incluso',
      'Acesso ao modo ranqueado',
      'Lobbys de alta performance',
      'Jogue campeonatos',
      'Edição ilimitada de avatar e banner',
      '+1 Caixa ativa no momento',
      'Tag exclusiva no jogo',
    ],
    notIncluded: [],
    color: 'omega-red',
    popular: false,
    buttonText: 'ADQUIRIR ELITE+',
  },
];

export default function Pricing() {
  return (
    <section id="shop" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-omega-black" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-omega-red/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gem className="w-4 h-4 text-omega-red" />
            <span className="font-tech text-sm text-omega-red tracking-[0.3em]">VIP</span>
            <Gem className="w-4 h-4 text-omega-red" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-omega-white mb-4">
            ESCOLHA SEU <span className="text-omega-red">PLANO</span>
          </h2>
          <p className="text-omega-muted max-w-2xl mx-auto">
            Desbloqueie o modo ranqueado e aproveite o melhor do Omega Royale. 
            Escolha o plano que melhor se adapta ao seu estilo de jogo.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-omega-orange text-omega-black text-xs font-bold px-4 py-1 tracking-wider">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div
                className={`card-tactical h-full p-6 tactical-corner transition-all duration-300 ${
                  plan.popular
                    ? 'border-omega-orange/50 shadow-lg shadow-omega-orange/10'
                    : 'hover:border-omega-red/30'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-omega-red/10 border border-omega-red/30`}
                  >
                    <plan.icon className={`w-6 h-6 text-omega-red`} />
                  </div>
                  <h3 className="font-military text-xl text-omega-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-omega-muted">{plan.duration}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <Gem className="w-5 h-5 text-omega-red" />
                      <span className="font-tech text-4xl text-omega-white">{plan.price}</span>
                      <span className="text-omega-muted text-sm">diamantes</span>
                    </div>
                  ) : (
                    <div className="font-tech text-4xl text-omega-white">GRÁTIS</div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-omega-muted text-center mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 text-omega-red mt-0.5 flex-shrink-0`} />
                      <span className="text-omega-white/90">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, fIndex) => (
                    <li
                      key={`not-${fIndex}`}
                      className="flex items-start gap-2 text-sm opacity-50"
                    >
                      <div className="w-4 h-4 border border-omega-muted rounded mt-0.5 flex-shrink-0" />
                      <span className="text-omega-muted line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-3 font-semibold tracking-wider transition-all ${
                    plan.popular
                      ? 'btn-tactical'
                      : 'border border-omega-gray-light text-omega-white hover:border-omega-red hover:text-omega-red'
                  }`}
                  style={
                    !plan.popular
                      ? { clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }
                      : undefined
                  }
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-omega-muted">
            Os diamantes podem ser adquiridos na loja. É necessário fazer parte de um Clã para acessar as filas ranqueadas.
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
