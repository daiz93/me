
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import EducationCertifications from '../components/EducationCertifications';
import HomeContactCTA from '../components/HomeContactCTA'; // Nouveau composant CTA

interface HomePageProps {
  sectionIdToScroll?: string;
}

const HomePage: React.FC<HomePageProps> = ({ sectionIdToScroll }) => {
  useEffect(() => {
    if (sectionIdToScroll && sectionIdToScroll !== '' && sectionIdToScroll !== 'home') {
      const element = document.getElementById(sectionIdToScroll);
      if (element) {
        // Timeout pour s'assurer que la page est rendue avant de scroller
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (!sectionIdToScroll || sectionIdToScroll === '' || sectionIdToScroll === 'home' ) {
      // Scroll to top if it's just home page without a specific section
      // Check if we are not already at top to prevent scroll jump on initial load of #/
      if (window.scrollY !== 0 && (window.location.hash === '#/' || window.location.hash === '')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [sectionIdToScroll]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <EducationCertifications />
      <HomeContactCTA /> 
    </>
  );
};

export default HomePage;
