import '../styles/globals.scss'
import Layout from "../src/components/Layout"
import Head from "next/head";


function SocialNetwork({Component, pageProps}) {
  return (
    <div className="wrapper">
      <Layout>
        <Head>
          <title>Social Network</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&family=Splash&family=Tapestry&display=swap"
            rel="stylesheet"/>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  )
}


export default SocialNetwork
