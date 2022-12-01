import Head from "next/head";
import Heading from "../../components/general/Heading";
import Image from "next/image";
import NewsInfo from "../../components/News/NewsInfo";


export const getServerSideProps = async(context) =>{
  const {id} = context.params;
  const response = await fetch(`https://qwmks.pythonanywhere.com/api/news/${id}`)
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      newsEntity: data
    }
  }
}

const NewsEntityPage = ({newsEntity})  => (
    <div>
      <Head>
        <title>Новость</title>
        <meta name="NewsEntity" content="NewsEntity" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <NewsInfo news={newsEntity} />
    </div>
);

export default NewsEntityPage;