import styled from "styled-components";
import { ButtonProps } from "./button";

export const ButtonComponent = styled.button<ButtonProps>`
  background: ${({ renderMode, theme }) =>
    renderMode === "solid" ? theme.colors.jussiGreen : theme.colors.white};
  border: ${({ renderMode, theme }) =>
    renderMode === "outline" ? `1px solid ${theme.colors.black}` : 0};
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts};
  font-size: ${({ theme }) => theme.fontSizes.regular };
`;
