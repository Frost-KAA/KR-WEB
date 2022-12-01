import Head from "next/head";
import NewsCard from "../../components/News/NewsCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/NewsPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://qwmks.pythonanywhere.com/api/news')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      news: data
    }
  }
}


const NewsPage = ({news})  => {

  return (
      <div>
        <Head>
          <title>Новости</title>
          <meta name="NewsEntity" content="NewsEntity" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          <Heading title="Новости" />

          <div className={styles.list}>
            {news && news.map(({pk, title, summary, photo, date}) => (
                <NewsCard key={pk} id={pk} title={title} summary={summary} imgpath={photo} date={date} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default NewsPage;