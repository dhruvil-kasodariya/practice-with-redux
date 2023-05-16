import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../pop-up/popUp.componte";
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
} from "./custumTable.style";

const CustumTable = ({ Index, tableTitle, tableData, action, dispatch }) => {
  const [tableHeadTitle, setTableHeadTitle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTableHeadTitle(tableData.length ? Object.keys(tableData[0]) : []);
  }, [tableData]);

  const updateHandle = (row) => {
    dispatch(action(row));
    navigate("/registration");
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

                    <button>Delete</button>
                  </CrudCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        ) : (
          "Table data not avaible"
        )}
      </Wrapper>
    </Container>
  );
};

export default CustumTable;
