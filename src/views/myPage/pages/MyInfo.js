import React from 'react'
import { useState } from 'react'
import Anniversaries from './Anniversaries'
import MainList from './MainList'

//여기서 기본적인 것은 다 보여줘야 함
const MyInfo = () => {
  const [info, setInfo] = useState({
    id: 1,
    img: 'Image',
    name: '조민호',
    date: '1996.12.07',
    accountNum: '354643421',
  })

  const [anniversaries, setAnniversaries] = useState([
    {
      anniversaryId: 1,
      title: '100일!',
      date: '1111.11.1',
      description: '100일이다',
    },
    {
      anniversaryId: 2,
      title: '생일',
      date: '2222.2.2',
      description: '생일이다',
    },
    {
      anniversaryId: 3,
      title: '종강',
      date: '3333.3.3',
      description: '종강이다',
    },
  ])
  const [anniversaryId, setAnniversaryId] = useState(anniversaries.length)

  const [mode, setMode] = useState('READ')

  const deleteAnniversary=(item)=>{
    const newAnniversaries=anniversaries.filter(anniversary=>{
      return anniversary.id!==item.id
    })
    console.log(newAnniversaries)
    setAnniversaries(newAnniversaries)
  }

  if (mode === 'READ') {
    return (
      <div>
        <MainList />

        <h3>{info.img}</h3>
        <h3>{info.name}</h3>
        <h3>생일 {info.date}</h3>
        <h3>계좌 번호 {info.accountNum}</h3>
        <div>

        <hr/>
        <h3>기념일</h3>
          <Anniversaries anniversaries={anniversaries} deleteAnniversary={deleteAnniversary}/>
          <button onClick={() => setMode('CREATE')}>기념일 새로 등록</button>
        </div>
      </div>
    )
  } else if (mode === 'CREATE') {
    return (
      <article>
        <h2>Create</h2>
        <form
          onSubmit={(event) => {
            //event.preventDefault()
            const title = event.target.title.value
            const description = event.target.description.value
            const date = event.target.date.value

            let newAnniversary = [...anniversaries]
            let id=anniversaryId+1
            const tmp = {
              anniversaryId:id,
              title,
              date,
              description,
            }
            console.log(tmp)
            newAnniversary.push(tmp)
            
            console.log(newAnniversary)
            setAnniversaryId(id) //useState는 비동기로 처리가 되므로 
                                //id값은 마지막에 수정
            setAnniversaries(newAnniversary)
            setMode('READ')
          }}
        >
          {/* 기념일 날짜 설명 */}
          <p>
            <input type="text" name="title" placeholder="기념일" />
          </p>
          <p>
            <input type="text" name="date" placeholder="날짜" />
          </p>
          <p>
            <textarea name="description" placeholder="기념일 설명"></textarea>
          </p>
          <p>
            <input type="submit" value="생성하기"></input>
          </p>
        </form>
        <button onClick={()=>setMode('READ')}>뒤로가기</button>
        
      </article>
    )
  }
}

export default MyInfo
