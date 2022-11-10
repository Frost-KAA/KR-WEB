import styles from "../../styles/Heading.module.css"

const Heading = ({title}) => (
    <div className={styles.maintitle}>
        <h1>{title}</h1>
    </div>
);

export default Heading;