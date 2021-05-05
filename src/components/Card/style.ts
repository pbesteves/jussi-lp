import styled from "styled-components";
import { BannerCardsContainer } from "../Banner/BannerCards/style";
import { ButtonComponent } from "../Button/style";

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
`;
