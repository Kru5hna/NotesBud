'use client'

import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider() {
   const {children} = props;
   const [currentUser, setCurrentUser] = useState(null)

   const value ={
      currentUser
   }
   return(
      <AuthContext value={value}>
      {children}
   </AuthContext>
   )
}