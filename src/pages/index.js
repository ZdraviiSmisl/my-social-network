import Heading from "../components/Heading";
import styles from "../../styles/Home.module.scss"
import Head from "next/head";
import custom from "../../styles/Button.module.scss"
import {Button} from "../components/Button";
import {setAuthUser} from "../store/action-creators-posts";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
  const {authUser}=useSelector(state=>state.authReducer);
  const dispatch=useDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home page"/>
      {authUser && <Button onClick={()=>dispatch(setAuthUser(false))} buttonStyle={custom.btnPrimaryOutline} btn={custom.btn} type="button" text="Log Out"/>}

    </div>
  )
}

export default Home;