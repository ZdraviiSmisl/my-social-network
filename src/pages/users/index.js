import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../../styles/reset.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../store/action-creators";
import Link from "next/link";
import styles from "../../../styles/Users.module.scss"
import Error from "../404";
import {getSession, useSession} from "next-auth/react";
import AccessDenied from "../../components/AccessDenied";
import {nanoid} from "nanoid";


export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}


const Users = () => {
  const dispatch = useDispatch();
  const {data: session, status} = useSession();
  const {users, isLoading, error} = useSelector(state => state.usersReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  if (status === "unauthenticated")
    return <AccessDenied/>


  return (
    <>
      <div className={res.page__center}>
        <Head>
          <title>Users</title>
        </Head>
        <Heading text="Users List:"/>
        {isLoading && <h1>...Loading users</h1>}
        {error && <Error/>}
        <ul>
          {users && users.map(({id, firstName, lastName}) => (
            <li key={nanoid()}>
              <Link href={`/users/${id}`}>
                <span className={styles.users__name}>{`${firstName} ${lastName}`}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* <Pagination/>*/}
      </div>
    </>
  )
}
export default Users;