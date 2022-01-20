import React from 'react';
import { Table } from 'antd';
import AdminHeader from '../../../components/Admin/AdminHeader';
import { useSelector } from 'react-redux';
function Projects(props) {
  const postsData = useSelector((state) => state.post);
  console.log('postsData', postsData);
  const columns = [
    {
      title: '번호',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '프로젝트 명',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '설명',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: '공개 여부',
      dataIndex: 'lock',
      key: 'lock',
    },
    {
      title: '',
      dataIndex: 'edit',
      key: 'edit',
    },
  ];
  const data = [
    {
      key: '1',
      number: '1',
      title: 'create yourstage',
      desc: '유튜브 1인 크리에이터를 위한 셀프 매니징 서비스',
      lock: '공개',
      edit: '수정 / 삭제',
    },
    {
      key: '2',
      number: '2',
      title: 'create yourstage',
      desc: '유튜브 1인 크리에이터를 위한 셀프 매니징 서비스',
      lock: '공개',
      edit: '수정 / 삭제',
    },
  ];

  return (
    <>
      <AdminHeader
        title="프로젝트 관리"
        desc="작성된 프로젝트의 수정 / 삭제  등을 관리를 할 수 있습니다."
      />
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
}

export default React.memo(Projects);
