import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ImgCircle,
  ImgLine,
  TextWrapper,
  UserCardStyled,
} from "./UserCard.styled";
import { ButtonStyled } from "../../styles/Button.styled";

export const UserCard = ({ userInfo, following, setFollowing }) => {
  const { id, user, avatar, tweets, followers } = userInfo;

  const isFollowing = following.includes(id);

  const follow = () => {
    setFollowing([...following, id]);
  };

  const unfollow = () => {
    setFollowing(following.filter((followingUser) => followingUser !== id));
  };

  return (
    <UserCardStyled>
      <ImgLine>
        <ImgCircle>
          <img
            src={avatar ? avatar : require("../../images/Stub.png")}
            alt={user}
          />
        </ImgCircle>
      </ImgLine>
      <TextWrapper>
        <Link to={"/tweets"} state={{ name: user }}>{`${tweets} TWEETS`}</Link>
        <p>{`${(isFollowing
          ? followers + 1
          : followers
        ).toLocaleString()} FOLLOWERS`}</p>
      </TextWrapper>
      <ButtonStyled
        type="button"
        onClick={isFollowing ? unfollow : follow}
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
