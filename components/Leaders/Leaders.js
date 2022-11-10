import LeaderCard from "./LeaderCard";
import styles from "../../styles/Leaders.module.css"

const leaderList = [
    {id:1, title:"Снайпер", name: "Евгений Зайцев", score:10, path: "/assets/player1.png"},
    {id:2, title:"Бомбардир", name: "Александр Ивашин", score:17, path: "/assets/player2.png"},
    {id:3, title:"Ассистент", name: "Иван Демин", score:9, path: "/assets/player3.jpg"},
    {id:4, title:"Вратарь", name: "Сергей Бочкарев", score:11, path: "/assets/player4.jpg"},
]

const Leaders = () => (
    <div className={styles.general}>
        <h2 className={styles.title}>Лидеры сезона</h2>
        <div className={styles.list}>
            {leaderList.map(({id, title, name, score, path}) => (
                <LeaderCard id={id} title={title} name={name} score={score} path={path} />
            ))}
        </div>
        
    </div>
);

export default Leaders;