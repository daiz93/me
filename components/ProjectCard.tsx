import React from 'react';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const GithubIconMini = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github ml-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {project.imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={`Aperçu du projet ${project.title}`} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out" 
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-sky-700 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Technologies :</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 font-medium transition-colors"
            >
              Démo Live <ExternalLinkIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 font-medium transition-colors"
            >
              Code Source <GithubIconMini/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;