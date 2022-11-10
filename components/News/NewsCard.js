import Card from 'react-bootstrap/Card';
import styles from "../../styles/LeaderCard.module.css"

const NewsCard = ({id, title, imgpath, summary, date}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgpath} height={300}/>
      <Card.Body>
        <Card.Title className={styles.role}>{title}</Card.Title>
        <Card.Text className={styles.name} >{summary}</Card.Text>
        <Card.Text>{date}</Card.Text>
      </Card.Body>
    </Card>
);

export default NewsCard;