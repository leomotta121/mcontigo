import styled from 'styled-components';

function isEven(n) {
  return n % 2 === 0;
}

export const Container = styled.div`
  margin: 20px auto 20px auto;
  max-width: 768px;

  @media only screen and (max-width: 700px) {
    max-width: 420px;
  }

  .MuiPaper-root {
    display: flex;
    flex-direction: ${props => (isEven(props.index) ? 'row-reverse' : 'row')};

    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

  .MuiCardMedia-root {
    height: 252px;
    min-width: 252px;
  }

  .flex-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .MuiCardActions-root {
    padding: 1em;

    a {
      margin-left: ${props => (isEven(props.index) ? '0' : 'auto')};
      margin-right: ${props => (isEven(props.index) ? 'auto' : '0')};

      @media only screen and (max-width: 700px) {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
`;
