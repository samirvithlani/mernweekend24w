import React from 'react'

export const MuButton = (props) => {
  return (
    <button className={props.class ? props.class :"btn btn-info"}
    onClick={props.clickHandler} style={{height:props.height ? props.height:"40px",color:"white"}}>{props.name}</button>
  )
}
