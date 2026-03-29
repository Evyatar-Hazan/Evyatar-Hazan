import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/15 blur-[120px] rounded-full -z-10 animate-pulse delay-1000" />

      <main className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-neutral-400 text-sm font-medium"
        >
          {t('home.available')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent"
        >
          {t('home.greeting')} <span className="text-primary-500">{t('home.name')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('home.subtitle')}
          <span className="text-neutral-100 font-medium whitespace-pre"> React</span>, 
          <span className="text-neutral-100 font-medium whitespace-pre"> TypeScript</span>, & 
          <span className="text-neutral-100 font-medium whitespace-pre"> Framer Motion</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => scrollTo('#projects')} variant="primary" className="group">
            {t('home.viewProjects')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Button>
          <Button onClick={() => scrollTo('#contact')} variant="outline" className="group bg-neutral-950/50 backdrop-blur-md">
            {t('home.contactMe')}
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/Evyatar-Hazan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </main>
    </section>
  );
};

export default Home;
