import React from 'react';

const ProjectItem = ({ image, name }) => {
  return (
    <div className="card m-2">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;