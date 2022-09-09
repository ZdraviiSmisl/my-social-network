import styles from "../../styles/login.module.scss";
import Head from "next/head";
import {useEffect, useState} from "react";
import Heading from "../components/Heading";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUser, setErrorMessage} from "../store/action-creators";


export default function Login() {
  const router = useRouter();
  const {authUser, errorMsg} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(userName,password)

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password])


  const onFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(getAuthUser(userName, password));

  }

  return (
    <>
      {authUser ? (
        <section className={styles.form__wrap}>
          <Heading styleHead={styles.form__titleAlt} text={"You are logged in!"}/>
          <p className={styles.form__wrapGoHome}>
            <a className={styles.form__goHome} href={"/"} onClick={() => router.push("/")}>Go to Home</a>
          </p>
        </section>

      ) : (
        <section className={styles.form__wrap}>
          <p className={errorMsg ? styles.form__errMsg : styles.form__offscreen}>{errorMsg}</p>
          <Head>
            <title>Login page</title>
          </Head>
          <form className={styles.form} onSubmit={onFormSubmit} autoComplete="off">
            <p className={styles.form__login}>
              <label htmlFor="username">Username:</label>
              <input className={styles.form__input}
                     id="username"
                     type="text"
                     name="l-o-g-i-n"
                     placeholder="login"
                     onChange={e => setUserName(e.target.value)}
                     value={userName}
                     autoComplete="new-login"
                     required
              />
            </p>
            <p className={styles.form__password}>
              <label htmlFor="password">Password</label>
              <input className={styles.form__input}
                     id="password"
                     type="password"
                     name="p-a-s-s-w-o-r-d"
                     placeholder="password"
                     autoComplete="new-password"
                     onChange={e => setPassword(e.target.value)}
                     value={password}
                     required/>
            </p>

            <div
              className={`${styles.form__panel} ${styles.form__loaded}`}>
              <button className={`${styles.form__singIn} ${styles.form__singLink}`}>Sign in</button>
              <a className={`${styles.form__singUp} ${styles.form__singLink}`} href="#" onClick={(e) => {
                e.preventDefault();
              }}>{"Sign up"}</a>
            </div>
          </form>
        </section>
      )
      }
    </>
  )
}