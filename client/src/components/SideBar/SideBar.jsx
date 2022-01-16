import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { EditOutlined, CloudOutlined, BranchesOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledSideBar = styled.section`
  position: fixed;
  top: 60px;
  height: calc(100vh - 60px);
  color: #828491;
  border-right: 1px solid rgba(29, 29, 29, 0.1);
  background-color: #f7f7f7;
  .ant-menu {
    padding: 36px 0;
  }
  .ant-menu-item {
    position: relative;
    padding: 7px 38px;
    cursor: pointer;
    .anticon {
      margin-left: 0.5em;
      margin-right: 0.5em;
      transition: 0.3s;
    }

    &-active {
      background-color: #ebebeb;
      color: #171717;
    }
    &-selected {
      color: #171717;
      .anticon {
        margin-left: 1em;
      }
      &:before {
        width: 4px;
        height: 100%;
        background-color: #171717;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        content: '';
      }
    }
    & + .ant-menu-item {
      margin-top: 4px;
    }
  }
`;

function SideBar(props) {
  const [current, setCurrent] = useState('version');

  const handleClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  };

  return (
    <StyledSideBar>
      <Menu
        onClick={handleClick}
        selectedKeys={current}
        mode="inline"
        style={{ width: 300 }}
      >
        <Menu.Item key="version" icon={<BranchesOutlined />}>
          사이트 버전 관리
        </Menu.Item>
        <Menu.Item key="manage" icon={<CloudOutlined />}>
          프로젝트 관리
        </Menu.Item>

        <Menu.Item key="write" icon={<EditOutlined />}>
          프로젝트 작성
        </Menu.Item>
      </Menu>
    </StyledSideBar>
  );
}

export default React.memo(SideBar);
