import styled from "styled-components";

export const SearchResultComponent = styled.ul`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  width: 59.2%;
  top: 2.625rem;
  left: 4.6875rem;
  box-shadow: ${({ theme }) => theme.boxShadows.large};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  z-index: 1;

  @media only screen and (min-width: 48em) {
    width: 38%;
    top: 2.625rem;
    left: 14.875rem;
  }

  @media only screen and (min-width: 80em) {
    width: 88.2%;
    left: 1rem;
  }
`;

export const Result = styled.li`
  display: grid;
  grid-template-areas:
    "thumbnail missionName"
    "thumbnail ."
    "thumbnail missionStatus";
  gap: 0 0.5rem;
  padding: 0.5rem 0.5rem;
  grid-template-columns: 3.75rem 8.4375rem;
  grid-template-rows: 5.625rem;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  .TextContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .MissionName {
      grid-area: missionName;
      grid-row: 1;
    }

    .MissionStatus {
      grid-area: missionStatus;
      grid-row: 1;
    }
  }
`;

export const ResultLoading = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 13.0625rem;
  box-shadow: ${({ theme }) => theme.boxShadows.large};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  position: absolute;
  top: 2.625rem;

  @media only screen and (min-width: 48em) {
    width: 18.063rem;
  }
  @media only screen and (min-width: 80em) {
    width: 13.0625rem;
    top: 2.125rem;
  }
`;
