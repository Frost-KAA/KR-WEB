import Card from 'react-bootstrap/Card';
import styles from "../../styles/LeaderCard.module.css"

const LeaderCard = ({id, title, name, goals, assists, imgpath}) => {

  let scoreName = "Шайбы";
  let score = goals;
  if (title == "Бомбардир"){
    scoreName = "Очки";
    score = goals + assists;
  }
  if (title == "Ассистент"){
    scoreName = "Передачи";
    score = assists;
  }
  if (title == "Вратарь"){
    scoreName = "Пропущенные шайбы";
    score = - goals;
  }



  return (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgpath} height={300}/>
      <Card.Body>
        <Card.Title className={styles.role}>{title}</Card.Title>
        <Card.Text className={styles.name} >{name}</Card.Text>
        <Card.Text className={styles.score}>{scoreName}: {score}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LeaderCard;