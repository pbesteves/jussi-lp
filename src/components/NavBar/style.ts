import styled from "styled-components";

export const NavbarComponent = styled.ul`
  display: none;
  width: 100%;

  @media only screen and (min-width: 48em) {
    display: flex;
    font-family: ${({ theme }) => theme.fonts};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 24px;

    li:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;
