import {useAuth} from "../context/AuthProvider"
import {useRouter} from "next/router";
import {useEffect} from "react";
import AccessDenied from "./AccessDenied";

export const PrivateRoute = ({protectedRoutes, children}) => {
  const {authUser, isLoading} = useAuth();
  const router = useRouter();


  const protectedPath = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!authUser && !isLoading && protectedPath) {
     router.push("/login")
    }
      },[authUser, isLoading, protectedPath, router])

  return children;
}

