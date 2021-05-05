import styled from "styled-components";
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
`;
