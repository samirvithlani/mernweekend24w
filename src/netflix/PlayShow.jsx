import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayShow = () => {
    const id = useParams().id;
  return (
    <div style={{backgroundColor:"greenyellow",height:"400px",width:"100%"}}>
        <h1>PLAYING SHOW... {id}</h1>
    </div>
  )
}
