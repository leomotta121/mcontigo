import React from 'react';

export default function SEO({ metas }) {
  const { title, description } = metas;
  return (
    <>
      {metas['twitter:card'] && (
        <meta property="twitter:card" content={metas['twitter:card']} />
      )}
      {metas['twitter:site'] && (
        <meta property="twitter:site" content={metas['twitter:site']} />
      )}
      {metas['twitter:creator'] && (
        <meta property="twitter:creator" content={metas['twitter:creator']} />
      )}
      {description && <meta name="twitter:description" content={description} />}
      {title && <meta name="twitter:title" content={title} />}
      {metas['og:image'] && (
        <meta name="twitter:image" content={metas['og:image']} />
      )}
    </>
  );
}
