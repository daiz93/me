import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA, SkillCategory } from '../constants';

interface SkillBarProps {
  name: string;
  level: number;
  isVisible: boolean;
  delay: string; // Tailwind delay class e.g. 'delay-100'
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, isVisible, delay }) => (
  <div className={`mb-4 transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${delay}`}>
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-sky-700">{name}</span>
      <span className="text-sm font-medium text-sky-700">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
      <div
        className={`bg-sky-500 h-2.5 rounded-full transition-all duration-1000 ease-out ${delay}`} // delay for width animation
        style={{ width: isVisible ? `${level}%` : '0%' }}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label={`${name} proficiency`}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
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

  const getDelayClass = (index: number): string => {
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
    return delays[index % delays.length];
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Les technologies et outils que je maîtrise pour donner vie à vos projets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category: SkillCategory, categoryIndex: number) => (
            <div 
              key={category.name} 
              className={`bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${getDelayClass(categoryIndex)}`}
            >
              <h3 className="text-2xl font-semibold text-sky-700 mb-6 text-center border-b-2 border-sky-200 pb-3">
                {category.name}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  isVisible={inView}
                  delay={getDelayClass(skillIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;