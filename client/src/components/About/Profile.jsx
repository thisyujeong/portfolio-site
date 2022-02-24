import React from 'react';
import { ProfileContainer } from './Profile.style';
import { links } from '../../data/about';

function Profile(props) {
  const Links = () => {
    return links.map((link, idx) => (
      <li>
        <a key={idx} href={link.link}>
          {link.title}
        </a>
      </li>
    ));
  };

  return (
    <ProfileContainer>
      <div className="title">
        Creative <span>Developer</span>
      </div>
      <div className="info">
        <div className="introduce">
          <p>
            안녕하세요. 프론트엔드 개발자를 꿈꾸는 이유정입니다. <br /> 디자인과 퍼블리셔
            경험으로 웹의 전반적인 지식을 가지고 있습니다. 서비스와 사용자를 연결하는
            프론트엔드 분야에 관심이 많습니다. 데이터와 동적 요소들로부터 서비스와 사용자
            간 상호작용을 통해 긍정적인 경험을 제공하고, 동시에 서비스의 본질을 온전히
            보여줄 수 있는 프론트엔드 개발자가 되는 것이 저의 목표입니다.
          </p>
        </div>
        <div className="etc">
          <div className="contact">
            <div className="label">CONTACT ME!</div>
            <p>함께 특별한 경험을 만들어요.</p>
            <div className="personal">
              <div>t0702@gmail.com</div>
              <div>+82&#41; 9072 5239</div>
              <div>Seoul, South Korea</div>
            </div>
          </div>
          <div className="links">
            <div className="label">LINKS</div>
            <ul>
              <Links />
            </ul>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
