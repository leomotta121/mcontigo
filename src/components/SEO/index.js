import React from 'react';
import Head from 'next/head';

import OGTags from './OGTags';
import ArticleMetaTags from './ArticleMetaTags';
import TwitterMetaTags from './TwitterMetaTags';

export default function SEO({ metas }) {
  const { title, description, robots, schema, author, publisher } = metas;
  const baseUrl =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:9045/'
      : 'productions url';

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
      {baseUrl && <link rel="base" href={baseUrl} />}
      {schema && <link rel="canonical" href={schema.url} />}
      {author && <link rel="author" href={author.name} />}
      {publisher && <link rel="publisher" href={publisher.name} />}

      <OGTags metas={metas} />
      <ArticleMetaTags metas={metas} />
      <TwitterMetaTags metas={metas} />
    </Head>
  );
}
