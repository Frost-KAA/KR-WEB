import Head from 'next/head'
import News from '../components/News/News';
import Matches from '../components/Match/Matches';
import Rating from '../components/RatingTable/Rating';
import Leaders from '../components/Leaders/Leaders';
import Vote from '../components/Vote';
import Heading from '../components/general/Heading';

export const getStaticProps = async() =>{
  try{
    const response_news = await fetch('https://qwmks.pythonanywhere.com/api/news')
    const data_news = await response_news.json()

    const response_leders = await fetch('https://qwmks.pythonanywhere.com/api/leaders')
    const data_leaders = await response_leders.json()

    const response_matches = await fetch('https://qwmks.pythonanywhere.com/api/nearestMatches')
    const data_matches = await response_matches.json()

    const response_table = await fetch('https://qwmks.pythonanywhere.com/api/table')
    const data_table = await response_table.json()


    if ((!data_news) || (!data_leaders) || (!data_matches) || (!data_table)){
      return{
        notFound: true
      }
    }

    return{
      props: {
        news: data_news,
        leaders: data_leaders,
        matches: data_matches,
        table: data_table
      }
    }
  } catch{
    return{
      props: {
        news: null,
        leaders: null,
        matches: null,
        table: null
      }
    }
  }
  
}

const HomePage = ({news, leaders, matches, table})  => (
    <div>
      <Head>
        <title>Импульс</title>
        <meta name="Impuls" content="Hockey team" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Главная" />
        <News news={news}/>
        <Matches matches={matches}/>
        <Rating title="Турнирная таблица 2022/2023" table={table} full={0}/>
        <Leaders leaders={leaders}/>
        {/* <Vote /> */}
      </main>
    </div>
);

export default HomePage;

