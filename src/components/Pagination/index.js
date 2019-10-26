import React from 'react';
import ReactPaginate from 'react-paginate';

import { Container } from './styles';

export default function Pagination({ ...props }) {
  return (
    <Container>
      <ReactPaginate {...props} />
    </Container>
  );
}
