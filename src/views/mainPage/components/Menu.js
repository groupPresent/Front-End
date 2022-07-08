import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <ul class="myUl">
        <li>
          <Link to="myPage"><button style={{backgroundColor:'transparent'}}>마이페이지</button></Link>
        </li>
        <li>
          <Link to="/friend"><button style={{backgroundColor:'transparent'}}>친구 목록</button></Link>
        </li>
        <li>
          <Link to="/"><button style={{backgroundColor:'transparent'}}>로그아웃</button></Link>
        </li>
        <li>
          <Link to="/"><button style={{backgroundColor:'transparent'}}>내가 남긴 후기</button></Link>
        </li>
        <li>
          <Link to="/"><button style={{backgroundColor:'transparent'}}>기념일 등록</button></Link>
        </li>
        <li>
          <Link to="/"><button style={{backgroundColor:'transparent'}}>펀딩 등록</button></Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
