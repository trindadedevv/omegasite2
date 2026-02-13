// src/pages/Register.tsx
import { useState, useEffect } from 'react';
import { 
  Shield, Target, Swords, ChevronLeft, CheckCircle, 
  User, ChevronRight, Eye, EyeOff 
} from 'lucide-react';

interface RegisterProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

const steps = [
  { id: 1, icon: Shield, label: 'Verificação', desc: 'Discord' },
  { id: 2, icon: Target, label: 'Termos', desc: 'Regras' },
  { id: 3, icon: Swords, label: 'Perfil', desc: 'Configurar' },
];

export default function Register({ onNavigate }: RegisterProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [discordConnected, setDiscordConnected] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsRead, setTermsRead] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '' as 'male' | 'female' | '',
    source: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Verifica se todos os termos foram aceitos
  useEffect(() => {
    const checkboxes = document.querySelectorAll('.term-checkbox');
    if (checkboxes.length > 0) {
      const allChecked = Array.from(checkboxes).every((cb: any) => cb.checked);
      setAcceptedTerms(allChecked);
    }
  }, [termsRead]);

  const handleDiscordConnect = () => {
    setTimeout(() => {
      setDiscordConnected(true);
      setTimeout(() => setCurrentStep(2), 1000);
    }, 1500);
  };

  const checkAllTerms = () => {
    const checkboxes = document.querySelectorAll('.term-checkbox');
    const allChecked = Array.from(checkboxes).every((cb: any) => cb.checked);
    setAcceptedTerms(allChecked);
  };

  const handleCreateAccount = () => {
    if (!formData.username || !formData.gender || !formData.source) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    onNavigate('dashboard');
  };

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const acceptTermsFromModal = () => {
    setTermsRead(true);
    setShowTermsModal(false);
    // Marca todos os checkboxes
    document.querySelectorAll('.term-checkbox').forEach((cb: any) => {
      cb.checked = true;
    });
    setAcceptedTerms(true);
  };

  return (
    <div className="min-h-screen bg-omega-black flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-omega-red/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-omega-red/50 to-transparent" />
      
      {/* Header */}
      <header className="relative z-10 bg-omega-black/95 backdrop-blur-md border-b border-omega-red/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
              <span className="font-military text-3xl text-omega-red group-hover:scale-110 transition-transform duration-300 inline-block">
                Ω
              </span>
              <div className="flex flex-col">
                <span className="font-military text-xl text-omega-white tracking-wider">
                  OMEGA<span className="text-omega-red">ROYALE</span>
                </span>
              </div>
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="text-omega-muted hover:text-omega-white transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 py-12 relative z-10">
        <div className="w-full max-w-5xl">
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center mb-2 transition-all duration-300 ${
                      currentStep === step.id 
                        ? 'bg-omega-red border-omega-red text-omega-white shadow-lg shadow-omega-red/50' 
                        : currentStep > step.id 
                          ? 'bg-omega-gray border-omega-red text-omega-red' 
                          : 'bg-omega-gray border-omega-gray-light text-omega-muted'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className={`font-semibold text-sm ${currentStep >= step.id ? 'text-omega-red' : 'text-omega-muted'}`}>
                      {step.label}
                    </span>
                    <span className="text-xs text-omega-muted font-tech">{step.desc}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 mb-6 transition-colors ${
                      currentStep > step.id ? 'bg-omega-red' : 'bg-omega-gray-light'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="card-tactical rounded-2xl p-8 md:p-12 relative max-w-3xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-omega-red to-transparent" />
            
            {/* Step 1: Discord */}
            {currentStep === 1 && (
              <div className="animate-fade-in text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-[#5865F2] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#5865F2]/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] to-[#4752C4]" />
                  <svg className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <div className="absolute inset-0 animate-pulse-glow rounded-2xl" />
                </div>
                
                <h2 className="font-military text-3xl text-omega-white mb-4 tracking-wider">
                  VERIFICAÇÃO DE SEGURANÇA
                </h2>
                <p className="text-omega-muted text-lg mb-8 font-tech">
                  Conecte sua conta Discord para verificação de identidade e acesso aos canais oficiais.
                </p>

                {!discordConnected ? (
                  <button 
                    onClick={handleDiscordConnect}
                    className="relative overflow-hidden bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span>Conectar com Discord</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  </button>
                ) : (
                  <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl animate-fade-in">
                    <div className="flex items-center justify-center gap-3 text-green-400 mb-2">
                      <CheckCircle className="w-8 h-8" />
                      <span className="font-bold text-lg font-military">CONEXÃO ESTABELECIDA</span>
                    </div>
                    <p className="text-omega-muted font-tech">Operador#1234 verificado</p>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-omega-gray-light">
                  <p className="text-sm text-omega-muted font-tech flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-omega-red" />
                    Verificação obrigatória para todos os operadores
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Terms */}
            {currentStep === 2 && (
              <div className="animate-fade-in max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="font-military text-2xl text-omega-white mb-2 tracking-wider">
                    CÓDIGO DE CONDUTA
                  </h2>
                  <p className="text-omega-muted font-tech">
                    Leia e aceite as diretrizes da unidade Omega Royale.
                  </p>
                </div>

                <div className="bg-omega-dark rounded-xl p-6 mb-6 border border-omega-gray-light">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-military text-lg text-omega-white">Termos de Serviço</h3>
                    <button 
                      onClick={() => setShowTermsModal(true)}
                      className="text-omega-red hover:text-omega-red-light text-sm font-semibold flex items-center gap-2 transition-colors"
                    >
                      Ler completo
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: 'fa-handshake', text: 'Comprometo-me a seguir as regras da comunidade' },
                      { icon: 'fa-user-shield', text: 'Não utilizarei cheats, hacks ou modificações' },
                      { icon: 'fa-comments', text: 'Manterei respeito com todos os operadores' },
                      { icon: 'fa-gavel', text: 'Aceito as penalidades por violação das regras' },
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center justify-between p-4 bg-omega-gray rounded-lg border border-omega-gray-light cursor-pointer hover:border-omega-red transition-all group tactical-corner">
                        <div className="flex items-center gap-3">
                          <i className={`fas ${item.icon} text-omega-red`} />
                          <span className="font-medium text-omega-white group-hover:text-omega-red transition-colors text-sm">{item.text}</span>
                        </div>
                        <input 
                          type="checkbox" 
                          className="term-checkbox w-5 h-5 rounded border-2 border-omega-gray-light appearance-none checked:bg-omega-red checked:border-omega-red cursor-pointer relative transition-all"
                          onChange={checkAllTerms}
                        />
                      </label>
                    ))}
                  </div>

                  {!termsRead && (
                    <div className="mt-4 p-3 bg-omega-red/10 border border-omega-red/30 rounded-lg">
                      <p className="text-sm text-omega-red font-tech text-center">
                        <i className="fas fa-exclamation-triangle mr-2"></i>
                        Você deve ler os termos completos antes de prosseguir
                      </p>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setCurrentStep(3)}
                  disabled={!acceptedTerms || !termsRead}
                  className={`w-full py-4 font-bold rounded-xl transition-all font-military tracking-wider ${
                    acceptedTerms && termsRead
                      ? 'btn-tactical' 
                      : 'bg-omega-gray text-omega-muted cursor-not-allowed'
                  }`}
                >
                  {!termsRead ? 'LEIA OS TERMOS PARA PROSSEGUIR' : 
                   !acceptedTerms ? 'ACEITE TODOS OS TERMOS' : 'PROSSEGUIR'}
                </button>
              </div>
            )}

            {/* Step 3: Profile */}
            {currentStep === 3 && (
              <div className="animate-fade-in max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="font-military text-2xl text-omega-white mb-2 tracking-wider">
                    CONFIGURAÇÃO DE PERFIL
                  </h2>
                  <p className="text-omega-muted font-tech">Complete seu registro para ingressar na unidade.</p>
                </div>

                <div className="space-y-6">
                  {/* Username */}
                  <div>
                    <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                      Nome de Operador *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-omega-muted" />
                      <input 
                        type="text" 
                        value={formData.username}
                        onChange={(e) => updateForm('username', e.target.value)}
                        placeholder="Ex: ShadowOps" 
                        className="input-tactical w-full pl-10 pr-4 py-3"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      placeholder="seu@email.com" 
                      className="input-tactical w-full px-4 py-3"
                    />
                  </div>

                  {/* Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                        Senha *
                      </label>
                      <div className="relative">
                        <input 
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => updateForm('password', e.target.value)}
                          placeholder="••••••••" 
                          className="input-tactical w-full px-4 py-3 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-omega-muted hover:text-omega-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                        Confirmar Senha *
                      </label>
                      <div className="relative">
                        <input 
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => updateForm('confirmPassword', e.target.value)}
                          placeholder="••••••••" 
                          className="input-tactical w-full px-4 py-3 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-omega-muted hover:text-omega-white transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-3">
                      Gênero do Operador *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'female', icon: 'fa-venus', label: 'Feminino', color: 'text-pink-500' },
                        { value: 'male', icon: 'fa-mars', label: 'Masculino', color: 'text-blue-500' },
                      ].map((gender) => (
                        <button
                          key={gender.value}
                          type="button"
                          onClick={() => updateForm('gender', gender.value)}
                          className={`p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3 ${
                            formData.gender === gender.value
                              ? 'border-omega-red bg-omega-red/10'
                              : 'border-omega-gray-light bg-omega-dark hover:border-omega-red/50'
                          }`}
                        >
                          <i className={`fas ${gender.icon} ${gender.color} text-xl`} />
                          <span className="font-semibold text-omega-white">{gender.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Source */}
                  <div>
                    <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-3">
                      Como conheceu a Omega? *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { value: 'amigo', icon: 'fa-user-friends', label: 'Indicação' },
                        { value: 'youtube', icon: 'fa-youtube', label: 'YouTube', color: 'text-red-500' },
                        { value: 'tiktok', icon: 'fa-tiktok', label: 'TikTok' },
                        { value: 'instagram', icon: 'fa-instagram', label: 'Instagram', color: 'text-pink-500' },
                        { value: 'discord', icon: 'fa-discord', label: 'Discord', color: 'text-[#5865F2]' },
                        { value: 'outro', icon: 'fa-globe', label: 'Outro' },
                      ].map((source) => (
                        <button
                          key={source.value}
                          type="button"
                          onClick={() => updateForm('source', source.value)}
                          className={`p-3 rounded-xl border-2 transition-all text-center ${
                            formData.source === source.value
                              ? 'border-omega-red bg-omega-red/10'
                              : 'border-omega-gray-light bg-omega-dark hover:border-omega-red/50'
                          }`}
                        >
                          <i className={`fab fas ${source.icon} ${source.color || 'text-omega-red'} mb-1 block text-lg`} />
                          <span className="font-medium text-xs text-omega-white">{source.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleCreateAccount}
                    className="w-full py-4 btn-tactical font-military tracking-wider text-lg"
                  >
                    <Swords className="w-5 h-5 inline mr-2" />
                    INGRESSAR NA UNIDADE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="card-tactical rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-omega-red/30 shadow-2xl shadow-omega-red/20">
            <div className="p-6 border-b border-omega-gray-light flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-omega-red rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-military text-xl text-omega-white">Código de Conduta Omega</h2>
                  <p className="text-sm text-omega-muted font-tech">Última atualização: 13/02/2025</p>
                </div>
              </div>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="w-10 h-10 rounded-full bg-omega-gray hover:bg-omega-gray-light flex items-center justify-center transition-colors"
              >
                <i className="fas fa-times text-omega-muted" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 terms-scroll">
              <div className="space-y-8 text-omega-muted font-tech">
                <section>
                  <h3 className="text-omega-red font-military text-xl mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-omega-red/20 flex items-center justify-center text-sm">01</span>
                    Missão
                  </h3>
                  <p className="leading-relaxed mb-4">
                    A Omega Royale é uma unidade de elite dedicada ao combate tático em Rainbow Six Siege e Battle Royale. 
                    Nossa missão é proporcionar um ambiente competitivo, justo e profissional para todos os operadores.
                  </p>
                </section>

                <section>
                  <h3 className="text-omega-red font-military text-xl mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-omega-red/20 flex items-center justify-center text-sm">02</span>
                    Protocolos de Conduta
                  </h3>
                  <ul className="space-y-3 list-disc pl-5">
                    <li><strong className="text-omega-white">Respeito hierárquico:</strong> Trate todos os operadores com dignidade.</li>
                    <li><strong className="text-omega-white">Integridade tática:</strong> Uso de cheats resultará em demissão imediata.</li>
                    <li><strong className="text-omega-white">Comunicação clara:</strong> Mantenha comunicação objetiva.</li>
                    <li><strong className="text-omega-white">Sigilo operacional:</strong> Não compartilhe informações sensíveis.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-omega-red font-military text-xl mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-omega-red/20 flex items-center justify-center text-sm">03</span>
                    Sistema de Patentes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <div className="text-yellow-500 font-military font-bold mb-2">Advertência</div>
                      <p className="text-sm">Primeira infração - Notificação formal.</p>
                    </div>
                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                      <div className="text-orange-500 font-military font-bold mb-2">Suspensão</div>
                      <p className="text-sm">Infração grave - 7-30 dias.</p>
                    </div>
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <div className="text-red-500 font-military font-bold mb-2">Baqueamento</div>
                      <p className="text-sm">Expulsão definitiva.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="p-6 border-t border-omega-gray-light bg-omega-dark rounded-b-2xl">
              <button 
                onClick={acceptTermsFromModal}
                className="w-full py-3 btn-tactical font-military"
              >
                Li e Aceito os Termos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-omega-dark border-t border-omega-gray-light py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-omega-muted text-sm font-tech">
          <p>&copy; 2026 Omega Royale. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">R6 & Battle Royale Tactical Unit</p>
        </div>
      </footer>
    </div>
  );
}