import Head from "next/head";
import Heading from "../components/general/Heading";
import GamesList from "../components/Schedule/GamesList";

export const getStaticProps = async() =>{

  const response_games = await fetch('https://qwmks.pythonanywhere.com/api/games')
  const data_games = await response_games.json()


  if (!data_games){
    return{
      notFound: true
    }
  }

  return{
    props: {
      games: data_games
    }
  }
}

const SchedulePage = ({games})  => (
    <div>
      <Head>
        <title>Расписание</title>
        <meta name="Schedule" content="Schedule" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Расписание игр"/>
        <GamesList games={games} />
      </main>
    </div>
);

export default SchedulePage;