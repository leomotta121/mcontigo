import React from 'react';

export default function SEO({ metas }) {
  const { title, description, schema } = metas;
  return (
    <>
      {metas['og:locale'] && (
        <meta property="og:locale" content={metas['og:locale']} />
      )}
      {metas['og:type'] && (
        <meta property="og:type" content={metas['og:type']} />
      )}
      {metas['og:title'] && <meta property="og:title" content={title} />}
      {metas['og:description'] && (
        <meta property="og:description" content={description} />
      )}
      {metas['og:url'] && <meta property="og:url" content={schema.url} />}
      {metas['og:site_name'] && (
        <meta property="og:site_name" content={metas['og:site_name']} />
      )}
      {metas['og:image'] && (
        <meta property="og:image" content={metas['og:image']} />
      )}
      {metas['og:image:secure_url'] && (
        <meta
          property="og:image:secure_url"
          content={metas['og:image:secure_url']}
        />
      )}
      {metas['og:image:width'] && (
        <meta property="og:image:width" content={metas['og:image:width']} />
      )}
      {metas['og:image:height'] && (
        <meta property="og:image:height" content={metas['og:image:height']} />
      )}
      {schema && (
        <meta property="og:updated_time" content={schema.dateModified} />
      )}
    </>
  );
}
