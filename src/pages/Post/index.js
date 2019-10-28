import React from 'react';
import withSEO from '~/components/withSEO';

import PostContent from '~/components/PostContent';

export const config = { amp: 'hybrid' };

export default withSEO(function Post({ post }) {
  return (
    <>
      <PostContent post={post} />
    </>
  );
});
