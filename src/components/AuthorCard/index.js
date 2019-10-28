import React from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Container, AuthorDescription } from './styles';

export default function AuthorCard({ author }) {
  let picture;

  if (author.picture.includes('https')) {
    picture = author.picture;
  } else {
    picture = `https://dev.mejorconsalud.com${author.picture}`;
  }

  return (
    <Container>
      <Typography variant="h6" color="textPrimary" component="h2">
        {author.name}
      </Typography>

      <Avatar
        src={picture}
        alt={author.name}
        style={{ width: '60px', height: '60px' }}
      />

      <AuthorDescription
        dangerouslySetInnerHTML={{
          __html: author.description ? author.description : null,
        }}
      />
    </Container>
  );
}
