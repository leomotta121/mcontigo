import React from 'react';
import Router from 'next/router';

import api from '~/services/api';

import PostContent from '~/components/PostContent';
import SEO from '~/components/SEO';

export default function Post({ post }) {
  return (
    <>
      <SEO metas={post.metas} />
      <PostContent post={post} />
    </>
  );
}

Post.getInitialProps = async ({ query, res }) => {
  try {
    const { data } = await api.get(`/posts/${query.slug}`);

    return {
      post: data,
    };
  } catch (error) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      });
      res.end();
    } else {
      Router.push('/');
    }

    return {};
  }
};
