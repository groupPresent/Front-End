import axios from 'axios'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onChangeId = (e) => {
    setUserName(e.target.value)
  }

  const onChangePwd = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    const info=
    {
      userName,
      password
    }
      const getToken = async ()=>{
        try{
          let response = await axios.post('http://3.34.191.132:8080/user/login',JSON.stringify(info))
          sessionStorage.setItem('token',response.headers.authorization)
          console.log(response.headers.authorization)
        }
        catch (e){
          console.log(e)
        }
      }

    getToken()
  }

  return (
    <div>
      <input type="text" value={userName} onChange={onChangeId}/>
      <br/>
      <input type="text" value={password} onChange={onChangePwd} />
      <br/>
      <button onClick={login}>로그인</button>
      <Link to='/signUp'>회원가입</Link>


    </div>
  )
}

export default Login