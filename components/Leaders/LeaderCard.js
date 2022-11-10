import Card from 'react-bootstrap/Card';
import styles from "../../styles/LeaderCard.module.css"

const LeaderCard = ({id, title, name, score, path}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={path} height={300}/>
      <Card.Body>
        <Card.Title className={styles.role}>{title}</Card.Title>
        <Card.Text className={styles.name} >{name}</Card.Text>
        <Card.Text className={styles.score}>Очки: {score}</Card.Text>
      </Card.Body>
    </Card>
);

export default LeaderCard;