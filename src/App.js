import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import Main from './views/mainPage/Main'
import MyPage from './views/myPage/MyPage'
import CustomerService from './views/customerService/CustomerService'
import ReceivedFunding from './views/myPage/ReceivedFunding'
import SentFunding from './views/myPage/SentFunding'
import Detail from './views/detailPage/Detail'
import ReviewPage from "./views/reviewPage/ReviewPage";
import ReviewList from "./views/reviewPage/ReviewList";
import ReviewCreate from "./views/reviewPage/Write";
=======
import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";
import "./styles.css";
import Friends from "./views/friendPage/Friends";
import FriendTab from "./views/friendPage/FriendTab";
>>>>>>> 1f270b645a1d74b217c9fd9026c16bcb807c2c91

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        <Route path="myPage" element={<MyPage />} />
        <Route path="customerService" element={<CustomerService />} />
        <Route path="receivedfunding" element={<ReceivedFunding />} />
        <Route path="sentfunding" element={<SentFunding />} />
        <Route path="detail" element={<Detail/>} />
        <Route path="/user/funding/review" element={<ReviewPage mode='get' limit_num='false'/>} />
=======
        <Route path="/" element={<Friends />} />
        <Route path="/friendtab" element={<FriendTab />} />
>>>>>>> 1f270b645a1d74b217c9fd9026c16bcb807c2c91
      </Routes>
    </>
  )
}

export default App
