import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { EditOutlined, CloudOutlined, BranchesOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledSideBar = styled.section`
  position: fixed;
  top: 60px;
  height: calc(100vh - 60px);
  border-right: 1px solid rgba(29, 29, 29, 0.1);
  background-color: #f7f7f7;
  .ant-menu {
    height: 100%;
    padding: 36px 0;
    background-color: #f7f7f7;
    .ant-menu-item {
      position: relative;
      padding: 7px 38px;
      padding: 0;
      line-height: unset;
      cursor: pointer;
      .anticon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #828491;
      }
      .anticon + span {
        margin: 0;
      }
      .ant-menu-title-content {
        width: 100%;
        a {
          display: inline-block;
          padding: 7px 30px;
          width: 100%;
          color: #828491;
          font-size: 16px;
          line-height: 1.5;
          &:before {
            content: none;
          }
        }
      }

      &-active {
        background-color: #ebebeb;
        color: #171717;
      }
      &-selected {
        background-color: #ebebeb;
        .anticon,
        .ant-menu-title-content a {
          color: #171717;
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
        &:after {
          content: none;
        }
      }
      & + .ant-menu-item {
        margin-top: 4px;
      }
    }
  }
`;

function SideBar(props) {
  const [current, setCurrent] = useState('v');

  const handleClick = (e) => {
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
        <Menu.Item key="v" icon={<BranchesOutlined />} style={{ paddingLeft: 38 }}>
          <Link to="/admin">사이트 버전 관리</Link>
        </Menu.Item>
        <Menu.Item key="projects" icon={<CloudOutlined />} style={{ paddingLeft: 38 }}>
          <Link to="/admin/projects">프로젝트 관리</Link>
        </Menu.Item>

        <Menu.Item key="write" icon={<EditOutlined />} style={{ paddingLeft: 38 }}>
          <Link to="/admin/write">프로젝트 작성</Link>
        </Menu.Item>
      </Menu>
    </StyledSideBar>
  );
}

export default React.memo(SideBar);
