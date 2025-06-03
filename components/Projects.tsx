
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA, Project } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
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
      { threshold: 0.05 } 
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

  const getDelayClass = (index: number): string => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
    return delays[index % delays.length];
  };

  return (
    <section 
      ref={sectionRef}
      // id="projects" // ID supprimé car ce composant est maintenant utilisé comme une page entière
      className={`py-16 sm:py-24 bg-slate-50 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Quelques exemples de mes réalisations, démontrant mon savoir-faire.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project: Project, index: number) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${getDelayClass(index)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
