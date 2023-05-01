import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  nav {
    display: flex;
    flex-wrap: nowrap;
    gap: 48px;
    padding: 20px 60px;
  }
  a {
    display: flex;
    color: var(--bg);
    align-items: center;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      color: var(--btn-active);
    }
    img {
      margin-right: 6px;
    }
    &.active {
      color: var(--btn-active);
    }
  }
`;
