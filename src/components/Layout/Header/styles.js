import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;

    @media only screen and (max-width: 515px) {
      flex-direction: column;

      justify-content: space-around;

      height: 90px;
    }

    .logo {
      height: 26px;
    }

    .search {
      display: flex;
      align-items: center;
      background: rgb(255, 255, 255, 0.1);
      border-radius: 4px;
      padding: 0 5px;

      input {
        height: 28px;
        margin-left: 3px;
        color: #fff;

        &:focus {
          width: 260px;
        }
      }

      .search-icon {
        svg {
          fill: #fff;
        }
      }
    }
  }
`;
