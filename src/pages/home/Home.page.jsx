import { Link } from "react-router-dom";

import UserListTable from "../../componets/userListTable/userListTable.componet";

import { Container, Button } from "./home.style";

const Home = () => {
  return (
    <Container>
      <Button>
        <Link to={"/registration"}>Add New User</Link>
      </Button>
      <UserListTable />
    </Container>
  );
};

export default Home;
