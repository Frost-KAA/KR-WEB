import Table from "react-bootstrap/Table";
import styles from "../../styles/RatingTable.module.css"
import { useTable } from "react-table";


const RatingTable = ({columns, data}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  return(
    <Table striped {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map( column =>(
                  <th {...column.getHeaderProps()}>
                    {
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row)
            return (
              <tr className={row.cells[1].value == "Импульс" ? styles.select : styles.none} {...row.getRowProps()}>
                {
                  row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))
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