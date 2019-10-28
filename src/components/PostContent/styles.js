import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;

  img {
    display: block;
    margin: 20px auto;
    width: 100%;
    max-width: 800px;
    max-height: 800px;
  }

  .categorie {
    margin: 20px 0;

    a {
      text-decoration: none;
      color: blue;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  font-size: 18px;
  margin: 20px 0;

  p {
    margin-top: 20px;
  }

  img {
    display: block;
    margin: 25px auto;
    width: 100%;
    max-width: 800px;
    max-height: 800px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: blue;

    &:hover {
      text-decoration: underline;
    }
  }
`;
