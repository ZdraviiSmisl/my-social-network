import Link from "next/link"
import styles from "../../styles/Navigation.module.scss"
import res from "../../styles/reset.module.scss"
import Image from "next/image";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";


const NavRouts = [{id: 1, name: "Home", path: "/"},
  {id: 2, name: "Users", path: "/users"},
  {id: 3, name: "Posts", path: "/posts"},
  {id: 4, name: "signIn", path: "/signIn"},
]


const Nav = () => {
  const router = useRouter();
  const {status} = useSession();
  if (status === "authenticated") {
    NavRouts[NavRouts.length - 1] = {id: 4, name: "signOut", path: "/signOut"}
  } else if(status==="unauthenticated"){
    NavRouts[NavRouts.length - 1] = {id: 4, name: "signIn", path: "/signIn"}

  }

  return (
    <nav className={`${styles.nav} ${res.page__list}`}>
      <Link href="/"><a className={styles.nav__logo}><Image src="/logo.png" width={100} height={100}
                                                            alt="Logo website"/></a></Link>
      <ul className={styles.nav__list}>
        {NavRouts.map(({id, name, path,}) => {
            return (
              <li key={id} className={styles.nav__item}>
                <Link href={path}>
                  <a
                    className={`${styles.nav__link} ${router.pathname === path ? styles.nav__linkActive : null}`}>{name}</a>
                </Link>
              </li>)
          }
        )}
      </ul>
    </nav>
  )
}

export default Nav;
