import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../../styles/reset.module.scss"
import styles from "../../../styles/Posts.module.scss"
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import Error from "../404";
import {useEffect} from "react";
import {getPosts} from "../../store/action-creators";
import styleHead from "../../../styles/Heading.module.scss"
import {range} from "../../features/range"
import Pagination from "../../components/Pagination";


const Posts = () => {

  const dispatch = useDispatch();
  const {posts, isLoading, error, totalPosts, limitPosts, skipPosts} = useSelector(state => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts(limitPosts, skipPosts))
  }, [skipPosts]);

  const totalPages = Number(Math.ceil(totalPosts / limitPosts));
  let pages = [];
  pages = range(1, totalPages);


  return (
    <>
      <div className={`${res.page__center} ${styles.postsGrid}`}>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading styleHead={styleHead.postsTitle} text="Posts List:"/>
        {isLoading && <h1>...Loading user posts</h1>}
        {error && <Error/>}
        <ul className={styles.postsList}>
          {posts && posts.map(({id, title}) => {
            return (
              <li key={id}
                  className="grid grid-cols-gridLi items-center justify-between pb-[10px] min-h-[30px]">
                <Link href={`/posts/${id}`}>
                  <p className={styles.posts__titlePost}>{title}</p>
                </Link>
                <button
                  className={`${styles.postDelete} btnCustom`}>Delete
                </button>
              </li>
            );
          })}
        </ul>

        <Pagination totalItems={totalPosts} skipItems={skipPosts} limitItems={limitPosts} pages={pages}/>

      </div>
    </>
  )
};

export default Posts;