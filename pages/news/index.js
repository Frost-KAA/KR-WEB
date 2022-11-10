import Head from "next/head";
import NewsCard from "../../components/News/NewsCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/Leaders.module.css"
import Grid from "../../components/general/Grid";

const newsList = [
  {id:1, title:"Интрига матча", summary: "Готовится к булитам", imgPath: "/assets/11.jpg", date: "22.10.2022"},
  {id:2, title:"Победа", summary: "Выиграли матч", imgPath: "/assets/22.jpg", date: "23.10.2022"},
  {id:3, title:"Новая форма", summary: "Белая форма сменила синюю", imgPath: "/assets/33.jpg", date: "24.10.2022"},
  {id:4, title:"Для души", summary: "Немного прекрасного", imgPath: "/assets/44.jpg", date: "25.10.2022"},
  {id:5, title:"Интрига матча", summary: "Готовится к булитам", imgPath: "/assets/11.jpg", date: "22.10.2022"},
  {id:6, title:"Победа", summary: "Жестко выиграли матч", imgPath: "/assets/22.jpg", date: "23.10.2022"},
  {id:7, title:"Для души", summary: "Немного прекрасного", imgPath: "/assets/44.jpg", date: "25.10.2022"},
]


const NewsPage = ()  => (
    <div>
      <Head>
        <title>Новость</title>
        <meta name="NewsEntity" content="NewsEntity" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Новости" />

        <div className={styles.list}>
          {newsList.map(({id, title, summary, imgPath, date}) => (
            <NewsCard id={id} title={title} summary={summary} imgpath={imgPath} date={date} />
          ))}
        </div>

      </main>
    </div>
);

export default NewsPage;