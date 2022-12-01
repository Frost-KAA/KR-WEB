import Head from "next/head";
import PlayerInfo from "../../components/Players/PlayerInfo";


export const getServerSideProps = async(context) =>{
  const {id} = context.params;
  const response = await fetch(`https://qwmks.pythonanywhere.com/api/players/${id}`)
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      player: data
    }
  }
}

const PlayerPage = ({player})  => (
    <div>
      <Head>
        <title>Игрок</title>
        <meta name="Player" content="Player" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <PlayerInfo player={player} />
    </div>
);

export default PlayerPage;