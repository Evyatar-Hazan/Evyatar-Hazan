import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com/Evyatar-Hazan' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:evyatarhazan3.14@gmail.com' },
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-black mt-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-neutral-500 dark:text-neutral-400 text-sm transition-colors duration-500">
          {t('footer.copyright', { year: currentYear })}
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center group"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
