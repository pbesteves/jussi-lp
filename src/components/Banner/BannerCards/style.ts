import styled from "styled-components";

export const BannerCardsContainer = styled.div`
  display: grid;
  width: 80%;
  max-width: 461px;
  grid-template-columns: repeat(2, 13.0625rem);
  gap: 2.625rem;

  .BottomCard {
    grid-row: 2 / 4;
    grid-column: 1;
    align-self: baseline;
    justify-self: inherit;
    padding: 0.8125rem 0.8125rem 1rem;
  }

  .MiddleCard {
    grid-row: 2 / 4;
    grid-column: 2;
    justify-self: inherit;
    align-self: baseline;
    padding: 1.0625rem 1.125rem 1rem;
  }

  .TopCard {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    justify-self: center;
    padding: 2.4375rem 1.5625rem 1rem;
    max-height: 271px;
  }
`;
