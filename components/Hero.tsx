
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';
import TechnologicalBackground from './TechnologicalBackground';

// Simple SVG Icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);


const Hero: React.FC = () => {
  const projectsLink = NAV_LINKS.find(link => link.id === 'projects')?.href || '#projects';
  const contactLink = NAV_LINKS.find(link => link.id === 'contact')?.href || '#contact';

  const [h1Visible, setH1Visible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [bioVisible, setBioVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [socialsVisible, setSocialsVisible] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);

  const avatarContainerRef = useRef<HTMLDivElement>(null);
  const [avatarStyle, setAvatarStyle] = useState({});

  useEffect(() => {
    const timers = [
      setTimeout(() => setAvatarVisible(true), 100),
      setTimeout(() => setH1Visible(true), 300),
      setTimeout(() => setTitleVisible(true), 500),
      setTimeout(() => setBioVisible(true), 700),
      setTimeout(() => setButtonsVisible(true), 900),
      setTimeout(() => setSocialsVisible(true), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarContainerRef.current) return;
    const rect = avatarContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = (x / (rect.width / 2)) * 10; // Max rotation 10 degrees
    const rotateX = (-y / (rect.height / 2)) * 10; // Max rotation 10 degrees
    const scale = 1.07;

    setAvatarStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.05s linear', // Quick transition while moving
    });
  };

  const handleMouseLeave = () => {
    setAvatarStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Slower, smoother transition on leave
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-600 to-indigo-700 text-white relative overflow-hidden pt-24 pb-16 md:pt-20">
      <TechnologicalBackground />
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slow z-[1]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slower z-[1]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Avatar Section Wrapper for perspective */}
          <div 
            className={`flex justify-center md:order-2 md:justify-end transition-all duration-1000 ease-out ${avatarVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ perspective: '1000px' }} // Apply perspective to the parent of the transformed element
          >
            <div
              ref={avatarContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={avatarStyle}
              className="relative group" // `group` class can still be used for non-transform hover effects on children if needed
            >
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={`Photo de ${PERSONAL_INFO.name}`}
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white group-hover:shadow-sky-400/50 transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-full border-4 border-sky-400 group-hover:border-sky-300 animate-pulse-border opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
               <style>{`
                @keyframes pulse-border {
                  0%, 100% { box-shadow: 0 0 0 0px rgba(2, 132, 199, 0.4); }
                  50% { box-shadow: 0 0 0 10px rgba(56, 189, 248, 0); }
                }
                .animate-pulse-border {
                  animation: pulse-border 2.5s infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center md:order-1 md:text-left">
            <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4 transition-all duration-700 ease-out ${h1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {PERSONAL_INFO.name}
            </h1>
            <p className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl text-sky-200 mb-6 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {PERSONAL_INFO.title}
            </p>
            <p className={`text-md sm:text-lg text-sky-100 mb-8 leading-relaxed transition-all duration-700 ease-out ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {PERSONAL_INFO.bioShort}
            </p>
            <div className={`flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-0 md:space-x-4 mb-10 transition-all duration-700 ease-out ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <a
                href={projectsLink}
                className="bg-white text-sky-700 font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-sky-50 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg m-2 sm:m-0 w-full sm:w-auto"
              >
                Mes Projets
              </a>
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-sky-500/50 transition-all transform hover:scale-105 duration-300 ease-in-out text-lg m-2 sm:m-0 inline-flex items-center justify-center w-full sm:w-auto"
              >
                <DownloadIcon /> Télécharger CV
              </a>
              <a
                href={contactLink}
                className="border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-white/10 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg m-2 sm:m-0 w-full sm:w-auto"
              >
                Contactez-moi
              </a>
            </div>
            <div className={`flex justify-center md:justify-start space-x-6 transition-all duration-700 ease-out ${socialsVisible ? 'opacity-100' : 'opacity-0'}`}>
              {PERSONAL_INFO.github && (
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-sky-200 hover:text-white transition-colors duration-300">
                  <GithubIcon />
                </a>
              )}
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-sky-200 hover:text-white transition-colors duration-300">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500 ease-out ${socialsVisible ? 'opacity-100' : 'opacity-0'} z-10`}>
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-sky-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
