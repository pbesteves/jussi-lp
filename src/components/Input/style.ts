import styled from "styled-components";
import { Wrapper as NewsletterWrapper } from "../Newsletter/style";
import { Wrapper as SearchWrapper } from "../Search/style";
import { InputProps } from "./input";

export const Label = styled.label`
  display: inline-flex;
  position: relative;

  .SearchIcon {
    position: absolute;
    right: 1.1875rem;
    top: 0.3125rem;
  }

  ${NewsletterWrapper} & {
    border: 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.jussiGreen}`};

    @media only screen and (min-width: 40em) {
      width: 57.2ch;
      margin-left: 4.1rem;
    }
  }

  ${SearchWrapper} & {
    width: 30ch;

    svg {
      display: none;
    }

    @media only screen and (min-width: 48em) {
      width: 40ch;
    }

    @media only screen and (min-width: 80em) {
      width: 30ch;

      svg {
        display: block;
      }
    }
  }
`;

export const TextInputComponent = styled.input<InputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts};

  ${SearchWrapper} & {
    border-radius: ${({ theme }) => theme.borderRadius.large};

    &::placeholder {
      color: ${({ placeholderColor, theme }) =>
        placeholderColor ? placeholderColor : theme.colors.jussiPink};
    }
  }

  ${NewsletterWrapper} & {
    background: ${({ theme }) => theme.colors.black};
    border: 0;
    padding: 1.125rem 0;
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ placeholderColor, theme }) =>
        placeholderColor ? placeholderColor : theme.colors.white};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.jussiGreen};
    }
  }
`;
