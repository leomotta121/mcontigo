import React from 'react';

// import { Container } from './styles';

export default function SEO({ metas }) {
  const { schema } = metas;

  return (
    <>
      {metas['article:publisher'] && (
        <meta
          property="article:publisher"
          content={metas['article:publisher']}
        />
      )}
      {metas['article:tag'] && (
        <meta property="article:tag" content={metas['article:tag']} />
      )}
      {metas['article:section'] && (
        <meta property="article:section" content={metas['article:section']} />
      )}
      {schema && (
        <meta
          property="article:published_time"
          content={schema.datePublished}
        />
      )}
      {schema && (
        <meta property="article:modified_time" content={schema.dateModified} />
      )}
    </>
  );
}
