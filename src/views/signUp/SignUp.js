import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
  // {"userName":"hello",
  //  "password":"195303",
  //  "name":"안녕하세요",
  //  "birthDay":"8/18",
  //  "accountNum":"45313-4323",
  //  "gender":"M"}

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [accountNum, setAccountNum] = useState('')
  const [gender, setGender] = useState('')

  const [files, setFiles] = useState('')

  const signUp = () => {
    const data = [
      {
        userName,
        password,
        name,
        birthDay,
        accountNum,
        gender,
      },
    ]

    let formData = new FormData()
    formData.append('profileImg', files)

    formData.append('userRequestDto', JSON.stringify(data))

    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://3.34.191.132:8080/user/signup',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  }

  const onLoadFile = (e) => {
    setFiles(URL.createObjectURL(e.target.files[0]))
  }

  const deleteFileImage = () => {
    URL.revokeObjectURL(files)
    setFiles('')
  }

  return (
    <div>
      <h1>회원가입</h1>
      프로필 사진 :
      <div>
        {files && (
          <img
            style={{ width: '200px', height: '200px' }}
            alt="sample"
            src={files}
          />
        )}
        <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
        <button onClick={deleteFileImage}>사진 삭제</button>
      </div>
      <label htmlFor="id">ID : </label>
      <input
        id="id"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br/>
      <label htmlFor="pwd">비밀번호 : </label>
      <input
        id="pwd"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <label htmlFor="name">이름 : </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label htmlFor="birth">생년월일 : </label>
      <input
        id="birth"
        type="text"
        value={birthDay}
        onChange={(e) => setBirthDay(e.target.value)}
      />
      <br/>
      <label htmlFor="accountNum">계좌번호 : </label>
      <input
        id="accountNum"
        type="text"
        value={accountNum}
        onChange={(e) => setAccountNum(e.target.value)}
      />
      <br/>
      <label htmlFor="gender">성별 : </label>
      <input
        id="gender"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <button onClick={signUp}>회원가입하기</button>
    </div>
  )
}


export default SignUp
