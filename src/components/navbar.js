import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../config/firebase'
import {Link} from 'react-router-dom'
import "../App.css"
import {signOut} from 'firebase/auth'

function Navbar() {

    const [user] = useAuthState(auth)

    const LogOut = async()=>{

        try{
          await signOut(auth)
        }catch(err){
          console.error(err)
        }
      
       
      }

  return (
    <div>
        <div className='navbar'>
    <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/read">Read</Link>
        <Link to="/image">Upload Image</Link>
       
        
    </div>
        <div className='user'>
          {user && <>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} width="100" height="80"/>
          <button onClick={LogOut}>Log Out</button>
          </>}
          
        </div>
    </div>
    </div>
  )
}

export default Navbar