import styled from "styled-components";

export const TweetsPageStyled = styled.div`
  padding-top: 40px;
  color: var(--text);
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
  a {
    color: #471ca9;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      color: var(--btn-active);
    }
  }
`;
