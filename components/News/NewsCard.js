import Card from 'react-bootstrap/Card';
import styles from "../../styles/NewsCard.module.css"
import Link from 'next/link';

const NewsCard = ({id, title, imgpath, summary, date}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgpath} height={300}/>
      <Card.Body>
        <Link href={`/news/${id}`} legacyBehavior>
        <a className={styles.a}><Card.Title className={styles.title}>{title}</Card.Title></a>
        </Link>
        <Card.Text className={styles.summary} >{summary}</Card.Text>
        <Card.Text className={styles.date}>{date}</Card.Text>
      </Card.Body>
    </Card>
);

export default NewsCard;