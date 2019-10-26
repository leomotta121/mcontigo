import React from 'react';

// import { Container } from './styles';

export default function Post({ slug }) {
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

Post.getInitialProps = context => {
  return {
    slug: context.query.slug,
  };
};
