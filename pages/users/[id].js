import Head from "next/head";
import styles from "../../styles/reset.module.scss";
import Userinfo from "../../src/components/Userinfo";

export async function getServerSideProps(context) {
  const {id} = context.params;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const date = await res.json();

  if (!date) {
    return {
      notFound: true,
    }
  }

  return {
    props: {user: date}
  }
}

const User = ({user}) => (
  <>
    <div className={styles.page__center}>
      <Head>
        <title>User</title>
      </Head>
      <Userinfo user={user}/>
    </div>
  </>
);

export default User;