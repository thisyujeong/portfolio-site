import React, { useEffect, useRef, useState } from 'react';
import { HeroImageContainer } from './HeroImage.style';

function HeroImg({ hero }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [transY, setTransY] = useState(20);
  const thumbWrap = useRef();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let top = thumbWrap.current.getBoundingClientRect().top + scrollTop;
    if (scrollTop > top / 2.5 && scrollTop <= top) {
      setTransY(((scrollTop - top / 2.5) / (top / 2)) * 30);
    } else if (scrollTop <= top / 2.5) {
      setTransY(0);
    } else if (top < scrollTop) {
      setTransY(38);
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
        style={{ transform: `translateY(-${transY}%)` }}
        alt="hero"
      />
    </HeroImageContainer>
  );
}

export default HeroImg;
