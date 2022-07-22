import '../styles/globals.scss'
import Layout from "../components/Layout"
import Head from "next/head";
import {SessionProvider} from "next-auth/react";

function SocialNetwork({Component, pageProps: {session, ...pageProps}}) {
  return (
    <div className="wrapper">
      <Layout>
        <SessionProvider session={session}>
          <Head>
            <title>Social Network</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&family=Splash&family=Tapestry&display=swap"
              rel="stylesheet"/>
          </Head>
          <main>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </Layout>

    </div>
  )
}


export default SocialNetwork
