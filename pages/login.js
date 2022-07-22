import styles from "../styles/login.module.scss"
import Head from "next/head";
import {signIn, signOut, useSession} from "next-auth/react";


export default function Login() {
  const {data: session, status} = useSession()
  console.log({session, status})


  const onFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <form className={styles.form} onSubmit={onFormSubmit} autoComplete="off">
        <input className={`${styles.form__login} ${styles.form__input}`} type="text" name="l-o-g-i-n"
               placeholder="login"
               autoComplete="new-login"/>
        <input className={`${styles.form__password} ${styles.form__input}`} type="password" name="p-a-s-s-w-o-r-d"
               placeholder="password" autoComplete="new-password"/>
        <div
          className={`${styles.form__panel} ${!session && status === "loading" ? styles.form__loading : styles.form__loaded}`}>
          {!session && status === "unauthenticated" && (
            <a href="api/auth/signIn" onClick={event => {
              event.preventDefault()
              signIn("github");
            }}
               className={`${styles.form__singIn} ${styles.form__singLink}`}>{"Sign in"}
            </a>
          )}
          {session && status === "authenticated" && (
            <a href="api/auth/signOut" onClick={event => {
              event.preventDefault()
              signOut();
            }}
               className={`${styles.form__signOut} ${styles.form__singLink}`}>Sign out
            </a>)}
          <a className={`${styles.form__singUp} ${styles.form__singLink}`} href="#">{"Sign up"}</a>
        </div>

      </form>
    </>
  )
}