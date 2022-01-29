import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postEdit, postInfo, postNote } from '../_actions/post_action';
import { ProjectFormContainer } from './ProjectForm.style';
import WriteEditor from './Admin/WriteEditor';
import WriteViewer from './Admin/WriteViewer';
import MsgModal from './MsgModal/MsgModal';
import axios from 'axios';

function ProjectForm({ action, param }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(''); // success | warning | error
  const [thumbFile, setThumbFile] = useState(null); // thumbnail image file
  const [heroFile, setHeroFile] = useState(null); // hero image file
  const [errMessage, setErrMessage] = useState(''); // error message
  // eslint-disable-next-line no-unused-vars
  const [editorHtml, setEditorHtml] = useState('');
  const [markdown, setMarkdown] = useState('');

  const [data, setData] = useState({
    title: '',
    info: '',
    type: 'personal',
    tech: '',
    git: '',
    site: '',
    due: '',
    role: '',
    member: 1,
    desc: '',
    markdown: '',
    lock: false,
  });

  /* form onChange & toast ui */
  const onChangeCheck = (e) => {
    setCheck(e.target.checked);
  };
  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const getEditorHtml = (html) => {
    setEditorHtml(html);
  };
  const getMarkDown = (markdown) => {
    setMarkdown(markdown);
  };

  useEffect(() => {
    if (action === 'edit') {
      dispatch(postInfo(param)).then((response) => {
        // console.log('post info:', response.payload.post);
        const _post = response.payload.post;
        setData({
          ...data,
          title: _post.title,
          type: _post.type,
          info: _post.info,
          tech: _post.tech.join(', '),
          git: _post.git,
          site: _post.site,
          due: _post.due,
          role: _post.role,
          desc: _post.desc,
          member: _post.member,
          markdown: _post.markdown,
          lock: _post.lock,
          heroName: _post.heroName,
          thumbName: _post.heroName,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, dispatch, param]);

  /* onSubmit */
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (action === 'write') {
      // 첨부된 파일이 없다면 warning
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
    }

    if (action === 'edit') {
      console.log('edit edit');
      const formData = new FormData();
      formData.append('thumb', thumbFile);
      formData.append('hero', heroFile);

      console.log('formData', formData);

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

      dispatch(postEdit(param, body)).then((response) => {
        console.log('postEdit response:', response.payload);
        if (response.payload.success) {
          axios.post(`/api/upload/${data.title}`, formData);
          history.push('/admin/projects');
        }
      });
    }
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

  const onChangeUpload = (e) => {
    if (e.target.id) {
      e.target.id === 'thumb' && setThumbFile(e.target.files[0]);
      e.target.id === 'hero' && setHeroFile(e.target.files[0]);
    }
  };

  const SubmitButtons = (e) => {
    let text = action === 'write' ? '프로젝트 등록' : '프로젝트 수정';
    return (
      <button className="submit" type="submit">
        {text}
      </button>
    );
  };

  return (
    <>
      <ProjectFormContainer>
        <form onSubmit={onSubmitHandler}>
          <label className="half">
            <span className="label">프로젝트 명</span>
            <input
              value={data.title}
              type="text"
              name="title"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">프로젝트 타입</span>
            <div className="select">
              <select name="type" id="type" onChange={onChangeInput} value={data.type}>
                <option value="personal" defaultValue>
                  Personal
                </option>
                <option value="team">Team</option>
              </select>
            </div>
          </label>

          <label className="half">
            <span className="label">프로젝트 소개</span>
            <input
              value={data.info}
              type="text"
              name="info"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">사용 기술</span>
            <input
              value={data.tech}
              type="text"
              name="tech"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">깃허브 URL</span>
            <input
              value={data.git}
              type="text"
              name="git"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">사이트 URL</span>
            <input
              value={data.site}
              type="text"
              name="site"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">참여 인원</span>
            <div className="select">
              <select
                name="member"
                id="member"
                onChange={onChangeInput}
                value={`${data.member}`}
              >
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </label>

          <label className="half">
            <span className="label">작업 기간</span>
            <input
              value={data.due}
              type="text"
              name="due"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">업무 범위</span>
            <input
              value={data.role}
              type="text"
              name="role"
              onChange={onChangeInput}
              required
            />
          </label>

          <label className="half">
            <span className="label">공개 여부</span>
            <input
              type="checkbox"
              name="lock"
              onChange={onChangeCheck}
              defaultChecked={`${data.lock}`}
            />
            <span>비공개</span>
          </label>

          <label>
            <span className="label">프로젝트 설명</span>
            <textarea
              value={data.desc}
              type="textarea"
              name="desc"
              onChange={onChangeInput}
              rows="5"
              required
            />
          </label>
          <div className="upload-wrapper half">
            <label htmlFor="thumb" className="thumb-label">
              <span className="label">썸네일 등록</span>
              <div className="upload-box">
                {action === 'write' ? (
                  <input
                    type="file"
                    id="thumb"
                    name="thumb"
                    className="thumb-input"
                    onChange={onChangeUpload}
                    accept="image/*"
                    required
                  />
                ) : (
                  <input
                    type="file"
                    id="thumb"
                    name="thumb"
                    className="thumb-input"
                    onChange={onChangeUpload}
                    accept="image/*"
                  />
                )}

                <span className="upload-btn">Upload</span>
              </div>
            </label>
            {thumbFile ? (
              <div className="file-name">{thumbFile.name}</div>
            ) : (
              <div className="file-name">{data.thumbName}</div>
            )}
          </div>
          <div className="upload-wrapper half">
            <label htmlFor="hero" className="hero-label">
              <span className="label">대표 이미지</span>
              <div className="upload-box">
                {action === 'write' ? (
                  <input
                    type="file"
                    id="hero"
                    name="hero"
                    className="hero-input"
                    onChange={onChangeUpload}
                    accept="image/*"
                    required
                  />
                ) : (
                  <input
                    type="file"
                    id="hero"
                    name="hero"
                    className="hero-input"
                    onChange={onChangeUpload}
                    accept="image/*"
                  />
                )}
                <span className="upload-btn">Upload</span>
              </div>
            </label>
            {heroFile ? (
              <div className="file-name">{heroFile.name}</div>
            ) : (
              <div className="file-name">{data.heroName}</div>
            )}
          </div>

          <WriteEditor
            action={action}
            editContent={data.markdown}
            getEditorHtml={getEditorHtml}
            getMarkDown={getMarkDown}
            title={data.title}
          />

          <WriteViewer />
          <div className="form-footer">
            <button onClick={() => history.push('/admin/projects')}>나가기</button>
            <SubmitButtons />
          </div>
        </form>
        {modal && <ModalType />}
      </ProjectFormContainer>
    </>
  );
}

export default React.memo(ProjectForm);
