import RatingTable from "./RatingTable";
import styles from "../../styles/Rating.module.css"

const Rating = ({title, table, full}) => {

  let data = []

  let columns = []

  if (full == 1){
    columns = [
      {
        Header: "Место",
        accessor: "num",
      },
      {
        Header: "Команда",
        accessor: "team",
      },
      {
        Header: "Игры",
        accessor: "games",
      },
      {
        Header: "Победы",
        accessor: "wins",
      },
      {
        Header: "Победы по буллитам",
        accessor: "wb",
      },
      {
        Header: "Проигрыши по булитам",
        accessor: "pb",
      },
      {
        Header: "Проигрыши",
        accessor: "p",
      },
      {
        Header: "Шайбы",
        accessor: "gd",
      },
      {
        Header: "Очки",
        accessor: "pts",
      },
    ];

    data = table
  
    let pk = 1
    while (pk <= data.length) {
      data[pk-1]["num"] = pk
      pk += 1
    }
  
  }
  else{
    columns = [
      {
        Header: "Место",
        accessor: "num",
      },
      {
        Header: "Команда",
        accessor: "team",
      },
      {
        Header: "Игры",
        accessor: "games",
      },
      {
        Header: "Очки",
        accessor: "pts",
      },
    ];

    let pk = 1

    table.map(({ team, games, pts}) => {
      data.push(
        {
          num: pk,
          team: team,
          games: games,
          pts: pts
        }
      )
      pk += 1
    })
  }



    return(
        <div className={styles.general}>
            <div className={styles.table}>
              <RatingTable columns={columns} data={data} />
            </div>
            
        </div>
    );
};

export default Rating;