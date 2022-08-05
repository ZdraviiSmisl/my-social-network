import Heading from "../../src/components/Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../src/store/action-creators";
import Link from "next/link";
import styles from "../../styles/Users.module.scss"
import Error from "../404";


const Users = () => {
  const dispatch = useDispatch();
  const {users, isLoading, error} = useSelector(state => state.usersReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

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