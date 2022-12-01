import Head from "next/head";
import TrainerInfo from "../../components/Players/TrainerInfo";


export const getServerSideProps = async(context) =>{
  const {id} = context.params;
  const response = await fetch(`https://qwmks.pythonanywhere.com/api/coaches/${id}`)
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      trainer: data
    }
  }
}

const TrainerPage = ({trainer})  => (
    <div>
      <Head>
        <title>Тренер</title>
        <meta name="Trainer" content="Trainer" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <TrainerInfo trainer={trainer} />
    </div>
);

export default TrainerPage;