import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { setPosts, setLoadingFalse, setLoadingTrue } from '~/store/ducks/posts';
import api from '~/services/api';

import SEO from '~/components/SEO';
import Spinner from '~/components/Spinner';
import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';

export default function Home({ search, tags, page, categories }) {
  const dispatch = useDispatch();
  const Router = useRouter();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function loadPosts() {
      dispatch(setLoadingTrue());

      const { data, headers } = await api.get('/posts', {
        params: {
          orderby: 'relevance',
          search,
          tags,
          page,
          categories,
        },
      });

      dispatch(setPosts(data));
      setMaxPage(parseInt(headers['x-mc-total-pages'], 10));
      dispatch(setLoadingFalse());
    }

    loadPosts();
  }, [search, tags, page, categories]);

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
    <>
      <SEO metas={{ title: 'mcontigo' }} />

      {loading ? (
        <Spinner size={32} color="secondary" />
      ) : (
        posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))
      )}

      {page && posts.length > 0 && !loading ? (
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
    </>
  );
}

Home.getInitialProps = context => {
  return {
    search: context.query.search,
    tags: context.query.tags,
    categories: context.query.categories,
    page: context.query.page,
  };
};
