import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../../styles/reset.module.scss"
import styles from "../../../styles/Posts.module.scss"
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import Error from "../404";
import {useEffect} from "react";
import {deletePost, getPosts} from "../../store/action-creators";
import styleHead from "../../../styles/Heading.module.scss"
import {range} from "../../features/range"
import Pagination from "../../components/Pagination";
import {Button} from "../../components/Button";
import custom from "../../../styles/Button.module.scss"


const Posts = () => {

  const dispatch = useDispatch();
  const {posts, isLoading, error, totalPosts, limitPosts, skipPosts} = useSelector(state => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts(limitPosts, skipPosts))
  }, [skipPosts]);

  const totalPages = Number(Math.ceil(totalPosts / limitPosts));
  let pages = [];
  pages = range(1, totalPages + 1);

  console.log(posts)
  return (
    <>
      <div className={`${res.page__center} ${styles.postsGrid}`}>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading styleHead={styleHead.postsTitle} text="Posts List:"/>
        {isLoading && <Heading styleHead={styles.postLoadingMessage} text="...Loading user posts"/>}
        {error && <Error/>}
        {Array.isArray(posts) && posts.length ? (
          <ul className={styles.postsList}>
            {posts && posts.map(({id, title}) => {
              return (
                <li key={id}
                    className={styles.postItem}>
                  <Link href={`/posts/${id}`}>
                    <p className={styles.posts__titlePost}>{title}</p>
                  </Link>
                  <Button onClick={() => dispatch(deletePost(id))} btn={custom.btn}
                          buttonStyle={`${custom.btnPrimarySolid}`} type="button" key={id}
                          buttonSize={`${custom.btnMedium}`} children="Delete"/>
                </li>
              );
            })}
          </ul>
        ) : (<Heading styleHead={styles.postsMessage} tag={"p"} text="There are no messages on this page"/>)
        }

        <Pagination totalItems={totalPosts} skipItems={skipPosts} limitItems={limitPosts} pages={pages}/>

      </div>
    </>
  )
};

export default Posts;