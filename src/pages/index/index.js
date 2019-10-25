import React, { useEffect } from 'react';
import Link from 'next/link';
import api from '~/services/api';

import { Container } from './styles';

export default function Home({ search, tags, page }) {
  useEffect(() => {
    async function loadPosts() {
      const { data, headers } = await api.get('/posts', {
        params: {
          orderby: 'relevance',
          search,
          tags,
          page,
        },
      });

      console.log(data, headers, page);
    }

    loadPosts();
  }, [search, tags, page]);

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
  return {
    search: context.query.search,
    tags: context.query.tags,
  };
};
