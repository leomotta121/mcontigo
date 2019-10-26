import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import PostCard from '~/components/PostCard';

import { Container } from './styles';

export default function Home({ search, tags, page }) {
  const [posts, setPosts] = useState([]);

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

      setPosts(data);
    }

    loadPosts();
  }, [search, tags, page]);

  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}
    </Container>
  );
}

Home.getInitialProps = context => {
  return {
    search: context.query.search,
    tags: context.query.tags,
    page: context.query.page,
  };
};
