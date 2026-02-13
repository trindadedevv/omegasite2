import { useState } from 'react';
import { Eye, EyeOff, Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: 'home' | 'login' | 'shop' | 'register' | 'dashboard') => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulação de login - aqui você integra com seu backend
    setTimeout(() => {
      if (email && password) {
        // Sucesso - redirecionar para dashboard
        onNavigate('dashboard');
      } else {
        setError('Preencha todos os campos');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-omega-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-omega-red/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-64 bg-gradient-to-b from-omega-red/50 to-transparent" />
      
      {/* Decorative Omega Symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-military text-omega-red/[0.02] select-none pointer-events-none">
        Ω
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-omega-muted hover:text-omega-red transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold tracking-wider">VOLTAR</span>
        </button>

        {/* Login Card */}
        <div className="card-tactical p-8 tactical-corner">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 border-2 border-omega-red rounded-full">
              <span className="font-military text-4xl text-omega-red">Ω</span>
            </div>
            <h1 className="font-military text-3xl text-omega-white mb-2">
              OMEGA <span className="text-omega-red">ROYALE</span>
            </h1>
            <p className="font-tech text-sm text-omega-muted tracking-wider">
              ACESSO RESTRITO
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 mb-6 bg-omega-red/10 border border-omega-red/30 rounded">
              <AlertCircle className="w-5 h-5 text-omega-red flex-shrink-0" />
              <span className="text-sm text-omega-red">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                Email ou Usuário
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-omega-muted" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-tactical w-full pl-10 pr-4 py-3"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-omega-muted uppercase tracking-wider mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-omega-muted" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-tactical w-full pl-10 pr-12 py-3"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-omega-muted hover:text-omega-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-omega-red" />
                <span className="text-omega-muted">Lembrar-me</span>
              </label>
              <button type="button" className="text-omega-red hover:text-omega-red-light transition-colors">
                Esqueceu a senha?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-tactical w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-omega-white/30 border-t-omega-white rounded-full animate-spin" />
                  <span>ENTRANDO...</span>
                </>
              ) : (
                <span>ENTRAR</span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-omega-gray-light" />
            <span className="text-xs text-omega-muted uppercase">ou</span>
            <div className="flex-1 h-px bg-omega-gray-light" />
          </div>

          {/* Discord Login */}
          <button className="w-full flex items-center justify-center gap-3 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold tracking-wider transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            ENTRAR COM DISCORD
          </button>

          {/* Register Link */}
          <div className="text-center mt-6">
            <span className="text-omega-muted">Não tem conta? </span>
            <button 
              onClick={() => onNavigate('register')}
              className="text-omega-red hover:text-omega-red-light font-semibold transition-colors"
            >
              Cadastre-se
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-omega-muted/60">
            © 2026 Omega Royale. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
