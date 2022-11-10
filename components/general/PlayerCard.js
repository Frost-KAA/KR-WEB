import Card from 'react-bootstrap/Card';
import styles from "../../styles/LeaderCard.module.css"

const PlayerCard = ({param}) => (
    <PlayerCard key={param.id} className={styles.general} style={{ width: '18rem' }}>
        
      <PlayerCard.Img variant="top" src={param.path} height={300}/>
      <PlayerCard.Body>
        <PlayerCard.Title className={styles.role}>{param.title}</PlayerCard.Title>
        <PlayerCard.Text className={styles.name} >{param.name}</PlayerCard.Text>
        <PlayerCard.Text>{param.score}</PlayerCard.Text>
      </PlayerCard.Body>
    </PlayerCard>
);

export default PlayerCard;