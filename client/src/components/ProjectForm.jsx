import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postNote } from '../_actions/post_action';
import { ProjectFormContainer } from './ProjectForm.style';
import WriteEditor from './Admin/WriteEditor';
import WriteViewer from './Admin/WriteViewer';
import MsgModal from './MsgModal/MsgModal';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

function ProjectForm({ action, param }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(''); // success | warning | error
  const [thumbFile, setThumbFile] = useState(''); // thumbnail image file
  const [heroFile, setHeroFile] = useState(''); // hero image file
  const [errMessage, setErrMessage] = useState(''); // error message
  const [editorHtml, setEditorHtml] = useState('');
  const [markdown, setMarkdown] = useState('');

  const [data, setData] = useState({
    member: 1,
    type: 'personal',
  });

  /* form elements onChange */
  const onChangeCheck = (e) => {
    setCheck(e.target.checked);
  };
  const onChangeType = (value) => {
    setData({ ...data, type: value });
  };
  const onChangeMember = (value) => {
    setData({ ...data, member: Number(value) });
  };
  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  /* toast ui */
  const getEditorHtml = (html) => {
    setEditorHtml(html);
  };
  const getMarkDown = (markdown) => {
    setMarkdown(markdown);
    // console.log('markdown', markdown);
  };

  /* modal type handler */
  const onModalHandler = (state) => {
    setModal(state);
  };
  /* modal type */
  const ModalType = () => {
    switch (modalType) {
      case 'success':
        return (
          <MsgModal
            success
            heading="Upload"
            message="새 프로젝트가 등록되었습니다."
            onModalHandler={onModalHandler}
          />
        );
      case 'warning':
        return (
          <MsgModal
            warning
            heading="Upload"
            message="새 프로젝트 등록에 실패했습니다. 첨부파일 또는 빈칸을 채워주세요."
            onModalHandler={onModalHandler}
          />
        );
      case 'error':
        return (
          <MsgModal
            error
            heading="Upload"
            message={`새 프로젝트 등록에 실패했습니다. ${errMessage}`}
            onModalHandler={onModalHandler}
          />
        );
      default:
        return null;
    }
  };

  /* onSubmit failed */
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setModalType('warning');
    setModal(true);
  };

  /* onSubmit */
  const onSubmitHandler = (e) => {
    // 첨부된 파일이 없다면 warning
    if (heroFile === '' || thumbFile === '') {
      setModalType('warning');
      setModal(true);
      return;
    }

    const formData = new FormData();
    formData.append('thumb', thumbFile);
    formData.append('hero', heroFile);

    // 서버의 upload API 호출
    let body = {
      title: data.title,
      type: data.type,
      info: data.info,
      tech: data.tech.split(',').map((a) => a.trim()),
      git: data.git,
      site: data.site,
      due: data.due,
      role: data.role,
      desc: data.desc,
      member: data.member,
      markdown: markdown,
      lock: check,
    };

    dispatch(postNote(body)).then((response) => {
      if (response.payload.overlap) {
        console.log('overlap', response.payload);
        setErrMessage('이미 존재하는 프로젝트입니다.');
        setModalType('error');
        setModal(true);
      }

      if (response.payload.success) {
        console.log('submitbody', response.payload);

        // send formData
        axios.post(`/api/upload/${data.title}`, formData);
        history.push('/admin/projects');
      }

      if (response.payload.error) {
        setErrMessage(response.payload.err);
        setModalType('error');
        setModal(true);
      }
    });
  };

  const onChangeUpload = (e) => {
    if (e.target.id) {
      e.target.id === 'thumb' && setThumbFile(e.target.files[0]);
      e.target.id === 'hero' && setHeroFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const SubmitButtons = (e) => {
    let text = action === 'write' ? '프로젝트 등록' : '프로젝트 수정';
    return (
      <Button type="primary" htmlType="submit">
        {text}
      </Button>
    );
  };

  return (
    <>
      <ProjectFormContainer>
        <Form
          onFinish={onSubmitHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="프로젝트 명"
            name="title"
            rules={[{ required: true }]}
            className="half"
          >
            <Input name="title" onChange={onChangeInput} />
          </Form.Item>
          <Form.Item
            label="프로젝트 타입"
            name="type"
            className="half"
            initialValue="personal"
          >
            <Select placeholder="프로젝트 타입" onChange={onChangeType}>
              <Option value="personal">Personal</Option>
              <Option value="team">Team</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="프로젝트 소개"
            name="info"
            rules={[{ required: true }]}
            className="half"
          >
            <Input name="info" onChange={onChangeInput} />
          </Form.Item>
          <Form.Item
            label="사용 기술"
            name="tech"
            rules={[{ required: true }]}
            className="half"
          >
            <Input
              placeholder="HTML, CSS, JavaScript"
              name="tech"
              onChange={onChangeInput}
            />
          </Form.Item>
          <Form.Item
            label="깃허브 URL"
            name="github"
            rules={[{ required: true }]}
            className="half"
          >
            <Input
              placeholder="https://github.com/"
              name="git"
              onChange={onChangeInput}
            />
          </Form.Item>
          <Form.Item
            label="사이트 URL"
            name="site"
            rules={[{ required: true }]}
            className="half"
          >
            <Input
              placeholder="https://github.com/"
              name="site"
              onChange={onChangeInput}
            />
          </Form.Item>
          <Form.Item label="참여 인원" name="member" className="half" initialValue="1">
            <Select placeholder="참여 인원" onChange={onChangeMember}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="작업 기간"
            name="due"
            rules={[{ required: true }]}
            className="half"
          >
            <Input placeholder="2022/01 - 2022/02" name="due" onChange={onChangeInput} />
          </Form.Item>
          <Form.Item
            label="업무 범위"
            name="role"
            rules={[{ required: true }]}
            className="half"
          >
            <Input
              placeholder="기획 30% / 프론트엔드 50%"
              name="role"
              onChange={onChangeInput}
            />
          </Form.Item>
          <Form.Item
            label="공개 여부"
            name="lock"
            className="half"
            valuePropName="checked"
          >
            <Checkbox onChange={onChangeCheck}>비공개 설정</Checkbox>
          </Form.Item>
          <Form.Item label="프로젝트 설명" name="desc" rules={[{ required: true }]}>
            <TextArea
              placeholder="프로젝트 설명을 입력하세요."
              autoSize={{ minRows: 4, maxRows: 6 }}
              name="desc"
              onChange={onChangeInput}
            />
          </Form.Item>

          <Form.Item label="썸네일 등록" className="half">
            <input
              type="file"
              id="thumb"
              name="thumb"
              className="thumb-input"
              onChange={onChangeUpload}
              accept="image/*"
            />
            <label htmlFor="thumb" className="thumb-label">
              <span className="upload-btn">
                <UploadOutlined />
                Upload
              </span>
            </label>
            {thumbFile && <div className="file-name">{thumbFile.name}</div>}
          </Form.Item>

          <Form.Item label="대표 이미지" className="half">
            <input
              type="file"
              id="hero"
              name="hero"
              className="thumb-input"
              onChange={onChangeUpload}
              accept="image/*"
            />
            <label htmlFor="hero" className="thumb-label">
              <span className="upload-btn">
                <UploadOutlined />
                Upload
              </span>
            </label>
            {heroFile && <div className="file-name">{heroFile.name}</div>}
          </Form.Item>

          <WriteEditor
            getEditorHtml={getEditorHtml}
            getMarkDown={getMarkDown}
            title={data.title}
          />

          <WriteViewer />

          <div className="form-footer">
            <Button onClick={() => history.push('/admin/projects')}>나가기</Button>
            <SubmitButtons />
          </div>
        </Form>

        {modal && <ModalType />}
      </ProjectFormContainer>
    </>
  );
}

export default React.memo(ProjectForm);
