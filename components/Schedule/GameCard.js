import styles from "../../styles/GameCard.module.css"
import Link from 'next/link';

const GameCard = ({id, homeTeam, awayTeam, homeScore, awayScore, date, location}) => {
    let now = new Date();
    let nowdate = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay()
    if (date > nowdate){
        homeScore = "-"
        awayScore = "-"
    }
    return (
        <li key={id} className={styles.li}>
            <div className={styles.div1}>
                <p className={homeTeam == "Импульс" ? styles.dateHome : styles.date}>{date}</p>
            </div>

            <div className={styles.div2}>
                <span className={styles.team}>{homeTeam}</span>
                <span className={styles.score}>{homeScore} : {awayScore}</span>
                <span className={styles.team}>{awayTeam}</span>
            </div>
        
            <div className={styles.div3}>
                <p className={styles.location}>{location}</p>
            </div>
            
        </li>
    );
};

export default GameCard;