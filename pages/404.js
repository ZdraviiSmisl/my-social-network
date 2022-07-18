import Heading from "../src/components/Heading";
import styles from "../styles/404.module.scss"
import {useEffect} from "react";
import {useRouter} from "next/router";


const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [router])

  return (
    <>
      <div className={styles.container}>
        <Heading text="404"/><br/>
        <Heading teg="h2" text="page doesn't exist"/>
        <bt/>
        <Heading teg="h2" text="You'll be redirected to home page"/>
      </div>
    </>
  )
};
export default Error;