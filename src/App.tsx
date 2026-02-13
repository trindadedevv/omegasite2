// src/App.tsx (atualizado)
import { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import HowToPlay from './sections/HowToPlay';
import Pricing from './sections/Pricing';
import Ranking from './sections/Ranking';
import Calendar from './sections/Calendar';
import Updates from './sections/Updates';
import Footer from './sections/Footer';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Dashboard from './pages/Dashboard';

type PageType = 'home' | 'login' | 'shop' | 'register' | 'dashboard';

function HomePage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <About />
        <HowToPlay />
        <Pricing />
        <Ranking />
        <Calendar />
        <Updates />
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  switch (currentPage) {
    case 'login':
      return <Login onNavigate={handleNavigate} />;
    case 'shop':
      return <Shop onNavigate={handleNavigate} />;
    case 'dashboard':
      return <Dashboard onNavigate={handleNavigate} />;
    case 'home':
    default:
      return <HomePage onNavigate={handleNavigate} />;
  }
}

export default App;