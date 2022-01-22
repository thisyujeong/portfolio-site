import React, { useEffect, useState } from 'react';
import AdminHeader from '../../../components/Admin/AdminHeader';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { postList } from '../../../_actions/post_action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledTable = styled.div`
  .ant-table-tbody > tr > td {
    padding: 10px 16px;
    position: relative;
    &:first-child .unlock {
      color: rgba(29, 29, 29, 0.3);
    }
  }
  .ant-btn + .ant-btn {
    position: relative;
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      height: 16px;
      width: 1px;
      background-color: #bbbcc2;
      transform: translateY(-50%);
      content: '';
    }
  }
  .ant-btn {
    &:hover {
      font-weight: bold;
    }
    &.edit-btn {
      color: #5360dd;
    }
    &.delete-btn {
      color: #dd5353;
    }
  }
  .ant-pagination {
    &-item {
      a {
        color: #171717;
      }
      &:hover {
        border-color: #171717;
      }
    }
    &-item-active {
      border-color: #171717;
      a {
        color: #171717;
      }
    }
  }
`;

function Projects(props) {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState([
    {
      key: 0,
      number: 0,
      title: '',
      info: '',
      lock: false,
    },
  ]);
  const columns = [
    {
      title: '',
      dataIndex: 'lock',
      key: 'lock',
      width: '50px',
      render: (lock) =>
        lock === false ? (
          <FontAwesomeIcon icon={faUnlock} className="unlock" />
        ) : (
          <FontAwesomeIcon icon={faLock} className="lock" />
        ),
    },
    { title: '번호', dataIndex: 'number', key: 'number', width: '80px' },
    {
      title: '프로젝트 명',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '설명',
      dataIndex: 'info',
      key: 'info',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '',
      dataIndex: 'edit',
      key: 'edit',
      width: '150px',
      render: (text) => (
        <>
          <Button type="text" className="edit-btn">
            수정
          </Button>
          <Button type="text" className="delete-btn">
            삭제
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch(postList()).then((response) => {
      if (response.payload) {
        const _inputData = response.payload.data.map((item) => ({
          key: item.id,
          number: item.id,
          title: item.title,
          info: item.info,
          lock: item.lock,
        }));
        setInputData(_inputData);
      } else {
        console.log('the posts data is empty...');
      }
    });
  }, [dispatch]);

  return (
    <>
      <AdminHeader
        title="프로젝트 관리"
        desc="작성된 프로젝트의 수정 / 삭제  등을 관리를 할 수 있습니다."
      />
      <StyledTable>
        <Table columns={columns} dataSource={inputData} />
      </StyledTable>
    </>
  );
}

export default React.memo(Projects);
