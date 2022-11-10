import Head from 'next/head'
import News from '../components/News/News';
import Matches from '../components/Match/Matches';
import Rating from '../components/RatingTable/Rating';
import Leaders from '../components/Leaders/Leaders';
import Vote from '../components/Vote';
import Heading from '../components/general/Heading';

const HomePage = ()  => (
    <div>
      <Head>
        <title>Импульс</title>
        <meta name="Impuls" content="Hockey team" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Heading title="Главная" />
        <News />
        <Matches />
        <Rating title="Турнирная таблица 2022/2023" />
        <Leaders />
        <Vote />
      </main>
    </div>
);

export default HomePage;

