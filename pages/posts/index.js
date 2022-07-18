import Heading from "../../src/components/Heading";
import Head from "next/head";
import styles from "../../styles/reset.module.scss"

export const getStaticProps = async () => {
  console.log("11111")
  const res = await fetch("https://dummyjson.com/posts");
  const date = await res.json();

  if (!date) {
    return {
      notFound: true,
    }
  }

  return {
    props: {allPosts: date["posts"]}
  }
}

const Posts = ({allPosts}) => {
  return (
    <>
      <div className={styles.page__center}>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading text="Posts List:"/>
        <ul>
          {allPosts && allPosts.map(({id, title, tags, total}) => (
            <li key={id}>{title} (userTags:{tags}) {total}</li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default Posts;