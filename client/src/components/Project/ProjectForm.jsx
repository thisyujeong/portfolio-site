import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postEdit, postInfo, postNote } from '../../_actions/post_action';
import { ProjectFormContainer } from './ProjectForm.style';
import WriteEditor from '../WriteEditor';
import WriteViewer from '../WriteViewer';
import MsgModal from '../MsgModal';
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
    type: '',
    info: '',
    tech: '',
    git: '',
    site: '',
    member: 0,
    due: '',
    role: '',
    desc: '',
    markdown: '',
  });

  /* form onChange & toast ui */
  const onChangeCheck = (e) => {
    setCheck(!check);
  };
  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') e.preventDefault();
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
          html: _post.editorHtml,
          lock: _post.lock,
          heroName: _post.heroName,
          thumbName: _post.heroName,
        });
        setMarkdown(_post.markdown);
        setCheck(_post.lock);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, dispatch, param]);

  /* onSubmit */
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (action === 'write') {
      // ????????? ????????? ????????? warning
      const formData = new FormData();
      formData.append('thumb', thumbFile);
      formData.append('hero', heroFile);

      // ????????? upload API ??????
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
        markdown: data.markdown,
        html: editorHtml,
        lock: check,
      };

      dispatch(postNote(body)).then((response) => {
        if (response.payload.overlap) {
          console.log('overlap', response.payload);
          setErrMessage('?????? ???????????? ?????????????????????.');
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
        html: editorHtml,
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
            message="??? ??????????????? ?????????????????????."
            onModalHandler={onModalHandler}
          />
        );
      case 'warning':
        return (
          <MsgModal
            warning
            heading="Upload"
            message="??? ???????????? ????????? ??????????????????. ???????????? ?????? ????????? ???????????????."
            onModalHandler={onModalHandler}
          />
        );
      case 'error':
        return (
          <MsgModal
            error
            heading="Upload"
            message={`??? ???????????? ????????? ??????????????????. ${errMessage}`}
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
    let text = action === 'write' ? '???????????? ??????' : '???????????? ??????';
    return (
      <button className="submit" type="submit">
        {text}
      </button>
    );
  };

  if (!data) return null;

  return (
    <>
      <ProjectFormContainer>
        <form onSubmit={onSubmitHandler}>
          <label className="half">
            <span className="label">???????????? ???</span>
            <input
              value={data.title}
              type="text"
              name="title"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">???????????? ??????</span>
            <div className="select">
              <select
                name="type"
                id="type"
                onChange={onChangeInput}
                value={data.type}
                onKeyPress={onKeyPress}
              >
                <option value="personal" defaultValue>
                  Personal
                </option>
                <option value="team">Team</option>
              </select>
            </div>
          </label>

          <label className="half">
            <span className="label">???????????? ??????</span>
            <input
              value={data.info}
              type="text"
              name="info"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">?????? ??????</span>
            <input
              value={data.tech}
              type="text"
              name="tech"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">????????? URL</span>
            <input
              value={data.git}
              type="text"
              name="git"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">????????? URL</span>
            <input
              value={data.site}
              type="text"
              name="site"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">?????? ??????</span>
            <div className="select">
              <select
                name="member"
                id="member"
                onChange={onChangeInput}
                value={`${data.member}`}
                onKeyPress={onKeyPress}
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
            <span className="label">?????? ??????</span>
            <input
              value={data.due}
              type="text"
              name="due"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">?????? ??????</span>
            <input
              value={data.role}
              type="text"
              name="role"
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              required
            />
          </label>

          <label className="half">
            <span className="label">?????? ??????</span>
            <input
              type="checkbox"
              name="lock"
              onChange={onChangeCheck}
              checked={check}
              onKeyPress={onKeyPress}
            />
            <span>?????????</span>
          </label>

          <label>
            <span className="label">???????????? ??????</span>
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
              <span className="label">????????? ??????</span>
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
              <span className="label">?????? ?????????</span>
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
            <button onClick={() => history.push('/admin/projects')}>?????????</button>
            <SubmitButtons />
          </div>
        </form>
        {modal && <ModalType />}
      </ProjectFormContainer>
    </>
  );
}

export default React.memo(ProjectForm);
