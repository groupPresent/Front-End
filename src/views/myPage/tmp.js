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
    { anniversaryId: 1, title: '100??' },
    { anniversaryId: 2, title: '' },
    { anniversaryId: 3, title: '' },
  ])
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: ' ',
      body: [
        {
          id: 1,
          name: '',
          date: '2001.07.26',
          accountNum: '32424153243413',
          anniversaries : [
            { anniversaryId: 1, title: '100??' },
            { anniversaryId: 2, title: '' },
            { anniversaryId: 3, title: '' },
          ]
        },
        {
          id: 2,
          name: '?',
          date: '1998.12.26',
          accountNum: '125463411',
          anniversaries : [
            { anniversaryId: 1, title: '100??' },
            { anniversaryId: 2, title: '' },
            { anniversaryId: 3, title: '' },
          ]
        },
        {
          id: 3,
          name: '??',
          date: '1383.07.26',
          accountNum: '12434675',
          anniversaries : [
            { anniversaryId: 1, title: '100??' },
            { anniversaryId: 2, title: '' },
            { anniversaryId: 3, title: '' },
          ]
        },
      ],
    },
    {
      id: 2,
      title: ' ?',
      body: [
        {
          id: 1,
          product: '',
          Dday: '3',
          price: '30000',
          status: '84%',
        },
        {
          id: 2,
          product: '?',
          Dday: '31',
          price: '370000',
          status: '24%',
        },
        {
          id: 3,
          product: '',
          Dday: '6',
          price: '200000',
          status: '99%',
        },
      ],
    },
    {
      id: 3,
      title: ' ?',
      body: [
        {
          id: 1,
          product: '',
          Dday: '25',
          price: '70000',
          status: '68%',
        },
        {
          id: 2,
          product: '???',
          Dday: '11',
          price: '90000',
          status: '91%',
        },
        {
          id: 3,
          product: '?',
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
  //?  

  let contextControl = null
  //?  ? ? Update , Delete?


  //?   ? 
  if (mode === 'READ') {
    let title = topics[id].title
    let body = topics[id].body
    //?? map ??  

    
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
          // create ? ? read 
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
          console.log(newAnniversaries) //
          console.log(anniversaries) //? ?
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

      {/*  ?(create,update,Delete)   
          ??  ? ? ? 3  ?°?
            ? ??    */}
    </>
  )
}

export default MyPage
