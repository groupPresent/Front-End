import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Article from './Article'
import Create from './Create'
import Header from './Header'
import Nav from './Nav'
import Update from './Update'
import Modal from './Modal'
import MainList from './MainList'
import MyInfo from './MyInfo'
const MyPage = () => {

  return (
    <>
        <MainList/>
        <Routes>
            <Route to='/myInfo' element={<MyInfo/>}></Route>
            <Route to='/funded' element={}></Route>
            <Route to='/funding'></Route>
        </Routes>
    </>
  )
}

export default MyPage
