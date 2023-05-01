import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";
import { Container } from "../../styles/Container.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <NavLink to="/">
            <img src={require("../../images/Logo.png")} alt="Home" width={30} />
            HOME
          </NavLink>
          <NavLink to="/tweets">TWEETS</NavLink>
        </nav>
      </Container>
    </HeaderStyled>
  );
};
