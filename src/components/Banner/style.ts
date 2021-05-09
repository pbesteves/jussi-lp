import styled from "styled-components";
import { BannerCardsContainer } from "./BannerCards/style";

export const BannerComponent = styled.section`
  background: ${({ theme }) => theme.colors.jussiGreen};
  width: 100%;
  padding: 2.5rem 1.338rem;
  display: flex;
  align-items: start;
  flex-direction: column;

  .TitleContainer {
    display: flex;
    margin-bottom: 1rem;

    .TitleDecorator {
      margin-right: 0.9375rem;
      align-items: baseline;
    }
  }

  .BannerButton,
  .BannerParagraph {
    margin-left: 3.1rem;
  }

  .BannerParagraph {
    margin-bottom: 1rem;
  }

  ${BannerCardsContainer} {
    display: none;
  }

  @media only screen and (min-width: 48em) {
    padding: 2.5rem 4.838rem;
  }

  @media only screen and (min-width: 80em) {
    padding: 5rem 0;
    .Content {
      display: grid;
      grid-template-areas:
        ". cards"
        "title cards"
        "text cards"
        "button cards";

      grid-template-columns: 33.625rem 28.75rem;
      gap: 0 3.5625rem;
      align-self: center;
      margin-right: 7.8125rem;
    }

    .TitleContainer {
      grid-area: title;
      .TitleDecorator {
        margin-right: 2.225rem;
      }
    }

    .BannerButton,
    .BannerParagraph {
      margin-left: 6.6rem;
    }

    .BannerButton {
      max-width: 196px;
      grid-area: button;
    }

    .BannerParagraph {
      margin-bottom: 2rem;
      grid-area: text;
    }

    ${BannerCardsContainer} {
      display: grid;
      grid-area: cards;
    }
  }
`;
