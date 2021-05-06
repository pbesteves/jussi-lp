import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  padding: 3rem 1rem;
  width: 100%;

  h2 {
    width: 18ch;
    line-height: 40px;
    margin-bottom: 2.625rem;
  }
  span {
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 48em) {
    align-items: center;
    .TextWrapper {
      display: flex;
      align-items: baseline;

      span {
        margin-right: 2rem;
      }

      h2 {
        width: 27ch;
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 48em) {
    padding: 8.5rem 0;
  }
`;
