
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importer les composants de page
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import DemosPage from './pages/DemosPage';
import VideosPage from './pages/VideosPage'; // Correct relative path

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      // Scroll to top when navigating to a new page (not a sub-section of home)
      if (window.location.hash.includes('/') && !window.location.hash.match(/#\/\w+/)) { // e.g. #/projects but not #/about
         window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll to top for page loads, unless it's a section link on home
    if (window.location.hash === '' || window.location.hash === '#/') {
        window.scrollTo(0,0);
    }


    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let pageContent;
  // Normalize path: '#/foo' -> 'foo', '#about' -> 'about', '#/' -> '', '' -> ''
  const routeKey = currentPath.replace(/^#\/?/, ''); 

  if (routeKey === 'projects') {
    pageContent = <ProjectsPage />;
  } else if (routeKey === 'contact') {
    pageContent = <ContactPage />;
  } else if (routeKey === 'demos') {
    pageContent = <DemosPage />;
  } else if (routeKey === 'videos') { 
    pageContent = <VideosPage />;
  }
   else { 
    // HomePage handles routes like '', 'about', 'skills'
    // Pass the routeKey which might be a sectionId like 'about' or empty for home root
    pageContent = <HomePage sectionIdToScroll={routeKey} />;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {pageContent}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
