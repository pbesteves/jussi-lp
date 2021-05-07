import styled from "styled-components";
import { Wrapper as ContactWrapper } from "../Contact/style";
import { Result } from "../Search/SearchResult/style";
import { Wrapper as StoresWrapper } from "../Stores/style";
import { TextProps } from "./text";

export const TextComponent = styled.span<TextProps>`
  align-items: center;
  color: ${({ color, theme }) => (color ? theme.colors[color] : "black")};
  display: flex;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize, theme }) => theme.fontSizes[fontSize || "regular"]};
  font-weight: ${({ fontWeight, theme }) =>
    theme.fontWeights[fontWeight || "regular"]};

  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
  width: ${({ width }) => width};

  ${StoresWrapper} & {
    flex-shrink: 0;
    margin-right: 3rem;
  }

  ${ContactWrapper} & {
    text-align: left;

    @media only screen and (min-width: 48em) {
      text-align: center;
    }
  }

  ${Result} & {
    font-family: ${({ theme }) => theme.fonts};
    width: 13.9ch;
  }
`;
