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
    padding: 0;
    cursor: pointer;
    .anticon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .ant-menu-title-content {
      width: 100%;
      a {
        display: inline-block;
        padding: 7px 30px;
        width: 100%;
      }
    }

    &-active {
      background-color: #ebebeb;
      color: #171717;
    }
    &-selected {
      color: #171717;
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
  const [current, setCurrent] = useState('v');

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
        <Menu.Item key="v" icon={<BranchesOutlined />}>
          <Link to="/admin/v">사이트 버전 관리</Link>
        </Menu.Item>
        <Menu.Item key="projects" icon={<CloudOutlined />}>
          <Link to="/admin/projects">프로젝트 관리</Link>
        </Menu.Item>

        <Menu.Item key="write" icon={<EditOutlined />}>
          <Link to="/admin/write">프로젝트 작성</Link>
        </Menu.Item>
      </Menu>
    </StyledSideBar>
  );
}

export default React.memo(SideBar);
