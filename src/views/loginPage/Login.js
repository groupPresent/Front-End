import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [id, setId] = useState('')
  const [pwd, setPwd] = useState('')

  const onChangeId = (e) => {
    setId(e.target.value)
  }

  const onChangePwd = (e) => {
    setId(e.target.value)
  }

  const login = () => {
    
  }

  return (
    <div>
      <input type="text" value={id} onChange={onChangeId}/>
      <br/>
      <input type="text" value={pwd} onChange={onChangePwd} />
      <br/>
      <button onClick={login}>로그인</button>
      <Link to='/signUp'>회원가입</Link>
    </div>
  )
}

export default Login
