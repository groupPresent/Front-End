import React from 'react'
import { useState } from 'react'
import MyInfoList from './MyInfoList'


const MyInfo = () => {
  const [info, setInfo] = useState({
    id: 1,
    name: '김현수',
    date: '2001.07.26',
    accountNum: '32424153243413',
  })

  const [anniversaries, setAnniversaries] = useState([
    {
      anniversaryId: 1,
      title: '100일입니다',
    },
    {
      anniversaryId: 2,
      title: '졸업',
    },
    {
      anniversaryId: 3,
      title: '생일',
    },
  ])

  return (
    <div>
      <MyInfoList info={info} anniversaries={anniversaries} />
    </div>
  )
}

export default MyInfo
