import React from 'react'
import { useState } from 'react'
import MyInfoList from './MyInfoList'


const MyInfo = () => {
  const [info, setInfo] = useState({
    id: 1,
    name: '������',
    date: '2001.07.26',
    accountNum: '32424153243413',
  })

  const [anniversaries, setAnniversaries] = useState([
    {
      anniversaryId: 1,
      title: '100���Դϴ�',
    },
    {
      anniversaryId: 2,
      title: '����',
    },
    {
      anniversaryId: 3,
      title: '����',
    },
  ])

  return (
    <div>
      <MyInfoList info={info} anniversaries={anniversaries} />
    </div>
  )
}

export default MyInfo
