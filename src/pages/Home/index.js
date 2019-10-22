import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

Home.getInitialProps = async () => {
  const { data } = await api.get('/posts?orderby=relevance');

  return {
    posts: data,
  };
};
