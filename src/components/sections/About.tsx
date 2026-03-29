import { motion } from 'framer-motion';

const About = () => {
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
            About <span className="text-primary-500">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-neutral-400 leading-relaxed space-y-6 text-lg">
              <p>
                Hello! I'm Evyatar, a passionate Creative Developer based in Israel. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My goal is to always build products that provide pixel-perfect, performant experiences. I focus heavily on writing clean, elegant code and creating intuitive user interfaces.
              </p>
              <p>
                When I'm not at the computer, I'm usually spending time outdoors or exploring new technologies to learn.
              </p>
            </div>
            
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white">My Tech Stack</h3>
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
