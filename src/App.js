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
import ReviewCreate from "./views/Write/Write";
import Friends from "./views/friendPage/Friends";
import FriendTab from "./views/friendPage/FriendTab";
import Tab1 from "./views/friendPage/Tab1";
import Tab2 from "./views/friendPage/Tab2";
import WriteFundingPage from "./views/myPage/WriteFunding";


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
        <Route path="/friend" element={<Friends />} />
        <Route path="/friendtab" element={<FriendTab />} />
        <Route path="/Tab1" element={<Tab1 />} />
        <Route path="/Tab2" element={<Tab2 />} />
        <Route path="/user/funding" element={<WriteFundingPage mode='post' />} />
      </Routes>
    </>
  );
};   

export default App
