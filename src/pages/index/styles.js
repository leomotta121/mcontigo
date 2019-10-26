import styled from 'styled-components';

export const Container = styled.div`
  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    li {
      margin: 0 10px;
    }

    .selected {
      color: blue;
    }

    @media only screen and (max-width: 515px) {
      li {
        display: none;
      }

      .selected,
      .previous,
      .next {
        display: inline;
      }
    }
  }
`;
