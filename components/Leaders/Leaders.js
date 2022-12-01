import LeaderCard from "./LeaderCard";
import styles from "../../styles/Leaders.module.css"

// const leaderList = [
//     {id:1, title:"Снайпер", name: "Евгений Зайцев", score:10, path: "/assets/player1.png"},
//     {id:2, title:"Бомбардир", name: "Александр Ивашин", score:17, path: "/assets/player2.png"},
//     {id:3, title:"Ассистент", name: "Иван Демин", score:9, path: "/assets/player3.jpg"},
//     {id:4, title:"Вратарь", name: "Сергей Бочкарев", score:11, path: "/assets/player4.jpg"},
// ]

const Leaders = ({leaders}) => {

    let idx = 0;
    let title = "";

    return (
        <div className={styles.general}>
            <h2 className={styles.title}>Лидеры сезона</h2>
            <div className={styles.list}>
                
                {leaders.map(({pk, name, goals, assists, photo}) => {
                    switch(idx) {
                        case 0:
                            title = "Снайпер"
                            break
                        case 1:
                            title = "Бомбардир"
                            break
                        case 2:
                            title = "Ассистент"
                            break
                        case 3:
                            title = "Вратарь"
                            break
                    }
                    idx += 1
                    return (
                        <LeaderCard key={pk} id={pk} title={title} name={name} goals={goals} assists={assists} imgpath={photo} />
                    )
                }
                )}
            </div>
            
        </div>
    );
};

export default Leaders;