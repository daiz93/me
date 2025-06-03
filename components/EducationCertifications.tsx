import React, { useState, useEffect, useRef } from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, EducationEntry, CertificationEntry } from '../constants';

// Simple SVG Icons for visual enhancement
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award mr-2 text-sky-500"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

const CertificateIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield mr-2 text-sky-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);


const EducationCertifications: React.FC = () => {
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
      id="education"
      className={`py-16 sm:py-24 bg-slate-50 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Formation & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Mon parcours académique et mes certifications professionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-sky-700 mb-6 flex items-center">
              <GraduationCapIcon />
              Formations Académiques
            </h3>
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu: EducationEntry) => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-sky-600">{edu.degree}</h4>
                  <p className="text-md text-slate-700">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                  {edu.details && (
                    <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                      {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className={`transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-sky-700 mb-6 flex items-center">
              <CertificateIcon />
              Certifications Professionnelles
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert: CertificationEntry) => (
                <div key={cert.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-md font-semibold text-sky-600">{cert.name}</h4>
                  <p className="text-sm text-slate-700">
                    {cert.issuer} - <span className="text-slate-500">{cert.year}</span>
                  </p>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline">
                      Voir la certification
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
