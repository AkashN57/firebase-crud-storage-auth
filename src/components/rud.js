import React, { useEffect, useState } from 'react'
import {getDocs,collection,deleteDoc,doc,updateDoc} from 'firebase/firestore'
import {db} from '../config/firebase'

function Read() {

    const [movieList,setMovieList] = useState([])
    const moviesCollectionRef = collection(db,'movies')

    //Read Function
    

    useEffect(()=>{

      const getMovieList= async()=>{
        //READ
        //SET TO STATE
        try{
          const data = await getDocs(moviesCollectionRef)
  
           const filteredData = data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id,
           }))
          
          setMovieList(filteredData)
          console.log(filteredData)
  
        }catch(err){
          console.error(err)
        }
       
    }
     //CALLING FUNCTION
     getMovieList()
     
     })
     const [updatedtitle,setUpdatedTitle] = useState('')

  
     //Delete Function
     const deleteMovie=async(id)=>{
       const movieDoc = doc(db,'movies',id)
       await deleteDoc(movieDoc)
     }
    //Update Function
     const updateMovieTitle=async(id)=>{
       const movieDoc = doc(db,'movies',id)
       await updateDoc(movieDoc,{title:updatedtitle})
     } 

  return (
    
    <div>
      <h2>Movie  List</h2>
        {movieList.map((movie)=>{
      return(
        <div> 
        <h1 style={{color:movie.recivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
        <h3>{movie.releaseDate}</h3>
        <p>{movie.recivedAnOscar}</p>
        <button onClick={()=>deleteMovie(movie.id)}>Delete</button>  <br></br>
        <br/>
        <input type='text' placeholder='New Title' onChange={(e)=>{setUpdatedTitle(e.target.value)}}></input>
        <button onClick={()=>updateMovieTitle(movie.id)}>Update</button>
      </div>
      )
      
     })}
    </div>
  )
}

export default Read