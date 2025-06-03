import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-16 sm:py-24 bg-slate-50 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-2 sm:px-8 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Un aperçu de mon parcours, mes passions et mon approche du développement.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xl">
          <div 
            className="text-slate-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: PERSONAL_INFO.bioLong }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;