import styles from "../../styles/Match.module.css"

const Match = ({title, date, team1, team2, count1, count2, place}) => (
    <div className={styles.general}>
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
        <div className={styles.date}>
            <span>{date}</span>
        </div>
        <div className={styles.game}>
            <div className={styles.players}>
                <p>{team1}</p>
                <p className={styles.count}>{count1} : {count2}</p>
                <p>{team2}</p>
            </div>
            <div className={styles.place}>
                <p>{place}</p>
            </div>
        </div>
    </div>
);

export default Match;