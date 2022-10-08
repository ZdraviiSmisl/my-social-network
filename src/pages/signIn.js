import styles from "../../styles/login.module.scss";
import Head from "next/head";
import {useEffect, useState} from "react";
import Heading from "../components/Heading";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {setErrorMessage} from "../store/action-creators-posts";
import {getSession, signIn, useSession} from "next-auth/react";


export default function SignIn() {
  const router = useRouter();
  const {errorMsg} = useSelector(state => state.authReducer);
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: "/posts"
      }
    )
    if(res.url) await router.push(res.url);
  }

  const {status} = useSession();


  useEffect(() => {
    setErrorMessage("");
  }, [email, password])


  return (

    <>
      {/*   {status === "authenticated" ? (
        <section className={styles.form__wrap}>
          <Heading styleHead={styles.form__titleAlt} text={"You are logged in!"}/>
          <p className={styles.form__wrapGoHome}>
            <a className={styles.form__goHome} href={"/"} onClick={() => router.push("/")}>Go to Home</a>
          </p>
        </section>

      ) : (*/}
      <section className={styles.form__wrap}>
        <p className={errorMsg ? styles.form__errMsg : styles.form__offscreen}>{errorMsg}</p>
        <Head>
          <title>Login page</title>
        </Head>
        <form className={styles.form} onSubmit={onFormSubmit} autoComplete="off">
          <p className={styles.form__login}>
            <label htmlFor="e-mail">E-mail:</label>
            <input className={styles.form__input}
                   id="e-mail"
                   type="text"
                   name="e-m-a-i-l"
                   placeholder="e-mail"
                   onChange={e => setUserEmail(e.target.value)}
                   value={email}
                   autoComplete="new-email"
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
                   minLength="7"
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
      {/* )
      }*/}
    </>
  )
}

/*
export async function getServerSideProps(context) {
  const content = null;
  if (!content) {
    return {
      redirect: {
        permanent: false,
        destination: '/posts',
      },
    };
  }

  return {
    props: {},
  };
}*/
