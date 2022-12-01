import Table from "react-bootstrap/Table";
import styles from "../../styles/RatingTable.module.css"
import { useTable } from "react-table";


const PlayerTable = ({columns, data}) => {

  let rowIdx = 0; 
  let colIdx = 0;

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
            rowIdx += 1
            colIdx = 0;
            return (
              <tr className={styles.none} {...row.getRowProps()} key={rowIdx}>
                {
                  row.cells.map((cell) => {
                    colIdx += 1
                    return(
                    <td className={row.cells[1] == cell ? styles.bold : styles.space} {...cell.getCellProps()}>
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

export default PlayerTable;