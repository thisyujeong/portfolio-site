import React, { useCallback, useEffect, useState } from 'react';
import { TableContainer } from './ProjectTable.style';
import { Table, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { postList } from '../_actions/post_action';
import MsgModal from './MsgModal/MsgModal';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function ProjectTable(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [confirm, setConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [inputData, setInputData] = useState([
    { key: 0, number: 0, title: '', info: '', lock: false },
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
          <Button type="text" className="edit-btn" data-number={id} onClick={onClickEdit}>
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

  // 프로젝트 리스트 조회
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
  }, [dispatch, confirm]);

  const onClickEdit = (e) => {
    history.push(`/admin/edit/${e.currentTarget.dataset.number}`);
  };

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
        .then((response) => console.log('delete project', response.data));
    },
    [targetId]
  );

  const ViewModal = (e) => {
    return visible ? (
      <MsgModal
        warning
        heading="delete"
        message={`정말 삭제하시겠습니까? '확인'을 클릭하면 되돌릴 수 없습니다.`}
        submit={['취소', '확인']}
        onModalHandler={onModalHandler}
        onConfirmHandler={onConfirmHandler}
      />
    ) : null;
  };
  console.log('aaa');
  return (
    <>
      <TableContainer>
        <Link to="/admin/write">
          <button className="add">프로젝트 생성</button>
        </Link>
        <Table
          columns={columns}
          dataSource={inputData}
          pagination={{ position: ['bottomCenter'] }}
        />
      </TableContainer>
      <ViewModal />
    </>
  );
}

export default ProjectTable;
