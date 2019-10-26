import React from 'react';
import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

import { Container } from './styles';

export default function PostCard({ post, index }) {
  return (
    <Container index={index}>
      <Card>
        <CardMedia image={post.featured_media.medium} title={post.title} />

        <div className="flex-group">
          <CardContent>
            <Link href={`/${post.slug}`}>
              <a>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="h2"
                >
                  {post.title}
                </Typography>
              </a>
            </Link>

            <Typography variant="body2" color="textSecondary" component="p">
              {post.excerpt}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/${post.slug}`}>
              <a>
                <Typography variant="body2" color="textPrimary" component="p">
                  Read more
                </Typography>
              </a>
            </Link>
          </CardActions>
        </div>
      </Card>
    </Container>
  );
}
