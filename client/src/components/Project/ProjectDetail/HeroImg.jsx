import React, { useEffect, useRef, useState } from 'react';
import { HeroImageContainer } from './HeroImage.style';

function HeroImg({ hero }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [transY, setTransY] = useState(0);
  const thumbWrap = useRef();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let top = thumbWrap.current.getBoundingClientRect().top + scrollTop;
    let parent = thumbWrap.current.parentNode.getBoundingClientRect().height;
    let bottom = top + parent;
    if (document.body.offsetWidth > 600) {
      if (scrollTop > top && scrollTop < bottom) {
        setTransY((scrollTop - top) * 0.87);
      } else if (scrollTop <= top) {
        setTransY(0);
      }
    }
  }, [scrollTop]);

  const onScroll = () => {
    setScrollTop(window.scrollY);
  };

  return (
    <HeroImageContainer ref={thumbWrap} className="thumbnail">
      <img
        className="thumb-img"
        src={hero}
        style={{ transform: `translateY(-${transY}px)` }}
        alt="hero"
      />
    </HeroImageContainer>
  );
}

export default HeroImg;
