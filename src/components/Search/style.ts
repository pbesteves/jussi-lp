import styled from "styled-components";
import { HeaderComponent } from "../Header/style";
import { SearchBarProps } from "./searchBar";

export const Wrapper = styled.div<SearchBarProps>`
  position: relative;
  display: flex;
  justify-content: center;
  visibility: ${({ expanded }) => (expanded ? "visible" : "hidden")};
  height: ${({ expanded }) => (expanded ? "auto" : 0)};
  padding: ${({ expanded }) => (expanded ? "0.5rem 0" : 0)};
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 80em) {
    display: none;
  }

  ${HeaderComponent} & {
    display: none;
    @media only screen and (min-width: 80em) {
      display: flex;
      flex-direction: column;
      max-width: 240px;
      grid-area: search;
      height: auto;
      visibility: visible;
    }
  }
`;
