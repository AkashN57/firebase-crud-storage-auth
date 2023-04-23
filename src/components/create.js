import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore' 
import {db,auth} from "../config/firebase"

function Create() {

  const [newMovieTitle,setNewMovieTtile] = useState('')
  const [newReleasedDate,setReleasedDate] = useState(0)
  const [newMovieOscar,setNewMovieOscar] = useState(false)

  const moviesCollectionRef = collection(db,'movies')

  const onSubmitMovie=async()=>{
    try{
       await addDoc(moviesCollectionRef,
      {title:newMovieTitle,
      releaseDate:newReleasedDate,
      recivedAnOscar:newMovieOscar,
      userId:auth?.currentUser?.uid})
    }catch(err){
      console.error(err)
    }
   
  }

  return (
    <div>
      
<input placeholder='Movie Title...' type='text' onChange={(e)=>{setNewMovieTtile(e.target.value)}}/> 
<input placeholder='Release Date...' type='number' onChange={(e)=>{setReleasedDate(Number(e.target.value))}}/> 
<input type='checkbox' checked={newMovieOscar} onChange={(e)=>{setNewMovieOscar(e.target.checked)}}/>
<label>Recived An Oscar</label><br/>
<button onClick={onSubmitMovie}>Submit Movie</button>


    </div>
  )
}

export default Create