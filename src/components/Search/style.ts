import styled from "styled-components";
import { HeaderComponent } from "../Header/style";

export const Wrapper = styled.div`
  position: relative;
  ${HeaderComponent} & {
    display: none;
    @media only screen and (min-width: 80em) {
      display: flex;
      flex-direction: column;
      max-width: 240px;
      grid-area: search;
    }
  }
`;
