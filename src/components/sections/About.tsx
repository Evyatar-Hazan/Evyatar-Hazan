import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Next.js'];

  return (
    <section id="about" className="py-24 px-6 min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            {t('about.title1')} <span className="text-primary-500">{t('about.title2')}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-neutral-400 leading-relaxed space-y-6 text-lg">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
            
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white">{t('about.techStack')}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 font-medium hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
