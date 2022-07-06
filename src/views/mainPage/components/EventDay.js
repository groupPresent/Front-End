import { Link } from 'react-router-dom'
import { useState} from 'react'
import EventLists from './EventLists'

const EventDay = () => {

    const [events,setEvents]=useState([
        {
            id:1,
            img:null,
            content:'남자친구랑 100일',
            day:100
          },
          {
            id:2,
            img:null,
            content:'여자친구랑 200일',
            day:200
          },
          {
            id:3,
            img:null,
            content:'종강!',
            day:7
          },
          {
            id:4,
            img:null,
            content:'해외여행',
            day:10
          }
    ])
  return (
    <>
    <div class = 'eventday'>
        <div class = "imminient">
        </div>
    </div>
    <div class = "divimminientList">
        <div class = "imminientList">
            {events.map(event=>(
              <EventLists event={event} key={event.id}/>
            ))}
        </div>
     </div>
      
    </>
  )
}

export default EventDay
