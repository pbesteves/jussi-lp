import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  overflow-x: scroll;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  cursor: grab;
  transform: translate3d(0, 0, 0);
  .TitleWrapper {
    display: flex;
    span {
      margin-right: 0.25rem;
    }
  }

  .SolutionWrapper {
    display: flex;
    gap: 1.25rem;

    ul {
      list-style-type: initial;
      margin-left: 0.7rem;
      li {
        line-height: 18px;
        &::marker {
          font-size: 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 80em) {
    padding-top: 3.5rem;
    gap: 1.5rem;
    margin: 0 7.35rem;
    overflow-x: hidden;
    cursor: default;
  }

  @media only screen and (min-width: 90em) {
    margin: 0 11.75rem;
  }
`;
