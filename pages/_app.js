import Layout from "..//components/general/Layout"
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  
);

export default MyApp
