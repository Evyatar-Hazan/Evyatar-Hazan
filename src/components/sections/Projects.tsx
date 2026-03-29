import Card from '../Card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and a headless CMS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "Real-time task management wrapper with drag and drop features and team collaboration.",
    tags: ["React", "Firebase", "Framer Motion", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A premium, animated portfolio template built to showcase creative work.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 min-h-screen relative flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Selected <span className="text-primary-500">Works</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full group">
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {project.description}
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
                  <Github className="w-4 h-4" /> Code
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
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
