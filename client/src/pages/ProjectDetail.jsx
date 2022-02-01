import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProjectContents from '../components/ProjectContents';
import { postInfo } from '../_actions/post_action';

function ProjectDetail({ match }) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: '',
    info: '',
    type: '',
    tech: '',
    git: '',
    site: '',
    due: '',
    role: '',
    member: 0,
    desc: '',
    markdown: '',
    lock: false,
  });

  useEffect(() => {
    dispatch(postInfo(match.params.id)).then((res) => {
      console.log(res.payload.post);
      setPost(res.payload.post);
    });
  }, [dispatch, match.params.id]);

  return (
    <>
      <ProjectContents post={post} key={match.params.id} />
    </>
  );
}

export default ProjectDetail;
