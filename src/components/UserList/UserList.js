import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard";
import { UserListStyled } from "./UserList.styled";

export const UserList = ({ users, filter }) => {
  const [following, setFollowing] = useState(() => getFollowing());

  function getFollowing() {
    const saved = localStorage.getItem("following");
    const following = JSON.parse(saved);
    return following || [];
  }

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  return (
    <UserListStyled>
      {users
        .filter((user) => {
          switch (filter) {
            case "show all":
              return user;

            case "follow":
              return !following.includes(user.id);

            case "followings":
              return following.includes(user.id);

            default:
              return user;
          }
        })
        .map((user) => {
          return (
            <li key={user.id}>
              <UserCard
                userInfo={user}
                following={following}
                setFollowing={setFollowing}
              />
            </li>
          );
        })}
    </UserListStyled>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
