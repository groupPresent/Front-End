import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useState, useCallback } from 'react'
import MainList from './pages/MainList'
import MyInfo from './pages/MyInfo'
import CreateAnniversary from './pages/CreateAnniversary'

const MyPage = () => {
  // const [mainMode, setMainMode] = useState('')
  

  // let content = null

  // switch (mainMode) {
  //   case 'READ':
  //     content=<MyInfo/>
  //     break
  //   case 'CREATE': //扁充老 货肺 积己
  //     content=<CreateAnniversary setMode={setMode}/>
  //     break

  //   case 'UPDATE':
  //     break

  //   case 'DELETE':
  //     break

  //   default:
  // }


  return (
    <>
      <MainList />
      {/* {content} */}
      
    </>
  )
}

export default MyPage
