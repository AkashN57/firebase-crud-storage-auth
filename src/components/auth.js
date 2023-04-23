import React, { useState } from 'react'
import {auth,googleProvider} from "../config/firebase"
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth"

function Auth() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 

   console.log(auth?.currentUser?.email)

  const signIn = async()=>{
    try{
       await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
      console.error(err);
    }
   
  }
  const signInWithGoogle = async()=>{

    try{
       await signInWithPopup(auth,googleProvider)
    }catch(err){
      console.error(err)
    }
   
   
  }
  

  return (
    <div>
        <input type='email' placeholder='Email...' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type='password' placeholder='Password...' onChange={(e)=>{setPassword(e.target.value)}}></input>
        <br/><br/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <br/>
    </div>
  )
}

export default Auth