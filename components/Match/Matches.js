import Match from "./Match";
import styles from "../../styles/Matches.module.css"

const Matches = () => (
    <div className={styles.general}>
        <Match title="Предыдущий матч" date="21.10.2022" team1="Импульс" team2="Викинг" count1="3" count2="4" place="Платинум Арена" />
        <Match title="Следующий матч" date="03.11.2022" team1="Импульс" team2="Пульсар" count1="-" count2="-" place="Платинум Арена" />
    </div>
);

export default Matches;