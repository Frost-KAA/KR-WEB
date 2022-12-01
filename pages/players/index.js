import Head from "next/head";
import PlayerCard from "../../components/Players/PlayerCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/NewsPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://qwmks.pythonanywhere.com/api/players')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      players: data
    }
  }
}


const PlayersPage = ({players})  => {

  return (
      <div>
        <Head>
          <title>Игроки</title>
          <meta name="Players" content="Players" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          <Heading title="Состав" />

          <div className={styles.list}>
            {players && players.map(({pk, name, number, photo, role}) => (
                <PlayerCard key={pk} id={pk} name={name} number={number} imgpath={photo} role={role} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default PlayersPage;