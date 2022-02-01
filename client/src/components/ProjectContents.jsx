import React from 'react';

function ProjectContents({ post }) {
  console.log('contents', post.title);
  return (
    <div>
      <h1>project contents</h1>
      <p>{post.title}</p>
    </div>
  );
}

export default ProjectContents;
