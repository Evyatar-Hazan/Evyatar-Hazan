import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'he' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className={`bg-neutral-950 min-h-screen selection:bg-primary-500/30 font-sans text-neutral-200 ${dir === 'rtl' ? '[&_*]:font-sans-hebrew' : ''}`}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
