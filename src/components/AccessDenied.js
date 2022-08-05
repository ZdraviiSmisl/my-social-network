import Heading from "./Heading";
import Head from "next/head";
import res from "../../styles/reset.module.scss"
import {useRouter} from "next/router";
import {useEffect} from "react";

const AccessDenied = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [])

  return (
    <>
      <div className={res.page__center}>
        <Head>
          <title>Access Denied</title>
        </Head>
        <Heading tag="h1" text="You aren't authorized"/>
      </div>

    </>
  )
}
export default AccessDenied;