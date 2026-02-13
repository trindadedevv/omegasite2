// src/pages/Register.tsx
import { useState } from 'react';
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
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2