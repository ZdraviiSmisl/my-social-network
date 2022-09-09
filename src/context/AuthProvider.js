import {createContext, useContext, useState} from "react";
import {useSelector} from "react-redux";

const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
  const {authUser,isLoading}=useSelector(state=>state.authReducer)

  return (
    <AuthContext.Provider value={{authUser,isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext);

export default AuthContext;