import React from 'react'
import { useState } from 'react'
import Anniversaries from './Anniversaries'

const MyInfo = () => {
  const [info, setInfo] = useState({
    id: 1,
    name: '조민호',
    date: '1996.12.07',
    accountNum: '354643421',
  })

  return (
    <div>
      <ul>
        <li>{info.name}</li>
        <li>{info.date}</li>
        <li>{info.accountNum}</li>
      </ul>

        <Anniversaries/>

      
    </div>
  )
}

export default MyInfo
