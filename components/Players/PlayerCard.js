import Card from 'react-bootstrap/Card';
import styles from "../../styles/PlayerCard.module.css"
import Link from 'next/link';

const PlayerCard = ({id, name, number, imgpath, role}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgpath} height={300}/>
      <Card.Body>
        <Card.Text className={styles.number}>{number}</Card.Text>
        <Link href={`/players/${id}`}>
          <Card.Title className={styles.name}>{name}</Card.Title>
        </Link>
        <Card.Text className={styles.role}>{role}</Card.Text>
        
      </Card.Body>
    </Card>
);

export default PlayerCard;