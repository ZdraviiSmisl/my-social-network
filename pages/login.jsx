import styles from "../styles/login.module.scss"
import reset from "../styles/reset.module.scss"
import {useRouter} from "next/router";
import {useEffect} from "react";
import {userService} from "../src/components/user-service";
import Head from "next/head";


export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // на главную, если авторизован
    if (userService.userValue) {
      router.push("/")
    }
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault()

    /*  return userService.login(username, password)
        .then(() => {
          // получаем возвращаемый адрес из параметров запроса
          const returnUrl = router.query.returnUrl || "/";
          router.push(returnUrl);
        })*/
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
        <a className={`${styles.form__singIn} ${styles.form__singLink} ${reset.page__link}`} href="#">{"Sign in"}</a>
        <a className={`${styles.form__singUp} ${styles.form__singLink} ${reset.page__link}`} href="#">{"Sign up"}</a>
      </form>
    </>
  )
}