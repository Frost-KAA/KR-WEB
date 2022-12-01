import Head from "next/head";
import Heading from "../components/general/Heading";
import Rating from "../components/RatingTable/Rating";

export const getStaticProps = async() =>{

  const response_table = await fetch('https://qwmks.pythonanywhere.com/api/table')
  const data_table = await response_table.json()


  if (!data_table){
    return{
      notFound: true
    }
  }

  return{
    props: {
      table: data_table
    }
  }
}

const TablePage = ({table})  => (
    <div>
      <Head>
        <title>Рейтинговая таблица</title>
        <meta name="RatingTable" content="RatingTable" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Турнирная таблица"/>
        <Rating title="" table={table} full={1} />
      </main>
    </div>
);

export default TablePage;