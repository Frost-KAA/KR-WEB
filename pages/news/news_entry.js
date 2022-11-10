import Head from "next/head";
import Heading from "../components/Heading";

const NewsEntityPage = ({title, imgpath, text, date})  => (
    <div>
      <Head>
        <title>Новость</title>
        <meta name="NewsEntity" content="NewsEntity" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title={title} />
        <p>{date}</p>
        <Image src={imgpath} width="800" height="600" alt="news_img"/>
        <p>{text}</p>
      </main>
    </div>
);

export default NewsEntityPage;