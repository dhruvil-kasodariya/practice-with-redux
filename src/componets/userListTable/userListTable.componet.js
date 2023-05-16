import { useSelector, useDispatch } from "react-redux";
import { selectUserList } from "../../store/users/users.selector";
import CustumTable from "../custumTable/custumTable.componet";
import { setSingleUser } from "../../store/users/users.action";

const UserListTable = () => {
  const users = useSelector(selectUserList);
  const dispatch = useDispatch();
  return (
    <>
      <CustumTable
        tableTitle="User List"
        tableData={users}
        dispatch={dispatch}
        action={setSingleUser}
      />
    </>
  );
};

export default UserListTable;
