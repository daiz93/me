
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../constants';

const HomeContactCTA: React.FC = () => {
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

  const projectsLink = NAV_LINKS.find(link => link.id === 'projects')?.href || '#/projects';
  const contactLink = NAV_LINKS.find(link => link.id === 'contact')?.href || '#/contact';
  const demosLink = NAV_LINKS.find(link => link.id === 'demos')?.href || '#/demos';
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section 
      ref={sectionRef}
      id="home-cta" 
      className={`py-16 sm:py-24 bg-sky-600 text-white transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Aller Plus Loin ?
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-10">
            Explorez mes réalisations, contactez-moi pour discuter de votre projet, ou découvrez mes démonstrations techniques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={projectsLink}
              onClick={(e) => handleNavigation(e, projectsLink)}
              className="bg-white text-sky-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-50 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg w-full sm:w-auto"
            >
              Voir mes Projets
            </a>
            <a
              href={demosLink}
              onClick={(e) => handleNavigation(e, demosLink)}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white/10 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg w-full sm:w-auto"
            >
              Explorer les Démos
            </a>
            <a
              href={contactLink}
              onClick={(e) => handleNavigation(e, contactLink)}
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-sky-500/50 transition-all transform hover:scale-105 duration-300 ease-in-out text-lg w-full sm:w-auto"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactCTA;
