import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  // Use custom theme hook to initialize global dark class mapping correctly
  useTheme(); 

  // Since we are setting dir dynamically, and index.css handles body backgrounds
  // We can just set a flex column here and no root backgrounds directly.
  
  return (
    <div dir={dir} className={`min-h-screen font-sans ${dir === 'rtl' ? '[&_*]:font-sans-hebrew' : ''}`}>
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
