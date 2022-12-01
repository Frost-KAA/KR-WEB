import Heading from "../general/Heading"
import Image from "next/image"
import styles from "../../styles/PlayerInfo.module.css"

const TrainerInfo = ({trainer}) =>{
    if (!trainer){
        return <Heading title="Информация о тренре не найдена"/>
    }

    return(
        <main>
            <Heading title={trainer.surname+" "+trainer.name} />
            <div className={styles.general}>
                <div className={styles.box}>
                    <img src={trainer.photo} height="300" alt="news_img"/><br/><br/>
                </div>
                <div className={styles.table}>
                    <h4 className={styles.title}>Описание</h4>
                    <p>{trainer.desc}</p>
                </div>
            </div>
        </main>
        
    )
}

export default TrainerInfo;
