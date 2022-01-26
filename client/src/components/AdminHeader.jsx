import React from 'react';
import { AdminHeaderContainer } from './AdminHeader.style';

function AdminHeader({ title, desc }) {
  return (
    <AdminHeaderContainer>
      <h2>{title}</h2>
      <p>{desc}</p>
    </AdminHeaderContainer>
  );
}

export default AdminHeader;
