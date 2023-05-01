import styled from "styled-components";
import GoIT from "../../images/GoIT.svg";
import CardBG from "../../images/CardBG.png";

export const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 380px;
  height: 460px;
  padding: 36px 0;
  background: url(${GoIT}) no-repeat top 20px left 20px,
    url(${CardBG}) no-repeat top 28px center,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
`;

export const ImgLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10px;
  background: var(--bg);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ImgCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  img {
    border-radius: 50%;
    width: 62px;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin: 62px 0 26px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--bg);
  a {
    color: var(--bg);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      color: var(--btn-active);
    }
  }
`;
