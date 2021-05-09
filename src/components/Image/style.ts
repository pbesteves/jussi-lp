import styled from "styled-components";
import { Wrapper as AboutWrapper } from "../About/style";
import { Result } from "../Search/SearchResult/style";
import { Wrapper as SolutionsWrapper } from "../Solutions/style";
export const ImageComponent = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  ${SolutionsWrapper} & {
    border-radius: 50%;
    margin-bottom: 3.3125rem;
  }

  ${AboutWrapper} & {
    width: 58%;

    @media only screen and (min-width: 48em) {
      width: 84%;
    }

    @media only screen and (min-width: 80em) {
      width: 80%;
    }

    @media only screen and (min-width: 90em) {
      width: 100%;
    }
  }

  ${Result} & {
    grid-area: thumbnail;
  }
`;

export const Picture = styled.picture`
  ${AboutWrapper} & {
    display: none;

    @media only screen and (min-width: 48em) {
      display: flex;
      justify-content: flex-end;
      align-self: center;
      justify-self: baseline;

      grid-row: 1 / span 4;
      grid-column: 2;
    }

    @media only screen and (min-width: 80em) {
      margin-right: 0;
      justify-self: end;
    }

    @media only screen and (min-width: 90em) {
      grid-column: 2;
      grid-row: 1 / span 3;
      margin-right: 0;
    }
  }
`;
