import React from 'react';
import Router from 'next/router';

import api from '~/services/api';

import SEO from '~/components/SEO';

export default function withSEO(Component) {
  return class extends React.Component {
    static async getInitialProps({ query, res }) {
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
    }

    render() {
      const { post } = this.props;

      return (
        <>
          <SEO metas={post.metas} />
          <Component post={post} />
        </>
      );
    }
  };
}
