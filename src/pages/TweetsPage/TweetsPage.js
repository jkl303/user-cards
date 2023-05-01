import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { TweetsPageStyled } from "./TweetsPage.styled";
import { Container } from "../../styles/Container.styled";
import { ButtonStyled } from "../../styles/Button.styled";

export const TweetsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TweetsPageStyled>
      <Container>
        <Helmet>
          <title>Tweets</title>
        </Helmet>
        <h1>{`${
          location.state ? location.state.name + "'s" : "All"
        } tweets`}</h1>
        <p>There are no tweets yet:(</p>
        <ButtonStyled onClick={() => navigate("/")} withMargin={true}>
          BACK
        </ButtonStyled>
      </Container>
    </TweetsPageStyled>
  );
};
