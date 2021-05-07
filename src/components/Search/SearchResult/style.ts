import styled from "styled-components";

export const SearchResultComponent = styled.ul`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  width: 59.2%;
  top: 42px;
  left: 75px;
  box-shadow: ${({ theme }) => theme.boxShadows.large};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  z-index: 1;

  @media only screen and (min-width: 48em) {
    width: 38%;
    top: 42px;
    left: 238px;
  }

  @media only screen and (min-width: 80em) {
    width: 88.2%;
    top: 42px;
    left: 16px;
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
  grid-template-columns: 60px 135px;
  grid-template-rows: 90px;
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
  top: 42px;

  @media only screen and (min-width: 48em) {
    width: 18.063rem;
  }
  @media only screen and (min-width: 80em) {
    width: 13.0625rem;
    top: 34px;
  }
`;
