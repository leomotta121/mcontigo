import React from 'react';
import Head from 'next/head';

export default function SEO({ metas }) {
  const { title, description, robots } = metas;

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
      {metas['og:locale'] && (
        <meta property="og:locale" content={metas['og:locale']} />
      )}
    </Head>
  );
}
