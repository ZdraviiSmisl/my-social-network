import Heading from "../components/Heading";
import styles from "../../styles/404.module.scss"
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";


const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [router])

  return (
    <div className={styles.container}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404"/><br/>
      <Heading teg="h2" text="page doesn't exist"/>
      <bt/>
      <Heading teg="h2" text="You'll be redirected to home page"/>
    </div>
  )
};
export default Error;