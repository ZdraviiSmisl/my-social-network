import '../../styles/globals.scss'
import Layout from "../components/Layout"
import Head from "next/head";
import {Provider} from "react-redux";
import {useStore} from "../store"
import {AuthProvider} from "../context/AuthProvider";
import {PrivateRoute} from "../components/PrivateRoute";


function SocialNetwork({Component, pageProps}) {
  const store = useStore(pageProps.initialReduxStore);
  const protectedRoutes=["/users","/posts"];
  return (
    <div className="wrapper">
      <Provider store={store}>
        <AuthProvider>
          <PrivateRoute protectedRoutes={protectedRoutes}>
          <Layout>
            <Head>
              <title>Social Network</title>
            </Head>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
          </PrivateRoute>
        </AuthProvider>

      </Provider>
    </div>
  )
}


export default SocialNetwork
