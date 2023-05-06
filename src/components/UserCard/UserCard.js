import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ImgCircle, TextWrapper, UserCardStyled } from "./UserCard.styled";
import { ButtonStyled } from "../../styles/Button.styled";

export const UserCard = ({ userInfo, following, setFollowing }) => {
  const { id, user, avatar, tweets, followers } = userInfo;

  const isFollowing = following.includes(id);

  const changeFollowing = () => {
    isFollowing
      ? setFollowing(following.filter((followingUser) => followingUser !== id))
      : setFollowing([...following, id]);
  };

  return (
    <UserCardStyled>
      <ImgCircle>
        <img
          src={avatar ? avatar : require("../../images/Stub.png")}
          alt={user}
        />
      </ImgCircle>
      <TextWrapper>
        <Link
          to={"/tweets"}
          state={{ name: user }}
        >{`${tweets.toLocaleString()} TWEETS`}</Link>
        <p>{`${(isFollowing
          ? followers + 1
          : followers
        ).toLocaleString()} FOLLOWERS`}</p>
      </TextWrapper>
      <ButtonStyled
        type="button"
        onClick={changeFollowing}
        isFollowing={isFollowing}
      >
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </ButtonStyled>
    </UserCardStyled>
  );
};

UserCard.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
  following: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFollowing: PropTypes.func.isRequired,
};
