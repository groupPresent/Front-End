import React from 'react'
import { useState, useCallback } from 'react'
import Article from './Article'
import Create from './Create'
import Header from './Header'
import Nav from './Nav'
import Update from './Update'
import Modal from './Modal'


const MyPage = () => {
  const [anniversaries, setAnniversaries] = useState([
    { anniversaryId: 1, title: '100일입니다' },
    { anniversaryId: 2, title: '졸업' },
    { anniversaryId: 3, title: '생일' },
  ])
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: '내 정보',
      body: [
        {
          id: 1,
          name: '김현수',
          date: '2001.07.26',
          accountNum: '32424153243413',
          anniversaries : [
            { anniversaryId: 1, title: '100일입니다' },
            { anniversaryId: 2, title: '졸업' },
            { anniversaryId: 3, title: '생일' },
          ]
        },
        {
          id: 2,
          name: '임예람',
          date: '1998.12.26',
          accountNum: '125463411',
          anniversaries : [
            { anniversaryId: 1, title: '100일입니다' },
            { anniversaryId: 2, title: '졸업' },
            { anniversaryId: 3, title: '생일' },
          ]
        },
        {
          id: 3,
          name: '홍길동',
          date: '1383.07.26',
          accountNum: '12434675',
          anniversaries : [
            { anniversaryId: 1, title: '100일입니다' },
            { anniversaryId: 2, title: '졸업' },
            { anniversaryId: 3, title: '생일' },
          ]
        },
      ],
    },
    {
      id: 2,
      title: '받은 펀딩',
      body: [
        {
          id: 1,
          product: '모자',
          Dday: '3',
          price: '30000',
          status: '84%',
        },
        {
          id: 2,
          product: '신발',
          Dday: '31',
          price: '370000',
          status: '24%',
        },
        {
          id: 3,
          product: '에어팟',
          Dday: '6',
          price: '200000',
          status: '99%',
        },
      ],
    },
    {
      id: 3,
      title: '보낸 펀딩',
      body: [
        {
          id: 1,
          product: '바지',
          Dday: '25',
          price: '70000',
          status: '68%',
        },
        {
          id: 2,
          product: '한우세트',
          Dday: '11',
          price: '90000',
          status: '91%',
        },
        {
          id: 3,
          product: '커피',
          Dday: '2',
          price: '6000',
          status: '50%',
        },
      ],
    },
  ])

  const [mode, setMode] = useState('READ')
  const [id, setId] = useState(null)

  const [nextId, setNextId] = useState(4)
  const [anniversaryId, setAnniversaryId] = useState(anniversaries.length)
  const [nextAnniversaryId, setNextAnniversaryId] = useState(anniversaryId + 1)

  let content = null
  //중간에 보여지는 내용들

  let contextControl = null
  //중간 내용 아래에 보이는 Update , Delete버튼


  //아무 기능 없이 보여주는 모드
  if (mode === 'READ') {
    let title = topics[id].title
    let body = topics[id].body
    //이것들을 map으로 넘겨줘서 다 출력

    
    content = body

    contextControl = (
      <>
        <li>
          <button type="button" onClick={() => { setMode('CREATE')}}>
            Create
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setMode('UPDATE')}>
            Update
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              const newTopics = topics.fillter((value) => {
                return value.id !== id
              })
              setTopics(newTopics)
              setMode('UPDATE')
            }}
          >
            Delete
          </button>
        </li>
      </>
    )
  } 
  else if (mode === 'CREATE') {
    if(id===1){

    }
    else if(id===2){

    }
    else if(id===3){

    }

    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title: _title, body: _body }
          const newTopics = [...topics]
          newTopics.push(newTopic)
          setTopics(newTopics)
          setMode('READ')
          //새로 create가 되면 다시 read모드로 변경
          setId(nextId)
          setNextId(nextId + 1)
        }}
      ></Create>
    )
  } else if (mode === 'UPDATE') {
    let title = topics[id].title
    let body = topics[id].body
    
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics]
          const updatedTopic = { id: id, title: title, body: body }
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic
              break
            }
          }

          setTopics(newTopics)
          setMode('READ')
        }}
      ></Update>
    )
  } else if (mode === 'MODAL') {
    content = (
      <Modal
        onCreate={(_title) => {
          const newAnniversary = {
            anniversaryId: nextAnniversaryId,
            title: _title,
          }
          const newAnniversaries = [...anniversaries]
          newAnniversaries.push(newAnniversary)
          setAnniversaries(newAnniversaries)
          setMode('READ')
          setAnniversaryId(nextAnniversaryId)
          setNextAnniversaryId(nextAnniversaryId + 1)
          console.log(newAnniversaries) //됨
          console.log(anniversaries) //이게 안됨
        }}
      ></Modal>
    )
  }

  return (
    <>
      {/* <Routes>
            <Route path="/" element={<Main />} />
    
            <Route path="/user/:id/received/review" element={<ReviewList />} />
            <Route path="/user/:id/received/review/create" element={<ReviewCreate />} />
          </Routes> */}

      <Header/>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ')
          setId(_id)
        }}
      ></Nav>

      {content}

      {/* <Anniversaries anniversaries={anniversaries}></Anniversaries> */}

      {contextControl}

      {/* 이 버튼들(create,update,Delete)은 사실 가장 
          메인메뉴인 내정보 받은펀딩 보낸펀딩 이거 3개를 지우고 삭제하는거라
          어차피 안 쓰이고 필요없어서 지워지게 될 예정 */}
    </>
  )
}

export default MyPage
