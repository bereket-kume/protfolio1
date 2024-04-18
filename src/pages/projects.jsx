import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/projectList';

const ProjectDisplay = () => {
    const { projectId } = useParams();
const project = ProjectList[projectId]
  return <div className='project'>
    
  </div>;
};

export default ProjectDisplay;