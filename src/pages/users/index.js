import Heading from "../../components/Heading";
import Head from "next/head";
import res from "../../../styles/reset.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../store/action-creators-users";
import Link from "next/link";
import styles from "../../../styles/Users.module.scss"
import Error from "../404";
import {nanoid} from "nanoid";
import {Spinner} from "../../components/Spinner";


const Users = () => {
  const dispatch = useDispatch();

  const {users, isLoading, error} = useSelector(state => state.usersReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      {
        <div className={res.page__center}>
          {isLoading === true ? (<Spinner/>) : (
            <div>
              <Head>
                <title>Users</title>
              </Head>
              <Heading text="Users List:"/>
              {error && <Error/>}
              <ul>
                {users ? (users.map(({id, firstName, lastName}) => (
                  <li key={nanoid()}>
                    <Link href={`/users/${id}`}>
                      <span className={styles.users__name}>{`${firstName} ${lastName}`}</span>
                    </Link>
                  </li>
                ))) : <p>No users to display</p>}
              </ul>
              {/* <Pagination/>*/}
            </div>
          )}
        </div>
      }
    </>
  )
}
export default Users;