import Heading from "./Heading";
import styles from "../../styles/PostInfo.module.scss"
import Image from 'next/image'
import profilePic from '../images/avatar.png'


const Postinfo = ({post}) => {
  const {title, body, userId, tags, reactions} = post || {};
  return (
    <article className={styles.post}>
      <p className={styles.postWrapImg}>
        <Image sizes={"30vw"} src={profilePic} width={100} height={100} alt="User avatar" layout={"responsive"}/>
      </p>
      <Heading styleHead={styles.postTitle} tag="h3" text={title}/>
      <p className={styles.postBody}>{body}</p>
      <ul className={styles.postList}>
        {tags && tags.map((tag, i) => (
          <li key={i}>
            <p>#{tag}</p>
          </li>
        ))}
      </ul>
      <span className={styles.postReactions}>{reactions}</span>
    </article>
  )
}

export default Postinfo;