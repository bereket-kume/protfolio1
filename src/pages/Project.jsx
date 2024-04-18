import React from 'react';
import ProjectItem from '../components/ProjectItem';
import './project.css';
import { ProjectList } from '../helpers/projectList'
const Project = () => {
  return (
    <div className="container project">
      <h1>My Personal Project</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Project;