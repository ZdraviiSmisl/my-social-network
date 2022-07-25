import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import styles from "../../styles/Posts.module.scss"
import Link from "next/link";


export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const date = await res.json();

  if (!date) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      allInfo: date,
    }
  }
}

const Posts = ({allInfo}) => {

  const {posts, total, skip, limit} = allInfo || {};
  return (
    <>
      <div className={res.page__center}>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading text="Posts List:"/>
        <ul>
          {posts && posts.map(({id, title}) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <p className={styles.posts__titlePost}>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <strong>Other info:</strong>
          <ul>
            <li><span>Total: {total}</span></li>
            <li><span>Skip: {skip}</span></li>
            <li><span>Limit: {limit}</span></li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default Posts;