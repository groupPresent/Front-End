import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">마이페이지</Link>
        </li>
        <li>
          <Link to="/">친구 목록</Link>
        </li>
        <li>
          <Link to="/">로그아웃</Link>
        </li>
        <li>
          <Link to="/">내가 남긴 후기</Link>
        </li>
        <li>
          <Link to="/">기념일 등록</Link>
        </li>
        <li>
          <Link to="/">펀딩 등록</Link>
        </li>
        <li>
          <Link to="/">고객 센터</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
