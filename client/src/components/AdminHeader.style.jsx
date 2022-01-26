import styled from 'styled-components';

export const AdminHeaderContainer = styled.div`
  margin-bottom: 80px;
  color: ${(props) => props.theme.textColor};

  h2 {
    font-size: 24px;
    font-weight: 500;
    padding-left: 16px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.textColor};
    border-left: 4px solid ${(props) => props.theme.iconColor};
  }

  p {
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
  }
`;
