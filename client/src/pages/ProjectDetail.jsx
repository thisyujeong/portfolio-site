import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProjectContents from '../components/Project/ProjectDetail/ProjectContents';
import { postInfo } from '../_actions/post_action';

function ProjectDetail({ match }) {
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  useEffect(() => {
    dispatch(postInfo(match.params.id)).then((res) => {
      console.log('postinfo', res.payload.post);
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
