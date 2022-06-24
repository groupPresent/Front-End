import { Link } from 'react-router-dom'
import { useState} from 'react'

const EventLists = ({event}) => {
  
    const {img,content,day}=event

  return (
   <div>
        <div>(이미지){img}</div>
        <div>{content}</div>
        <div>D-{day}일</div>
   </div>
  )
}

export default EventLists
