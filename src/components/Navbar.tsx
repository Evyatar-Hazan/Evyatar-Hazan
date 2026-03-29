import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('Home');
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActive(name);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex justify-center py-4 px-6 pointer-events-none"
    >
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl pointer-events-auto transition-colors duration-500">
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home', 'Home')}
          className="text-neutral-900 dark:text-white font-bold tracking-tight text-xl mr-4 rtl:mr-0 rtl:ml-4 transition-colors"
        >
          EH<span className="text-primary-500">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.name)}
              className={`text-sm font-medium transition-colors ${
                active === item.name ? 'text-primary-500 dark:text-primary-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {t(`nav.${item.name}`)}
            </a>
          ))}
          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-700 mx-2 transition-colors"></div>
          
          <button 
            onClick={toggleTheme}
            className="p-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-xs font-bold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            {i18n.language === 'en' ? 'עב' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
