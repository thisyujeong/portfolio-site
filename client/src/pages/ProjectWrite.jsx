import React from 'react';
import AdminHeader from '../components/AdminHeader.jsx';
import ProjectForm from '../components/ProjectForm.jsx';

function ProjectWrite(props) {
  return (
    <>
      <AdminHeader title="프로젝트 작성" desc="프로젝트를 작성하여 추가할 수 있습니다." />
      <ProjectForm action="write" />
    </>
  );
}

export default ProjectWrite;
