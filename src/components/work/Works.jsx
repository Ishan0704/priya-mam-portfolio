// Works.js
import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import Modal from './Modal';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? 'active-work' : ''}`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((project) => (
          <WorkItems item={project} key={project.id} onDemoClick={() => openModal(project)} />
        ))}
      </div>

      {selectedProject && (
        <Modal show={showModal} onClose={closeModal} project={selectedProject} />
      )}
    </div>
  );
};

export default Works;
