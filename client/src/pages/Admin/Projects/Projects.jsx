import React, { useCallback, useEffect, useState } from 'react';
import AdminHeader from '../../../components/Admin/AdminHeader';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { postList } from '../../../_actions/post_action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import MsgModal from '../../../components/MsgModal/MsgModal';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StyledTable = styled.div`
  .ant-table-thead > tr > th {
    background-color: #efefef;
    &:before {
      background-color: rgba(0, 0, 0, 0.1) !important;
    }
  }
  .ant-table-tbody > tr > td {
    padding: 10px 16px;
    position: relative;
    &:first-child .unlock {
      color: rgba(29, 29, 29, 0.3);
    }
  }
  .ant-btn + .ant-btn {
    position: relative;
  }
  .ant-btn {
    &.edit-btn {
      color: #5360dd;
      margin-right: 10px;
    }
    &.delete-btn {
      color: #dd5353;
    }
    &.edit-btn,
    &.delete-btn {
      font-weight: bold;
      &:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }

  .ant-btn.add {
    display: block;
    width: 200px;
    height: 48px;
    color: #828491;
    margin-left: auto;
    background-color: #fff;
    border-color: #d9d9d9;
    transition: 0.2s;
    margin-bottom: 24px;
    &:hover,
    &:focus {
      background-color: #fff;
      color: #171717;
    }
    &:after {
      content: none;
    }
  }

  .ant-pagination {
    margin-top: 50px;
    &-item {
      a {
        color: #171717;
      }
      &:hover {
        border-color: #171717;
      }
    }
    &-item-active {
      border-color: #d9d9d9;
      background-color: #efefef;
      a {
        color: #171717;
      }
    }
  }
`;

function Projects(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [targetId, setTargetId] = useState(null);
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
      width: '190px',
      render: (id) => (
        <>
          <Button type="text" className="edit-btn" data-number={id}>
            Edit
          </Button>
          <Button
            type="text"
            className="delete-btn"
            data-number={id}
            onClick={onClickDelete}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  /* 프로젝트 리스트 조회 */
  useEffect(() => {
    dispatch(postList()).then((response) => {
      if (response.payload) {
        const _inputData = response.payload.data.map((item) => ({
          key: item.id,
          number: item.id,
          title: item.title,
          info: item.info,
          lock: item.lock,
          edit: item.id,
        }));
        setInputData(_inputData);
      } else {
        console.log('the posts data is empty...');
      }
    });
  }, [confirm, dispatch]);

  /* modal type handler */
  const onClickDelete = useCallback((e) => {
    setTargetId(e.currentTarget.dataset.number);
    setConfirm(false);
    setVisible(true);
  }, []);

  const onModalHandler = useCallback((state) => {
    setVisible(state);
  }, []);

  const onConfirmHandler = useCallback(
    (state) => {
      setConfirm(state);
      axios
        .post('/api/posts/delete', { id: targetId }) //
        .then((response) => console.log('delete project', targetId, response.data));
    },
    [targetId]
  );

  return (
    <>
      <AdminHeader
        title="프로젝트 관리"
        desc="작성된 프로젝트를 수정 / 삭제 등을 관리 할 수 있습니다."
      />
      <StyledTable>
        <Link to="/admin/write">
          <Button className="add">프로젝트 생성</Button>
        </Link>
        <Table
          columns={columns}
          dataSource={inputData}
          pagination={{ position: ['bottomCenter'] }}
        />
      </StyledTable>

      {visible && (
        <MsgModal
          warning
          heading="delete"
          message={`정말 삭제하시겠습니까? '확인'을 클릭하면 되돌릴 수 없습니다.`}
          submit={['취소', '확인']}
          onModalHandler={onModalHandler}
          onConfirmHandler={onConfirmHandler}
        />
      )}
    </>
  );
}

export default React.memo(Projects);
