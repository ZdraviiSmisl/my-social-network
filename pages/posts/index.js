import Heading from "../../src/components/Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import styles from "../../styles/Posts.module.scss"
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import Error from "../404";
import {useEffect} from "react";
import {getPosts} from "../../src/store/action-creators";
import axios from "axios";


const Posts = () => {
  const dispatch = useDispatch();
  const {posts, isLoading, error, total, skip, limit} = useSelector(state => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts(axios))
  }, []);

  return (
    <>
      <div className={res.page__center}>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading text="Posts List:"/>
        {isLoading && <h1>...Loading user posts</h1>}
        {error && <Error/>}
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