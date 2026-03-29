import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import Button from '../components/Button';
// import Card from '../components/Card'; // For future expansion

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse delay-1000" />

      <main className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-neutral-400 text-sm font-medium"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent"
        >
          Hi, I'm <span className="text-primary-500">Evyatar Hazan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Creative Developer specializing in building premium web experiences with 
          <span className="text-neutral-100 font-medium"> React</span>, 
          <span className="text-neutral-100 font-medium"> TypeScript</span>, and 
          <span className="text-neutral-100 font-medium"> Framer Motion</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" className="group">
            View My Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="group">
            Contact Me
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="#" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all">
            <Github className="w-6 h-6" />
          </a>
          {/* Add more social icons here */}
        </motion.div>
      </main>

      <footer className="absolute bottom-10 text-neutral-600 text-sm">
        © {new Date().getFullYear()} Evyatar Hazan. Built with passion.
      </footer>
    </div>
  );
};

export default Home;
