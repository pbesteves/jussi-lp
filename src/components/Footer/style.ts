import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;

  @media only screen and (min-width: 48em) {
    justify-content: center;
    gap: 24rem;
  }

  @media only screen and (min-width: 80em) {
    gap: 47rem;
  }
`;
