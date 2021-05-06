import styled from "styled-components";
import { HeaderComponent } from "../Header/style";
import { ButtonProps } from "./button";
import { Wrapper as SolutionsWrapper } from "../Solutions/style";

export const ButtonComponent = styled.button<ButtonProps>`
  background: ${({ renderMode, theme }) =>
    renderMode === "solid" ? theme.colors.jussiGreen : "none"};
  border: ${({ renderMode, theme }) =>
    renderMode === "outline" ? `1px solid ${theme.colors.black}` : 0};

  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius.xs};
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  padding: 0.75rem 1.2rem;

  ${HeaderComponent} & {
    padding: 0;
  }

  ${SolutionsWrapper} {
    
  }
`;
