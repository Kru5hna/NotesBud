'use client'

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider(props) {
   const {children} = props;
   const [currentUser, setCurrentUser] = useState(null);
   const [isLoadingUser, setIsLoadingUser] = useState(false);

   function signup(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
   }
   function login(email,password) {
      return signInWithEmailAndPassword(auth, email, password);
   }
   function logout() {
      setCurrentUser(null);
      return signOut(auth);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async(user) => {
         console.log('Authenticating User...');
         setIsLoadingUser(true);

         try {
            setCurrentUser(user);
            
            if(!user) {
               // we do not fetch or anything
               throw Error('No user found');

            }

         } catch (error) {
            console.log(error.message)
         } finally {
            setIsLoadingUser(false);
         }
      })
      return unsubscribe
   },[])

   const value ={
      currentUser,
      isLoadingUser,
      signup,
      login,
      logout
   }
   return(
      <AuthContext value={value} >
      {children}
   </AuthContext>
   )
}