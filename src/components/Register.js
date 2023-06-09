import {useRef, useEffect, useState} from "react"
/*import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";*/
import React from 'react';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd,setPwd]=useState("");
  const[validPwd,setValidPwd]=useState(false);
  const[pwdFocus,setPwdFocus]=useState(false);

  const[matchPwd,setMatchPwd]=useState("");
  const[validMatch,setValidMatch]=useState(false);
  const[matchFocus,setMatchFocus]=useState(false);

  const[errMsg,setErrMsg]=useState("");
  const[success,setSuccess]=useState(false);

    useEffect(()=>{
      userRef.current.focus();
    },[]);

    useEffect(()=>{
      const result=USER_REGEX.test(user);
      setValidName(result);
    },[user]);

    useEffect(()=>{
      const result = PWD_REGEX.test(pwd);
      setValidPwd(result);
      const match=pwd===matchPwd;
      setValidMatch(match);
    },[pwd,matchPwd]);

    useEffect(()=>{
      setErrMsg("");
    },[user,pwd,matchPwd])

  return (
    <section>
      <p ref={errRef} className={""} aria-live="assertive">{errMsg}</p>
    </section>
  );
};

export default Register;