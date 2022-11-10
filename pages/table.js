import Head from "next/head";
import Heading from "../components/general/Heading";
import Rating from "../components/RatingTable/Rating";

const TablePage = ()  => (
    <div>
      <Head>
        <title>Рейтинговая таблица</title>
        <meta name="RatingTable" content="RatingTable" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Турнирная таблица" />
        <Rating title="" />
      </main>
    </div>
);

export default TablePage;