import RatingTable from "./RatingTable";
import styles from "../../styles/Rating.module.css"

const Rating = ({title}) => {

    const columns = [
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
          accessor: "score",
        },
      ];
      
      const data = [
        {
          num: 1,
          team: "Викинг",
          games: 10,
          score: 23
        },
        {
          num: 2,
          team: "Совы",
          games: 10,
          score:  19
        },
        {
          num: 3,
          team: "Ресурс",
          games: 10,
          score: 17
        },
        {
          num: 4,
          team: "Импульс",
          games: 10,
          score: 12
        },
        {
          num: 5,
          team: "Пульсар",
          games: 10,
          score: 8
        },
      ];

    return(
        <div className={styles.general}>
            <h2>{title}</h2>
            <RatingTable columns={columns} data={data} />
        </div>
    );
};

export default Rating;