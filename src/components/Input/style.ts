import styled from "styled-components";
import { InputProps } from "./input";

export const Label = styled.label`
  display: inline-flex;
  position: relative;

  .SearchIcon {
    position: absolute;
    right: 1.1875rem;
    top: 0.3125rem;
  }
`;
export const TextInputComponent = styled.input<InputProps>`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  padding: 8px 16px;
  &::placeholder {
    color: ${({ placeholderColor, theme }) =>
      placeholderColor ? placeholderColor : theme.colors.jussiPink};
  }
  font-family: ${({ theme }) => theme.fonts};
`;
