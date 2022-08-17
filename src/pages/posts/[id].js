import Head from "next/head";
import styles from "../../../styles/reset.module.scss";
import Postinfo from "../../components/Postinfo";

export async function getServerSideProps(context) {
  const {id} = context.params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  const date = await res.json();

  if (!date) {
    return {
      notFound: true,
    }
  }

  return {
    props: {post: date}
  }
}

const Id = ({post}) => (
  <>
    <div className={styles.page__center}>
      <Head>
        <title>Post</title>
      </Head>
      <Postinfo post={post}/>
    </div>
  </>
)

export default Id;