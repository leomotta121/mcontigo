import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import Logo from '~/public/mcontigo.svg';
import { Container } from './styles';

export default function Header() {
  const [search, setSearch] = useState('');
  const Router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (search === '') return;

    Router.push({
      pathname: '/',
      query: {
        search,
        page: 1,
      },
    });

    setSearch('');
  }

  return (
    <Container>
      <AppBar>
        <Link href="/" as="/">
          <a>
            <Logo className="logo" />
          </a>
        </Link>

        <form onSubmit={handleSubmit} className="search">
          <button type="submit" className="search-icon">
            <SearchIcon />
          </button>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </AppBar>
    </Container>
  );
}
