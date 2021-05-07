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
      grid-column: 1 / 2;
      justify-self: start;
      margin-left: 1.2rem;
      grid-row: 1;
      padding: 2rem 0;

      h2 {
        width: 11ch;
        align-self: start;
      }

      p {
        width: 26ch;
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
      margin-left: 8.5rem;
      padding-top: 0;
      padding-bottom: 3.7rem;
    }
  }

  @media only screen and (min-width: 90em) {
    grid-template-rows: 44.375rem;
    .About {
      margin-left: 13rem;
    }
    .RightBlock {
      background: ${({ theme }) => theme.colors.gray};
      display: block;
    }
  }
`;
