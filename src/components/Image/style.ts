import styled from "styled-components";
import { Wrapper as AboutWrapper } from "../About/style";
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

    @media only screen and (min-width: 90em) {
      width: 100%;
    }
  }
`;

export const Picture = styled.picture`
  ${AboutWrapper} & {
    grid-column: 1 / -1;
    grid-row: 1;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    justify-self: baseline;

    @media only screen and (min-width: 90em) {
      margin-right: 13rem;
      justify-self: end;
    }
  }
`;
