import Heading from "./Heading";

const Postinfo = ({post}) => {
  const {title, body, userId, tags, reactions} = post || {};
  return (
    <>
      <Heading tag="h3" text={title}/>
      <p>{body}</p>
      <span>{userId}</span>
      <ul>
        {tags && tags.map((tag, i) => (
          <li key={i}>
            <p>#{tag}</p>
          </li>
        ))}
      </ul>
      <span>{reactions}</span>
    </>
  )
}

export default Postinfo;