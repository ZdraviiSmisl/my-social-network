import Heading from "../components/Heading";
import styles from "../../styles/Home.module.scss"
import Head from "next/head";
import custom from "../../styles/Button.module.scss"
import {Button} from "../components/Button";

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home page"/>

      <Button type="button" onClick={() => {
        console.log("It's working!")
      }} btn={custom.btn} buttonStyle={custom.btnPrimarySolid}
              buttonSize={custom.btnLarge}>Something
        doing</Button>

    </div>
  )
}

export default Home;