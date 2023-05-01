import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 196px;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  color: var(--text);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${({ isFollowing }) =>
    isFollowing ? "var(--btn-active)" : "var(--bg)"};
  ${({ withMargin }) =>
    withMargin &&
    `margin-left: 100px;
    :hover {background-color: var(--btn-active);}`}
  :hover {
    cursor: pointer;
  }
`;
