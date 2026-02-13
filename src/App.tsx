import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import HowToPlay from './sections/HowToPlay';
import Pricing from './sections/Pricing';
import Ranking from './sections/Ranking';
import Calendar from './sections/Calendar';
import Updates from './sections/Updates';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cod-black text-cod-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <HowToPlay />
        <Pricing />
        <Ranking />
        <Calendar />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
