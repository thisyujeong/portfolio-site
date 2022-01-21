import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postImgUpload, postNote } from '../../../_actions/post_action';
import AdminHeader from '../../../components/Admin/AdminHeader';
import WriteEditor from '../../../components/Admin/WriteEditor';
import MsgModal from '../../../components/MsgModal/MsgModal';
import styled from 'styled-components';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

const StyledForm = styled.div`
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .half {
      width: calc(50% - 15px);
    }
    label {
      font-size: 16px;
    }
  }
  .ant-form-item {
    margin-bottom: 32px;
    width: 100%;
    &.ant-form-item-has-error {
      .ant-input,
      .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
        .ant-select-selector {
        border-color: #d9d9d9 !important;
        background: #f7f7f7;
      }
    }
    .ant-form-item-label {
      width: 120px;
      text-align: left;
      font-weight: 500;
      line-height: 40px;
      label:before,
      label:after {
        content: none;
      }
    }
    .ant-form-item-explain {
      display: none;
    }
    .ant-input,
    .ant-select-selector,
    .ant-form-item-control-input {
      min-height: 40px;
      font-size: 16px;
    }
    .ant-select-selection-item,
    .ant-select-selection-placeholder {
      line-height: 40px;
    }

    &:not(.ant-select-disabled) {
      input.ant-input:hover,
      input.ant-input:focus,
      textarea.ant-input:hover,
      textarea.ant-input:focus,
      .ant-select-selector:hover,
      .ant-select-selector:focus,
      .ant-select-focused .ant-select-selector {
        border-color: #17171760;
        box-shadow: 0 0 0 2px rgb(233 233 233 / 60%);
      }
    }
    textarea.ant-input {
      padding: 10px 11px;
    }
    .ant-checkbox + span {
      color: #828491;
    }
    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: #171717;
        border-color: #171717;
      }
      &:after {
        animation: none;
        border-color: #171717;
      }
      & + span {
        color: #171717;
      }
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: #17171760;
      box-shadow: 0 0 0 2px rgb(233 233 233 / 60%);
    }
    .thumb-input {
      display: none;
    }
    .upload-btn {
      display: inline-block;
      width: 110px;
      height: 32px;
      color: #5360dd;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #d9d9d9;
      transition: none;
      background-color: #fff;
      cursor: pointer;
      .anticon {
        margin-right: 8px;
      }
      &:hover {
        border-color: #5360dd;
      }
      &:active {
        color: #fff;
        background-color: #5360dd;
      }
      &:focus {
        color: #171717;
        border-color: #d9d9d9;
      }
      &:after {
        content: none;
      }
    }
    .file-name {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #828491;
    }
  }
  .form-footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .ant-btn {
      display: block;
      width: 200px;
      height: 48px;
      color: #828491;
      margin-top: 50px;
      margin-left: 32px;
      background-color: #f7f7f7;
      border-color: #d9d9d9;
      transition: 0.2s;
      &:focus {
        background-color: #f7f7f7;
        border-color: #d9d9d9;
      }
      &:hover {
        background-color: #ebebeb;
        color: #171717;
      }
      &:after {
        content: none;
      }
      &-primary {
        color: #fff;
        background-color: #171717;
        &:focus {
          color: #fff;
          background-color: #171717;
        }
        &:hover {
          color: #fff;
          background-color: #2e2f36;
        }
      }
    }
  }
`;

function Write(props) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  const [thumbFile, setThumbFile] = useState('');
  const [heroFile, setHeroFile] = useState('');

  const [data, setData] = useState({
    member: 1,
    type: 'personal',
  });
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setModalType('warning');
    setModal(true);
  };
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
  const getEditorHtml = (html) => {
    setEditorHtml(html);
  };
  const onModalHandler = (state) => {
    setModal(state);
  };
  const ModalType = () => {
    switch (modalType) {
      case 'success':
        return (
          <MsgModal
            type="success"
            heading="Upload"
            message="새 프로젝트가 등록되었습니다."
            submit="OK"
            onModalHandler={onModalHandler}
          />
        );
      case 'warning':
        return (
          <MsgModal
            type="warning"
            heading="Upload"
            message="새 프로젝트 등록에 실패했습니다. 빈칸을 채워주세요."
            submit="OK"
            onModalHandler={onModalHandler}
          />
        );
      default:
        return null;
    }
  };
  const onSubmitHandler = (e) => {
    const formData = new FormData();
    formData.append('thumb-image', thumbFile);
    formData.append('hero-image', heroFile);

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
      html: data.html,
      lock: check,
    };

    dispatch(postNote(body)).then((response) => {
      if (response.payload.success) {
        console.log('submitbody', response.payload);

        const res = axios
          .post('/api/posts/upload', formData)
          .then((res) => console.log('formData', res));
        console.log('upload res', res);

        setModalType('success');
        setModal(true);
      } else if (!response.payload.success) {
        setModalType('warning');
        setModal(false);
      } else {
        console.log(`there's no payload`);
      }
    });
  };

  const onChangeUpload = (e) => {
    if (e.target.id) {
      e.target.id === 'thumb-image' && setThumbFile(e.target.files[0]);
      e.target.id === 'hero-image' && setHeroFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <>
      <AdminHeader title="프로젝트 작성" desc="프로젝트를 작성하여 추가할 수 있습니다." />
      <StyledForm>
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
              id="thumb-image"
              className="thumb-input"
              onChange={onChangeUpload}
              required
              accept="image/*"
            />
            <label htmlFor="thumb-image" className="thumb-label">
              <span className="upload-btn">
                <UploadOutlined />
                Upload
              </span>
            </label>
            <div className="file-name">{thumbFile.name}</div>
          </Form.Item>

          <Form.Item label="대표 이미지" className="half">
            <input
              type="file"
              id="hero-image"
              className="thumb-input"
              onChange={onChangeUpload}
              accept="image/*"
              required
            />
            <label htmlFor="hero-image" className="thumb-label">
              <span className="upload-btn">
                <UploadOutlined />
                Upload
              </span>
            </label>
            <span className="file-name">{heroFile.name} </span>
          </Form.Item>

          <WriteEditor getEditorHtml={getEditorHtml} />

          <div className="form-footer">
            <Button>나가기</Button>
            <Button type="primary" htmlType="submit">
              프로젝트 등록
            </Button>
          </div>
        </Form>

        {modal && <ModalType />}
      </StyledForm>
    </>
  );
}

export default React.memo(Write);
