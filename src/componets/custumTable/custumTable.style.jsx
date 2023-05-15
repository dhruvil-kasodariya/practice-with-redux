import styled from "styled-components";
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077c2;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #0077c2;
  color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const IndexCell = styled(TableCell)`
  font-weight: bold;
`;

export const NameCell = styled(TableCell)`
  text-align: right;
  text-transform: capitalize;
`;

export const EmailCell = styled(TableCell)`
  text-align: right;
`;

export const CrudCell = styled(TableCell)`
  text-align: right;
`;
