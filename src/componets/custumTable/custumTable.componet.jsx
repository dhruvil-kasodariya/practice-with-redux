import { useEffect, useState } from "react";
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
} from "./custumTable.style";

const CustumTable = ({ Index, tableTitle, tableData, infomation }) => {
  const [tableHeadTitle, setTableHeadTitle] = useState([]);

  useEffect(() => {
    setTableHeadTitle(tableData.length ? Object.keys(tableData[0]) : []);
  }, [tableData]);

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
                    <PopUp type="View" rowData={row} />
                    <PopUp type="Update" rowData={row} />

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
