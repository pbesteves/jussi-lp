import styled from "styled-components";
import { BannerCardsContainer } from "../Banner/BannerCards/style";
import { ButtonComponent } from "../Button/style";
import { Wrapper as SolutionsWrapper } from "../Solutions/style";

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  justify-content: center;

  ${BannerCardsContainer} & {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadows.large};
    align-items: center;
    justify-content: space-between;
    min-height: 271px;
    min-width: 209px;

    ${ButtonComponent} {
      border-color: ${({ theme }) => theme.colors.jussiPink};
      color: ${({ theme }) => theme.colors.jussiPink};
    }
  }

  ${SolutionsWrapper} & {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 1rem;
    gap: 1rem;
    min-width: 241px;

    .ProductImage {
      background: ${({ theme }) => theme.colors.gray};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
    }

    @supports not (gap: 1rem) {
      margin: 1rem 0;
    }
  }
`;
