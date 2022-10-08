import React, {useEffect} from 'react';
import {signOut} from "next-auth/react";
import {useRouter} from "next/router";

const SignOut = () => {
  const router = useRouter();
  useEffect(() => {
    const res = signOut({redirect: true, callbackUrl: "/signIn"});

/*
    router.push("/signIn");
*/


  }, [])
  return null;
};

export default SignOut;