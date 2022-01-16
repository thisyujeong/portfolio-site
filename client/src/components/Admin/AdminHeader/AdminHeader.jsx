import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './AdminHeader.module.scss';
import styled from 'styled-components';

const StyledBreadCrumb = styled.div`
  .ant-breadcrumb {
    &-separator {
      color: #828491;
    }
    &-separator:last-child {
      display: none;
    }
  }
`;

function AdminHeader({ title }) {
  return (
    <div className={styles.aHeader}>
      <StyledBreadCrumb>
        <Breadcrumb>
          <Breadcrumb.Item>어드민</Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </StyledBreadCrumb>
    </div>
  );
}

export default AdminHeader;
