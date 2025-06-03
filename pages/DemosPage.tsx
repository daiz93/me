
import React, { useState, useEffect, useRef } from 'react';

const DemosPage: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set inView to true directly for page load, or use IntersectionObserver if preferred
    setInView(true); 
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="demos-page-content" // Unique ID for the content section of this page
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ease-out min-h-[calc(100vh-8rem)] flex items-center justify-center ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Démonstrations
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Cette section présentera bientôt des démonstrations interactives de mes projets et concepts.
          </p>
          <div className="mt-8">
            <span className="text-7xl" role="img" aria-label="Under construction">🚧</span>
            <p className="text-xl text-slate-500 mt-4">En cours de construction...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemosPage;
