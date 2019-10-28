import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';

import CalendarToday from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tags from '~/components/Tags';
import AuthorCard from '~/components/AuthorCard';

import { Container, ContentContainer } from './styles';

export default function PostContent({ post }) {
  const date = parseISO(post.published);
  const formattedDate = format(date, "dd MMMM' ,' yyyy", {
    locale: es,
  });
  const a = [];
  const media = post.featured_media.large
    ? post.featured_media.large
    : post.featured_media['big-size'];

  return (
    <Container>
      {post.categories
        ? post.categories.map((categorie, index) => (
            <div key={categorie.id} className="categorie">
              <Link
                href={{
                  pathname: '/',
                  query: { page: 1, categories: categorie.id },
                }}
              >
                <a>{categorie.name}</a>
              </Link>
              {index > 0 && index + 1 === post.categories.length ? '>>' : null}
            </div>
          ))
        : null}

      <Typography variant="h4" color="textPrimary" component="h1">
        {post.title}
      </Typography>

      <Typography
        variant="body1"
        color="textSecondary"
        component="small"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <CalendarToday style={{ marginRight: '10px' }} /> {formattedDate}
      </Typography>

      <img src={media} alt={post.title} />

      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        align="center"
      >
        {post.headline ? post.headline : null}
      </Typography>

      <ContentContainer dangerouslySetInnerHTML={{ __html: post.content }} />

      <Tags tags={post.tags} />

      <Divider style={{ margin: '20px 0' }} />

      <AuthorCard author={post.author} />
    </Container>
  );
}
