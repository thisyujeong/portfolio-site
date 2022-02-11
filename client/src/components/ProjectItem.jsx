import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItemContainer } from './ProjectItem.style';

function ProjectItem({ post, idx }) {
  if (!post) return null;
  return (
    <ProjectItemContainer key={idx}>
      <div className="type">{post.type}</div>
      <Link to={`/projects/${post.id}`} className="thumbnail">
        <img src={`${post.thumb}`} alt="thumbnail" />
      </Link>
      <div className="post-info">
        <div>
          <ul className="tech">
            {post.tech.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
          <div className="title">{post.title}</div>
          <div className="info">{post.info}</div>
        </div>
        <Link to={`/projects/${post.id}`} className="more">
          view the project →
        </Link>
      </div>
    </ProjectItemContainer>
  );
}

export default ProjectItem;
