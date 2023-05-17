import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../pop-up/popUp.componte";
import CustomAlert from "../customAlert/customAlert.compent";
import { toast } from "react-toastify";
import {
  Container,
  Wrapper,
  Title,
  Table,
  TableHead,
  TableRow,
  IndexCell,
  NameCell,
  CrudCell,
  UpdateButton,
  DeleteButton,
  customAlertStyle,
} from "./custumTable.style";

const CustumTable = ({
  Index,
  tableTitle,
  tableData,
  updateAction,
  dispatch,
  deleteAction,
}) => {
  const [tableHeadTitle, setTableHeadTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTableHeadTitle(tableData.length ? Object.keys(tableData[0]) : []);
  }, [tableData]);

  const updateHandle = (row) => {
    dispatch(updateAction(row));
    navigate("/registration");
  };

  const deleteUserHandle = (id) => {
    const handleConfirmDelete = () => {
      dispatch(deleteAction(id));
      navigate("/home");
      toast.success("User Deleted");
    };
    // Call the confirmation alert when deleting a user
    setDeleteConfirmation({ open: true, onConfirm: handleConfirmDelete });
  };

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    open: false,
    onConfirm: null,
  });

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmation({ open: false, onConfirm: null });
  };

  return (
    <Container>
      <Wrapper>
        <Title>{tableTitle ? tableTitle : "Table"}</Title>
        {tableData.length ? (
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <IndexCell>{Index ? Index : "Index"}</IndexCell>
                {tableHeadTitle.map((title) => (
                  <NameCell key={title}>{title}</NameCell>
                ))}
                <CrudCell>Action</CrudCell>
              </TableRow>
            </TableHead>
            <tbody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <IndexCell>{index + 1}</IndexCell>
                  {tableHeadTitle.map((title) => (
                    <NameCell key={title}>
                      {row[title] ? row[title] : ""}
                    </NameCell>
                  ))}
                  <CrudCell>
                    <PopUp type="View" rowData={row} id={index} />
                    <UpdateButton onClick={() => updateHandle(row)}>
                      Update
                    </UpdateButton>
                    <DeleteButton onClick={() => deleteUserHandle(index)}>
                      Delete
                    </DeleteButton>
                  </CrudCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        ) : (
          "Table data not avaible"
        )}
      </Wrapper>
      {deleteConfirmation.open && (
        <CustomAlert
          message="Are you sure you want to delete this user?"
          onConfirm={deleteConfirmation.onConfirm}
          onClose={handleCloseDeleteConfirmation}
          style={customAlertStyle}
        />
      )}
    </Container>
  );
};

export default CustumTable;
