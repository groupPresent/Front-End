import React from 'react'
import MyPage from './views/myPage/MyPage'
import { Route, Routes, Link } from 'react-router-dom'
import Main from './views/mainPage/Main'
import MyInfo from './views/myPage/pages/MyInfo'

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>


        {/* <Route path="/mypage" element={<MyPage />}></Route>
        <Route path='/mypage/myinfo' element={<MyInfo/>}/> */}

        
        
        <Route path="/mypage" element={<MyInfo/>}/> {/* 디폴트가 내 정보이므로 */}

        {/* <Route path='/mypage/funded' element={}/>
        <Route path='/mypage/funding' element={}/> 
        받은 펀딩, 보낸펀딩 이것들은 아직 안 만들어놓아서 주석처리*/}
      </Routes>

    
    </div>
  )
}

export default App
