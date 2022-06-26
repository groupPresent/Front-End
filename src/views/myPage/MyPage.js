import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Article from './Article'
import Create from './Create'
import Header from './Header'
import Nav from './Nav'
import Update from './Update'
import Modal from './Modal'

const MyPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="myInfo">�� ����</Link>
        </li>
        <li>
          <Link to="funded">���� �ݵ�</Link>
        </li>
        <li>
          <Link to="funding">���� �ݵ�</Link>
        </li>
      </ul>
    </>
  )
}

export default MyPage
