import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray};
  cursor: grab;
  scroll-behavior: smooth;
  
  img {
      margin-right: 3rem;
  }

  @media only screen and (min-width: 80em) {
      cursor: default;
      justify-content: center;
  }
`;
