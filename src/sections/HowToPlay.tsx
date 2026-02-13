import { Gamepad2, Download, Rocket, ExternalLink, Check, ShoppingBag } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Gamepad2,
    title: 'ADQUIRA O GTA V',
    description: 'Compre o Grand Theft Auto V na Steam ou Epic Games. Você precisa ter o jogo original instalado para jogar no FiveM.',
    buttons: [
      { label: 'Steam', icon: ShoppingBag, href: '#', primary: false },
      { label: 'Epic', icon: ExternalLink, href: '#', primary: false },
    ],
    color: 'omega-red',
  },
  {
    number: '02',
    icon: Download,
    title: 'INSTALE O FIVEM',
    description: 'Baixe e instale o FiveM, a plataforma de modificação que permite jogar em servidores customizados como o Omega Royale.',
    buttons: [
      { label: 'INSTALE O FIVEM', icon: Download, href: 'https://fivem.net', primary: true },
    ],
    color: 'omega-orange',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'CONECTE-SE AO OMEGA',
    description: 'Abra o FiveM, pesquise por "Omega Royale" na lista de servidores ou clique no botão abaixo para conectar diretamente.',
    buttons: [
      { label: 'JOGAR AGORA', icon: Rocket, href: '#', primary: true },
    ],
    color: 'omega-red',
  },
];

const requirements = [
  'Windows 10/11 64-bit',
  'GTA V original (Steam/Epic/Rockstar)',
  'Conexão estável com internet',
  'Microfone para comunicação',
  'Discord instalado',
];

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-omega-dark" />
      <div className="absolute inset-0 tactical-grid opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-omega-red/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-omega-orange/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-omega-orange" />
            <span className="font-tech text-sm text-omega-orange tracking-[0.3em]">TUTORIAL</span>
            <div className="w-8 h-px bg-omega-orange" />
          </div>
          <h2 className="font-military text-4xl lg:text-5xl text-omega-white mb-4">
            COMO <span className="text-omega-orange">JOGAR</span>
          </h2>
          <p className="text-omega-muted max-w-2xl mx-auto">
            Siga os passos abaixo para começar sua jornada no Omega Royale. 
            É rápido, fácil e gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Card */}
              <div className="card-tactical p-6 lg:p-8 h-full tactical-corner hover:border-omega-red/40 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -right-2 font-military text-6xl text-omega-gray-light/30 select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 bg-omega-red/10 border border-omega-red/30 rounded-lg`}>
                  <step.icon className={`w-7 h-7 text-omega-red`} />
                </div>

                {/* Content */}
                <h3 className="font-military text-xl text-omega-white mb-3">
                  {step.title}
                </h3>
                <p className="text-omega-muted text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {step.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.href}
                      target={button.href.startsWith('http') ? '_blank' : undefined}
                      rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wider transition-all ${
                        button.primary
                          ? 'bg-omega-red text-white hover:bg-omega-red-light'
                          : 'border border-omega-gray-light text-omega-white hover:border-omega-red hover:text-omega-red'
                      }`}
                      style={{
                        clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
                      }}
                    >
                      <button.icon className="w-4 h-4" />
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-omega-gray-light">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-omega-red rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Requirements & Video Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="card-tactical p-6 lg:p-8">
            <h3 className="font-military text-xl text-omega-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-omega-red" />
              REQUISITOS DO SISTEMA
            </h3>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-omega-muted group"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-omega-red/10 border border-omega-red/30 rounded">
                    <Check className="w-3 h-3 text-omega-red" />
                  </div>
                  <span className="group-hover:text-omega-white transition-colors">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Tutorial Placeholder */}
          <div className="card-tactical p-6 lg:p-8">
            <h3 className="font-military text-xl text-omega-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-omega-orange" />
              VÍDEO TUTORIAL
            </h3>
            <div className="relative aspect-video bg-omega-gray border border-omega-gray-light rounded overflow-hidden group cursor-pointer">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-omega-black/50 group-hover:bg-omega-black/30 transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-omega-red/90 rounded-full group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 tactical-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-tech text-omega-muted tracking-wider">ASSISTIR TUTORIAL</span>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-omega-red" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-omega-red" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-omega-red" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-omega-red" />
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mt-24" />
    </section>
  );
}
