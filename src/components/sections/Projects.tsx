import Card from '../Card';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "ecommerce",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "taskapp",
      tags: ["React", "Firebase", "Framer Motion", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "portfolio",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 min-h-screen relative flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          {t('projects.title1')} <span className="text-primary-500">{t('projects.title2')}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full group">
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {t(`projects.items.${project.id}.title`)}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {t(`projects.items.${project.id}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-neutral-800 rounded-md text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-neutral-800">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Github className="w-4 h-4" /> {t('projects.code')}
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm font-medium mr-auto rtl:mr-0 rtl:ml-auto ltr:ml-auto"
                >
                  <ExternalLink className="w-4 h-4" /> {t('projects.liveDemo')}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
