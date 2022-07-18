import Heading from "../../src/components/Heading";
import Head from "next/head";
import styles from "../../styles/reset.module.scss";

const Post = () => (
  <>
    <div className={styles.page__center}>
      <Head><title>Post</title></Head>
      <Heading text="I must study faster"/>
    </div>
  </>
)

export default Post;