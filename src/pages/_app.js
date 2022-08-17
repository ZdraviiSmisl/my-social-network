import '../../styles/globals.scss'
import Layout from "../components/Layout"
import Head from "next/head";
import {SessionProvider} from "next-auth/react";
import {Provider} from "react-redux";
import {useStore} from "../store"


function SocialNetwork({Component, pageProps: {session, ...pageProps}}) {
  const store = useStore(pageProps.initialReduxStore)
  return (
    <div className="wrapper">
      <Provider store={store}>
        <SessionProvider session={session}>
          <Layout>
            <Head>
              <title>Social Network</title>
            </Head>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
        </SessionProvider>
      </Provider>
    </div>
  )
}


export default SocialNetwork
