import React from 'react';
import Link from 'next/link';

import Chip from '@material-ui/core/Chip';

export default function Tags({ tags }) {
  return (
    <>
      {tags.length > 0
        ? tags.map(tag => (
            <Link
              key={tag.id}
              href={{
                pathname: '/',
                query: { page: 1, tags: tag.id },
              }}
            >
              <a>
                <Chip
                  color="primary"
                  size="small"
                  label={tag.name}
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                />
              </a>
            </Link>
          ))
        : null}
    </>
  );
}
