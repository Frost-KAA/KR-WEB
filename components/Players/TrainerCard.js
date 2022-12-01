import Card from 'react-bootstrap/Card';
import styles from "../../styles/PlayerCard.module.css"
import Link from 'next/link';

const TrainerCard = ({id, name, surname, imgpath}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgpath} height={300}/>
      <Card.Body>
        <Link href={`/trainers/${id}`}>
          <a className={styles.a}><Card.Title className={styles.name}>{surname+" "+name}</Card.Title></a>
        </Link>
        <Card.Text className={styles.role}>Тренер</Card.Text>
      </Card.Body>
    </Card>
);

export default TrainerCard;