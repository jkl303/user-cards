import styled from "styled-components";

export const HomePageStyled = styled.div`
  padding-top: 40px;
`;

export const SelectStyled = styled.select`
  margin-left: 100px;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  color: #471ca9;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  option {
    background-color: var(--bg);
    :hover {
      cursor: pointer;
    }
  }
`;
