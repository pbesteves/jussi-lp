import styled from "styled-components";

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

  @media only screen and (min-width: 48em) {
    padding: 2.5rem 4.838rem;
  }

  @media only screen and (min-width: 80em) {
    padding: 5rem 7.375rem;
    .BannerButton,
    .BannerParagraph {
      margin-left: 5.4rem;
    }
    .BannerParagraph {
      margin-bottom: 2rem;
    }
  }
`;
