import React, { useState } from 'react'
import {storage} from '../config/firebase'
import { ref,uploadBytes } from 'firebase/storage';

function ImageUpload() {


    //file upload state
    const [fileUpload,setFileUpload] = useState(null)

    const uploadFile=async()=>{
        if(!fileUpload) return;
        const fileFolderRef = ref(storage,`projectFile/${fileUpload.name}`)
        try{
            await uploadBytes(fileFolderRef,fileUpload)
        }catch(err){
            console.error(err)
        }
      
    }

  return (
    <div>
        <input type='file' placeholder='upload image' onChange={(e)=>{setFileUpload(e.target.files[0])}}></input>
        <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default ImageUpload