import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: grid;
  grid-template-areas: "menu logo . search cart";
  grid-template-columns: 2.5rem 8.125rem auto 2.5rem 2.5rem;
  column-gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  width: 100%;

  .Logo {
    grid-area: logo;
  }

  .CartTrigger {
    grid-area: cart;
  }

  .MenuTrigger {
    grid-area: menu;
  }

  .SearchTrigger {
    grid-area: search;
  }

  .LoginTrigger {
    display: none;
  }

  @media only screen and (min-width: 48em) {
    grid-template-areas: "logo nav . search login cart";
    grid-template-columns: 9.6875rem max-content auto 2.5rem 3.9375rem 2.5rem;
    align-items: center;
    .Logo {
      grid-area: logo;
    }

    .MenuTrigger {
      display: none;
    }

    .LoginTrigger {
      display: block;
      grid-area: login;
      justify-self: start;
    }
  }

  @media only screen and (min-width: 80em) {
    padding: 1.25rem 1.5rem;
    grid-template-columns: 9.6875rem max-content auto 17rem 3.9375rem 2.5rem;

  }
`;
