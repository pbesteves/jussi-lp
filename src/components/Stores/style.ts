import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.gray};
  cursor: grab;
  scroll-behavior: smooth;

  img {
    margin-right: 3rem;
  }

  @media only screen and (min-width: 80em) {
    cursor: default;
    padding-left: 8.55rem;
  }
  @media only screen and (min-width: 90em) {
    cursor: default;
    padding-left: 11rem;
  }
`;