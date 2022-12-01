import Table from "react-bootstrap/Table";
import styles from "../../styles/RatingTable.module.css"
import { useTable } from "react-table";


const PlayerTable = ({columns, data}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  return(
    <Table striped {...getTableProps()}>
      
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row)
            return (
              <tr className={styles.none} {...row.getRowProps()}>
                {
                  row.cells.map((cell) => (
                    <td className={row.cells[1] == cell ? styles.bold : styles.space} {...cell.getCellProps()}>
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

export default PlayerTable;