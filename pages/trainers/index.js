import Head from "next/head";
import TrainerCard from "../../components/Players/TrainerCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/NewsPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://qwmks.pythonanywhere.com/api/coaches')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      trainers: data
    }
  }
}


const TrainersPage = ({trainers})  => {

  return (
      <div>
        <Head>
          <title>Игроки</title>
          <meta name="Trainers" content="Trainers" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <main>
          <Heading title="Тренеры" />

          <div className={styles.list}>
            {trainers && trainers.map(({pk, name, surname, desc, photo}) => (
                <TrainerCard id={pk} name={name} surname={surname} desc={desc} imgpath={photo} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default TrainersPage;