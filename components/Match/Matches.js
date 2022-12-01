import Match from "./Match";
import styles from "../../styles/Matches.module.css"

const Matches = ({matches}) => (
    <div className={styles.general}>
        <Match title="Предыдущий матч" date={matches[0].date} team1={matches[0].homeTeam} team2={matches[0].awayTeam} count1={matches[0].homeScore} count2={matches[0].awayScore} place={matches[0].location} />
        <Match title="Следующий матч" date={matches[1].date} team1={matches[1].homeTeam} team2={matches[1].awayTeam} count1="-" count2="-" place={matches[1].location} />
    </div>
);

export default Matches;