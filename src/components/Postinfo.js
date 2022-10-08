import Heading from "./Heading";
import styles from "../../styles/PostInfo.module.scss"
import Image from 'next/image'
import profilePic from "../images/avatar.png"
import ReactionButtons from "./reactionButtons";
import {useDispatch, useSelector} from "react-redux";
import {incrementReactions} from "../store/action-creators-posts";


const Postinfo = ({post}) => {
  const dispatch = useDispatch();
  const {reactionsCount} = useSelector(state => state.postsReducer);
  const {title, body, tags} = post || {};
  return (
    <article className={styles.post}>
      <a href={"#"} className={styles.postWrapImg}>
        <Image sizes={"30vw"} src={profilePic} width={100} height={100} alt="User avatar" layout={"responsive"}/>
      </a>
      <Heading styleHead={styles.postTitle} tag="h3" text={title}/>
      <p className={styles.postBody}>{body}</p>
      <ul className={styles.postList}>
        {tags && tags.map((tag, i) => (
          <li key={i}>
            <a href={"#"} className={styles.postTag}>#{tag}</a>
          </li>
        ))}
      </ul>
      <div className={styles.postReactions}>
        <button type="button" className={`${styles.postLikeBtn} ${reactionsCount > 0 ? styles.postBtnActive : null} ${reactionsCount > 99 ? styles.postBtnActive100 : null} ${reactionsCount > 1000 ? styles.postBtnActive1000 : null}`}
              onClick={() => dispatch(incrementReactions(Number(1)))}>
          <svg className={`${styles.postImgHeart} ${reactionsCount>99 ? styles.postImgHeartOver99: null}`} width={20} height={20} xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 490.4 490.4">
          <path
            d="M222.5 453.7a32.3 32.3 0 0045.8 0L448 274a144 144 0 00.1-204.3A143.3 143.3 0 00346 27.4c-37.9 0-73.6 14.5-100.7 40.9a143.9 143.9 0 00-101-41.1c-38.5 0-74.7 15-102 42.2A143.6 143.6 0 000 171.6c0 38.5 15.1 74.8 42.4 102.1l180.1 180zM59.7 86.8a119 119 0 0184.7-35.1c32 0 62.2 12.5 84.9 35.2l7.4 7.4c2.3 2.3 5.4 3.6 8.7 3.6 3.2 0 6.4-1.3 8.7-3.6l7.2-7.2a119.2 119.2 0 0184.9-35.2A119 119 0 01430.9 87a119 119 0 0135.1 84.8c0 32-12.5 62.1-35.2 84.8L251 436.4a8.3 8.3 0 01-11.2 0l-180-180a119.5 119.5 0 01-.1-169.6z"/>
          </svg>
          <p className={`${styles.postLikesCount} ${reactionsCount>1000 ? styles.postLikesOver1999 : null}`}>{reactionsCount > 0 && reactionsCount}</p>
        </button>
        <ReactionButtons/>
      </div>
    </article>
  )
}

export default Postinfo;