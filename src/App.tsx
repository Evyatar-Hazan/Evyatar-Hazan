import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import CustomCursor from './components/animations/CustomCursor';
import ScrollProgress from './components/animations/ScrollProgress';

function App() {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  // Use custom theme hook to initialize global dark class mapping correctly
  useTheme(); 
  
  return (
    <div dir={dir} className={`min-h-screen font-sans ${dir === 'rtl' ? '[&_*]:font-sans-hebrew' : ''}`}>
      <CustomCursor />
      <ScrollProgress />
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
