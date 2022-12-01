import Heading from "../general/Heading"
import Image from "next/image"
import styles from "../../styles/NewsEntity.module.css"

const NewsInfo = ({news}) =>{
    if (!news){
        return <Heading title="Новость не найдена"/>
    }

    return(
        <main>
            <Heading title={news.title} />
            <div className={styles.general}>
                <p className={styles.title}>{news.summary}</p>
                <div className={styles.dateFon}>
                    <p className={styles.date}>{news.date}</p>
                </div><br/>
                
                <img src={news.photo} width="600" height="400" alt="news_img"/><br/><br/>
                <p>{news.text}</p> 
            </div>
        </main>
        
    )
}

export default NewsInfo;
