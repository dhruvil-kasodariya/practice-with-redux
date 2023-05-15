import { useSelector } from "react-redux";
import { selectUserList } from "../../store/users/users.selector";
import CustumTable from "../custumTable/custumTable.componet";

const UserListTable = () => {
  const users = useSelector(selectUserList);
  return (
    <>
      <CustumTable tableTitle="User List" tableData={users} />
    </>
  );
};

export default UserListTable;
