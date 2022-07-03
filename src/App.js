import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

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

import Friends from "./views/friendPage/Friends";
import FriendTab from "./views/friendPage/FriendTab";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="customerService" element={<CustomerService />} />
        <Route path="receivedfunding" element={<ReceivedFunding />} />
        <Route path="sentfunding" element={<SentFunding />} />
        <Route path="detail" element={<Detail/>} />
        <Route path="/user/funding/review" element={<ReviewPage mode='get' limit_num='false'/>} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friendtab" element={<FriendTab />} />

      </Routes>
    </>
  )
}

export default App
