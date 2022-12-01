import CarouselBox from "./CarouselBox";
import styles from "../../styles/News.module.css"

const News = ({news}) => (
    <div className={styles.space}>
        <CarouselBox newsList={news}/>
    </div>
);

export default News;