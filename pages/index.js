import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home page"/>
    <link rel="icon" href="/favicon.ico"/>
  </div>
)


export default Home;