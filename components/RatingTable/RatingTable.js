import Table from "react-bootstrap/Table";
import styles from "../../styles/RatingTable.module.css"
import { useTable } from "react-table";


const RatingTable = ({columns, data}) => {

  let colIdx = 0;
  let rowIdx = 0;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  return(
    <Table striped {...getTableProps()} className={styles.table}>
      <thead>
        {
          headerGroups.map(headerGroup => {
            rowIdx += 1
            colIdx = 0
            return(
            <tr {...headerGroup.getHeaderGroupProps()} key={rowIdx}>
              {
                headerGroup.headers.map( column =>{
                  colIdx += 1
                  return (
                  <th {...column.getHeaderProps()} key={colIdx}>
                    {
                      column.render('Header')
                    }
                  </th>
                )})
              }
            </tr>
          )})
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            rowIdx += 1
            colIdx = 0
            prepareRow(row)
            return (
              <tr className={row.cells[1].value == "Импульс" ? styles.select : styles.none} {...row.getRowProps()} key={rowIdx}>
                {
                  row.cells.map((cell) => {
                    colIdx += 1
                    return (
                    <td key={colIdx} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )})
                }
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
};

export default RatingTable;