import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.jussiPink};
  width: 100%;
  padding: 3rem 0.7rem;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
    line-height: 40px;
  }

  span {
    margin-bottom: 0.5rem;
    line-height: 24px;
  }

  @media only screen and (min-width: 48em) {
      padding: 8.5rem 0;
      h2 {
          width: 31ch;
      }
  }
`;
