import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'

const MainList = () => {
  return (
    <div>
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
    </div>
  )
}

export default MainList
