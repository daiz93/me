
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai bientôt. (Ceci est une démo)");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section 
      ref={sectionRef}
      // id="contact" // ID supprimé car ce composant est maintenant utilisé comme une page entière
      className={`py-16 sm:py-24 bg-slate-50 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour toute question, proposition de projet ou simplement pour discuter.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition-colors"
                placeholder="Votre nom"
                aria-label="Nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition-colors"
                placeholder="votre.email@example.com"
                aria-label="Adresse e-mail"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 transition-colors"
                placeholder="Votre message..."
                aria-label="Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              >
                Envoyer le Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-slate-600">Ou contactez-moi directement :</p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-600 hover:text-sky-800 font-medium">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
