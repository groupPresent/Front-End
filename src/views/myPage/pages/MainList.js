import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'

const MainList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="mypage">내 정보</Link>
        </li>
        <li> 
          <Link to="mypage/funded">받은 펀딩</Link>
        </li>
        <li>
          <Link to="mypage/funding">보낸 펀딩</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainList
