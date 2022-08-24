import Heading from "../components/Heading";
import styles from "../../styles/404.module.scss"
import { useRouter } from 'next/router'
import Head from "next/head";
import {useEffect, useRef} from "react";


const Error = () => {
  const router = useRouter();
  const effectRun = useRef(false)


  useEffect(() => {
    console.log("effect ran")
    if(effectRun.current===true) {



      setTimeout(() => {
        router.push("/")
      }, 5000)


    }
    return ()=>{
      console.log("unmounted")
      effectRun.current=true;
    }

  }, [router])

  return (
    <div className={styles.container}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404"/>
      <Heading teg="h2" text="page doesn't exist"/>
      <Heading teg="h2" text="You'll be redirected to home page"/>
    </div>
  )
};
export default Error;