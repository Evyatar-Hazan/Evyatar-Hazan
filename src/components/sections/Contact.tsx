import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Mock)");
  };

  return (
    <section id="contact" className="py-24 px-6 min-h-[80vh] flex items-center justify-center relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('contact.title1')} <span className="text-primary-500">{t('contact.title2')}</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-neutral-800 backdrop-blur-xl">
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">{t('contact.getInTouch')}</h3>
              <p className="text-neutral-400">{t('contact.getInTouchDesc')}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-4 bg-neutral-800/50 rounded-full text-primary-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium">{t('contact.emailLbl')}</p>
                  <a href="mailto:hello@example.com" className="text-lg hover:text-primary-400 transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">{t('contact.form.nameLbl')}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-neutral-600"
                placeholder={t('contact.form.namePh')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">{t('contact.form.emailLbl')}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-neutral-600"
                placeholder={t('contact.form.emailPh')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">{t('contact.form.msgLbl')}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-neutral-600 resize-none"
                placeholder={t('contact.form.msgPh')}
              />
            </div>
            <Button type="submit" className="w-full group">
              {t('contact.form.sendBtn')}
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
