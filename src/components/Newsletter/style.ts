import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  padding: 3rem 1rem;
  width: 100%;

  h2 {
    width: 20ch;
    line-height: 40px;
    margin-bottom: 2.625rem;
  }
  span {
    margin-bottom: 0.5rem;
  }
`;
