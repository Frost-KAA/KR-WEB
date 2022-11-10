import PlayerCard from "./PlayerCard";
import styles from "../../styles/Grid.module.css"

const Grid = ({title, paramList}) => (
    <div className={styles.general}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.list}>
            {list.map(({paramList}) => (
                <Card param={paramList} />
            ))}
        </div>
    </div>
);

export default Grid;