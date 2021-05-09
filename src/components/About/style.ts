import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.colors.gray};
  padding: 1.2rem;

  .RightBlock {
    display: none;
  }

  .About {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h2 {
      line-height: 40px;
    }

    p {
      line-height: 24px;
      align-self: start;
    }

    button {
      align-self: start;
    }
  }

  @media only screen and (min-width: 48em) {
    background: ${({ theme }) => theme.colors.white};
    padding: 0;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    align-items: center;

    .About {
      grid-column: 1 / span 3;
      justify-self: center;
      margin-left: 0;
      grid-row: 1;
      padding: 0;
      display: grid;
      grid-template-columns: 240px 463px;

      h2 {
        width: 11ch;
        align-self: start;
        grid-row: 1;
        grid-column: 1;
      }

      p {
        width: 26ch;
        grid-row: 2;
        grid-column: 1;
      }
    }

    .RightBlock {
      background: ${({ theme }) => theme.colors.gray};
      display: block;
      grid-column: 2 / 3;
      width: 100%;
      grid-row: 1;
      height: 100%;
    }
  }

  @media only screen and (min-width: 80em) {
    .About {
      grid-template-columns: 348px 676px;
      gap: 1.5rem 0;
      margin-left: 1.25rem;
      padding-top: 0;
      padding: 0;
    }
  }

  @media only screen and (min-width: 90em) {
    grid-template-rows: 44.375rem;
    .About {
      display: grid;
      grid-column: 1 / span 3;
      gap: 1.5rem 6.6875rem;
      justify-self: center;
      margin-left: 0;
      padding: 0;
      grid-template-columns: 241px 676px;

      h2 {
        grid-row: 1;
        grid-column: 1;
      }

      p {
        grid-row: 2;
        grid-column: 1;
      }
    }

    .RightBlock {
      background: ${({ theme }) => theme.colors.gray};
      display: block;
    }
  }
`;
