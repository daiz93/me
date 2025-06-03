import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA, ExperienceEntry } from '../constants';

const Experience: React.FC = () => {
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
      { threshold: 0.05 } // Trigger a bit earlier for timeline items
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

  const getDelayClass = (index: number): string => {
    const delays = ['delay-0', 'delay-150', 'delay-300', 'delay-500'];
    return delays[index % delays.length];
  };


  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Mon Expérience
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Un résumé de mon parcours professionnel et des défis que j'ai relevés.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - animate its appearance */}
          <div className={`absolute left-4 sm:left-1/2 top-0 w-0.5 bg-sky-200 transform sm:-translate-x-1/2 transition-all duration-1000 ease-out ${inView ? 'bottom-0' : 'bottom-full'}`}></div>

          {EXPERIENCE_DATA.map((entry: ExperienceEntry, index: number) => (
            <div 
              key={entry.id} 
              className={`mb-12 flex items-start transition-all duration-700 ease-out ${getDelayClass(index)} ${
                inView 
                  ? 'opacity-100' 
                  : 'opacity-0'
              } ${
                index % 2 === 0 
                  ? (inView ? 'sm:translate-x-0' : 'sm:-translate-x-10') 
                  : (inView ? 'sm:translate-x-0' : 'sm:translate-x-10')
              } ${
                inView ? 'translate-y-0' : 'translate-y-5 sm:translate-y-0' // Mobile specific initial transform
              }`}
            >
              {/* Dot on timeline - animate its appearance */}
              <div className={`hidden sm:flex absolute left-1/2 top-1 transform -translate-x-1/2 -translate-y-0 transition-transform duration-500 ease-out ${getDelayClass(index)} ${inView ? 'scale-100' : 'scale-0'}`}>
                <div className="w-4 h-4 bg-sky-500 rounded-full z-10 ring-4 ring-white"></div>
              </div>
              
              {/* Mobile dot and line segment */}
              <div className="sm:hidden flex-shrink-0 mr-4">
                 <div className={`w-4 h-4 bg-sky-500 rounded-full z-10 mt-1 ring-2 ring-white transition-transform duration-500 ease-out ${getDelayClass(index)} ${inView ? 'scale-100' : 'scale-0'}`}></div>
              </div>

              <div className={`w-full ${index % 2 === 0 ? 'sm:text-left sm:pr-8' : 'sm:text-left sm:pl-8'} ${index % 2 !== 0 ? 'sm:ml-[calc(50%+1rem)]' : 'sm:mr-[calc(50%+1rem)]'}`}>
                 <div className={`bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <p className="text-sm text-slate-500 mb-1 sm:hidden">{/* Placeholder for mobile timeline alignment if needed */}</p>
                  <h3 className="text-xl font-semibold text-sky-700 mb-1">{entry.role}</h3>
                  <p className="text-md font-medium text-sky-600 mb-1">{entry.company}</p>
                  <p className="text-sm text-slate-500 mb-3">{entry.period}</p>
                  <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                    {entry.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;