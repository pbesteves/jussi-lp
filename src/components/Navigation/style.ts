import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem 0;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem 0;
    align-items: center;
    justify-content: center;
  }

  @supports not (gap: 3rem 0) {
    ul {
      margin-bottom: 3rem;
    }
  }
`;
