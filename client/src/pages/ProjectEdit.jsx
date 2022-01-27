import React from 'react';
import AdminHeader from '../components/AdminHeader';
import ProjectForm from '../components/ProjectForm';

function ProjectEdit({ match }) {
  return (
    <>
      <AdminHeader title="프로젝트 수정" desc="작성된 프로젝트를 수정할 수 있습니다." />
      <ProjectForm action="edit" param={match.params.id} />
    </>
  );
}

export default ProjectEdit;
