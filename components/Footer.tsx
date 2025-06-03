import React from 'react';
import { PERSONAL_INFO } from '../constants';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-sky-400 transition-colors duration-300">
            <GithubIcon />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-sky-400 transition-colors duration-300">
            <LinkedinIcon />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
        </p>
        <p className="text-xs mt-1">
          Construit avec React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
