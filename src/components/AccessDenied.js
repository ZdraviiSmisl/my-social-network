import Heading from "./Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import {useRouter} from "next/router";
import {useEffect} from "react";

const AccessDenied = () => {
  const router = useRouter()



  useEffect( () => {
      router.push("/login").then(resolve=>setTimeout(resolve,5000))
  }, [])



  return (
    <>
      <div className={res.page__center}>
        <Head>
          <title>Access Denied</title>
        </Head>
        <Heading tag="p" text="You aren't authorized. You'll be redirected to login page"/>
      </div>

    </>
  )
}
export default AccessDenied;