import {useSession} from "next-auth/react";
import {useEffect} from "react";
import Router from "next/router";
import {Spinner} from "./Spinner";

const PrivateRout=()=> {
  const session = useSession();
  const{status,data}=session;
  console.log(session)

  useEffect(() => {
if(status==="unauthenticated") Router.replace("/pages/signIn").resolve("You aren't authenticated!")
  },[status])

  if (status==="authenticated")
    return (
      <div>
        This page is protected by Next-Auth
        {JSON.stringify(data.user,null,2)}
      </div>
    );
  return <Spinner/>
}

export default PrivateRout;