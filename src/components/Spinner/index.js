import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 28px;
`;

export default function Spinner({ ...props }) {
  return (
    <Container>
      <CircularProgress {...props} />
    </Container>
  );
}
