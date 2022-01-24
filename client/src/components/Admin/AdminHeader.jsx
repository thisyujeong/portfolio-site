import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin-bottom: 80px;
  .ant-breadcrumb {
    margin-bottom: 60px;
    font-size: 16px;
    color: #828491;
    &-link {
    }
    &-separator {
      margin: 0 8px;
    }
    > span:last-child {
      .ant-breadcrumb-link {
        color: #171717;
      }
      .ant-breadcrumb-separator {
        display: none;
      }
    }
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 16px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(29, 29, 29, 0.1);
  }
  p {
    color: #828491;
    font-size: 16px;
  }
`;
function AdminHeader({ title, desc }) {
  return (
    <StyledHeader>
      <Breadcrumb>
        <Breadcrumb.Item>어드민</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </StyledHeader>
  );
}

export default AdminHeader;
