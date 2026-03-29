import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
      <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl pointer-events-auto">
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home', 'Home')}
          className="text-white font-bold tracking-tight text-xl mr-4"
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
                active === item.name ? 'text-primary-400' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t(`nav.${item.name}`)}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs font-bold hover:bg-neutral-700 transition"
          >
            {i18n.language === 'en' ? 'עב' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
