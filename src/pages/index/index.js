import React, { useEffect } from 'react';
import Link from 'next/link';

import { Container } from './styles';

export default function Home({ search }) {
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Container>
      <h1>Page</h1>

      <Link href="/login">
        <a>back</a>
      </Link>
    </Container>
  );
}

Home.getInitialProps = context => {
  return { search: context.query.search };
};
