import styled from "styled-components";
import { Wrapper as SolutionsWrapper } from "../Solutions/style";

export const ImageComponent = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  ${SolutionsWrapper} & {
    border-radius: 50%;
    margin-bottom: 3.3125rem;
  }
`;
