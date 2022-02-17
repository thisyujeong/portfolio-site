import React from 'react';
import AdminHeader from '../components/AdminHeader';
import ProjectTable from '../components/Project/ProjectTable';

function AdminProjects(props) {
  return (
    <>
      <AdminHeader
        title="프로젝트 관리"
        desc="작성된 프로젝트를 수정 / 삭제 등을 관리 할 수 있습니다."
      />
      <ProjectTable />
    </>
  );
}

export default AdminProjects;
