
import React from 'react';
import ProjectsContent from '../components/Projects'; // Renommer ou réutiliser directement

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-16"> {/* Ajoute un padding top pour compenser la navbar fixe */}
      <ProjectsContent />
    </div>
  );
};

export default ProjectsPage;
