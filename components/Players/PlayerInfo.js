import Heading from "../general/Heading"
import Image from "next/image"
import styles from "../../styles/PlayerInfo.module.css"
import PlayerTable from "./PlayerTable"

const PlayerInfo = ({player}) =>{
    if (!player){
        return <Heading title="Информация об игроке не найдена"/>
    }

    const columns = [
        {
          Header: "",
          accessor: "desc",
        },
        {
          Header: "",
          accessor: "value",
        },
      ];
      
      const data = [
        {
            desc: "Роль",
            value: player.role
        },
        {
            desc: "Дата рождения",
            value: player.birthday
        },
        {
            desc: "Воспитанник",
            value: player.academy
        },
        {
            desc: "Сыгранные игры",
            value: player.gamesPlayed
        },
        {
            desc: "Передачи",
            value: player.goals
        },
        {
            desc: "Сыгранные игры",
            value: player.assists
        },
      ];

    return(
        <main>
            <Heading title={player.name} />
            <div className={styles.general}>
                <div className={styles.box}>
                    <img src={player.photo} height="300" alt="news_img"/><br/><br/>
                    <p className={styles.number}>{player.number}</p> 
                </div>
                <div className={styles.table}>
                    <h4 className={styles.title}>Характеристики</h4>
                    <PlayerTable  columns={columns} data={data} />
                </div>
            </div>
        </main>
        
    )
}

export default PlayerInfo;
