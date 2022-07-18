import Heading from "../../src/components/Heading";
import Head from "next/head";
import styles from "../../styles/reset.module.scss"

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const date = await res.json();

  if (!date) {
    return {notFound: true,}
  }

  return {
    props: {allUsers: date["users"]},
  }
}


const Users = ({allUsers}) => {
  return (
    <>
      <div className={styles.page__center}>
        <Head>
          <title>Users</title>
        </Head>
        <Heading text="Users List:"/>
        <ul>
          {allUsers && allUsers.map(({id, firstName, lastName, email}) => (
            <li key={id}><strong>{`${firstName} ${lastName}`}</strong> ({email}) </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Users;