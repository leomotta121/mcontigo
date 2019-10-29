import React from 'react';
import Link from 'next/link';

import { LinkedIn, Twitter, Instagram, Facebook } from '@material-ui/icons';
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

      <div className="social">
        {author.social_profiles.twitter && (
          <a
            href={author.social_profiles.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        )}

        {author.social_profiles.facebook && (
          <a
            href={author.social_profiles.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        )}

        {author.social_profiles.instagram && (
          <a
            href={author.social_profiles.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        )}

        {author.social_profiles.linkedin && (
          <a
            href={author.social_profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        )}
      </div>
    </Container>
  );
}
