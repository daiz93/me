
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-sky-700 text-white transition ease transform duration-300`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const currentBaseHash = (window.location.hash || '#/').replace(/^#\/?/, '').split('/')[0];
    const targetPath = href.replace(/^#\/?/, ''); // e.g. 'projects', 'about'
    const targetIsPage = href.startsWith('#/'); // True for #/projects, #/contact, #/demos

    if (targetIsPage || href === '#/') { // Navigating to a new page or home
      window.location.hash = href;
    } else { // Navigating to a section on the current page or home page (e.g. #about)
      const sectionId = href.substring(1);
      // If we are on a different page, navigate to home first, then scroll.
      // The App.tsx router and HomePage component will handle the scrolling.
      if (currentBaseHash !== '' && targetPath !== currentBaseHash) {
        window.location.hash = `/${href}`; // This becomes e.g. /#about
      } else { // Already on home page or navigating to a section from home
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else { // Fallback: go to home and then try to scroll
            window.location.hash = `/${href}`;
        }
      }
    }
    setIsOpen(false);
  };


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#/" 
            onClick={(e) => handleLinkClick(e, '#/')}
            className={`text-2xl font-bold ${isScrolled ? 'text-sky-700' : 'text-white md:text-sky-700'}`}
          >
            {PERSONAL_INFO.name.split(' ')[0]}<span className={isScrolled ? 'text-sky-500' : 'text-sky-400 md:text-sky-500'}>.</span>
          </a>
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled ? 'text-slate-700 hover:bg-sky-100 hover:text-sky-700' : 'text-slate-100 hover:bg-white/20 md:text-slate-700 md:hover:bg-sky-100 md:hover:text-sky-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu principal"
            >
              <div className="flex flex-col h-12 w-12 justify-center items-center group">
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-2 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-sky-100 hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
