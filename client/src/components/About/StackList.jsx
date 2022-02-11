import React from 'react';
import { StackListContainer } from './StackList.style';
import { front, back, database, etc } from '../../data/about';

function StackList(props) {
  const Front = () => (
    <div className="stack-box">
      <div className="label">프론트엔드</div>
      <ul>
        {front.map((li, idx) => (
          <li key={idx}>
            <div className="stack">
              <div className="logo">
                <img src={li.icon} alt={`${li.title}-logo`} />
              </div>
              {li.title}
            </div>
            <p className="desc">{li.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const Back = () => (
    <div className="stack-box">
      <div className="label">백엔드</div>
      <ul>
        {back.map((li, idx) => (
          <li key={idx}>
            <div className="stack">
              <div className="logo">
                <img src={li.icon} alt={`${li.title}-logo`} />
              </div>
              {li.title}
            </div>
            <p className="desc">{li.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const Database = () => (
    <div className="stack-box">
      <div className="label">데이터베이스</div>
      <ul>
        {database.map((li, idx) => (
          <li key={idx}>
            <div className="stack">
              <div className="logo">
                <img src={li.icon} alt={`${li.title}-logo`} />
              </div>
              {li.title}
            </div>
            <p className="desc">{li.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const Etc = () => (
    <div className="stack-box">
      <div className="label">ETC</div>
      <ul>
        {etc.map((li, idx) => (
          <li key={idx}>
            <div className="stack">
              <div className="logo">
                <img src={li.icon} alt={`${li.title}-logo`} />
              </div>
              {li.title}
            </div>
            <p className="desc">{li.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <StackListContainer>
      <div className="title">Capability</div>
      <Front />
      <Back />
      <Database />
      <Etc />
    </StackListContainer>
  );
}

export default StackList;
