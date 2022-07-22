import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import styles from "../../styles/Users.module.scss"
import Link from "next/link";

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
      <div className={res.page__center}>
        <Head>
          <title>Users</title>
        </Head>
        <Heading text="Users List:"/>
        <ul>
          {allUsers && allUsers.map(({id, firstName, lastName}) => (
            <li key={id}>
              <Link href={`/users/${id}`}>
                <span className={styles.users__name}>{`${firstName} ${lastName}`}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Users;