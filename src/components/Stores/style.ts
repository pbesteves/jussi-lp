import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.gray};
  cursor: grab;
  scroll-behavior: smooth;
  transform: translate3d(0, 0, 0);

  .Content {
    display: flex;
    max-width: 1024px;
    align-items: center;
  }

  img {
    margin-right: 3rem;
  }

  @media only screen and (min-width: 80em) {
    cursor: default;
    padding-left: 8.55rem;
    overflow-x: hidden;
  }

  @media only screen and (min-width: 90em) {
    cursor: default;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;

    .Content {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
