import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import api from '~/services/api';

import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';

import { Container } from './styles';

export default function Home({ search, tags, page }) {
  const Router = useRouter();
  const [posts, setPosts] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

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
      setMaxPage(parseInt(headers['x-mc-total-pages'], 10));
    }

    loadPosts();
  }, [search, tags, page]);

  async function handlePageChange(index) {
    const query = {
      page: index.selected + 1,
    };

    if (search) query.search = search;
    if (tags) query.tags = tags;

    await Router.replace({
      pathname: '/',
      query,
    });
  }

  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}

      {page && posts.length > 0 ? (
        <Pagination
          pageCount={maxPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={index => handlePageChange(index)}
          forcePage={page - 1}
          containerClassName="pagination-container"
          activeLinkClassName="active"
          nextLabel="&#10095;"
          previousLabel="&#10094;"
        />
      ) : null}
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
