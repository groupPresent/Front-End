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

        
        
        <Route path="/mypage" element={<MyInfo/>}/> {/* ����Ʈ�� �� �����̹Ƿ� */}

        {/* <Route path='/mypage/funded' element={}/>
        <Route path='/mypage/funding' element={}/> 
        ���� �ݵ�, �����ݵ� �̰͵��� ���� �� �������Ƽ� �ּ�ó��*/}
      </Routes>

    
    </div>
  )
}

export default App
