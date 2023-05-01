import { Helmet } from "react-helmet-async";
import { UserList } from "../../components/UserList/UserList";
import { Container } from "../../styles/Container.styled";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../API";
import { HomePageStyled, SelectStyled } from "./HomePage.styled";
import { ButtonStyled } from "../../styles/Button.styled";
import { Loader } from "../../components/Loader/Loader";

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [filter, setFilter] = useState("show all");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNumberOfUsers = async () => {
      try {
        const responce = await fetchUsers(1, 999);
        setTotalUsers(responce.data.length);
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
      }
    };

    getNumberOfUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const responce = await fetchUsers(page);
        page === 1
          ? setUsers(responce.data)
          : setUsers((prevUsers) => [...prevUsers, ...responce.data]);
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, [page]);

  return (
    <HomePageStyled>
      <Container>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <SelectStyled name="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="show all">SHOW ALL</option>
          <option value="follow">FOLLOW</option>
          <option value="followings">FOLLOWINGS</option>
        </SelectStyled>
        <UserList users={users} filter={filter} />
        {isLoading && <Loader />}
        {!isLoading && users.length < totalUsers && (
          <ButtonStyled
            type="BUTTON"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            withMargin={true}
          >
            SEE MORE
          </ButtonStyled>
        )}
      </Container>
    </HomePageStyled>
  );
};
