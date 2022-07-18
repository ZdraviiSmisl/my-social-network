import Heading from "../../src/components/Heading";
import Head from "next/head";
import styles from "../../styles/reset.module.scss";

const User = () => (

  <>
    <div className={styles.page__center}>
      <Head><title>User</title></Head>
      <Heading text="Evgeniy"/>
    </div>
  </>
);

export default User;