import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";
import ReviewList from "./views/reviewPage/ReviewList";
import ReviewCreate from "./views/reviewPage/Create";


function Article(props) {
  return <article>{props.body}</article>
}

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            props.onChangeMode()
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  )
}


//내 정보 , 받은 펀딩 , 보낸 펀딩
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault()
            props.onChangeMode(Number(event.target.id))
            // 여기서 클릭한 내용의 id로 setId가 실행이 되어서
            //아래에 이 id값을 통한 내용이 보여지게 됨
          }}
        >
          {t.title}
        </a>
      </li>,
    )
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  )
}

function Anniversaries(props) {
  const lis = []
  for (let i = 0; i < props.anniversaries.length; i++) {
    let t = props.anniversaries[i]
    lis.push(
      <li key={t.anniversaryId}>
        <a
          id={t.anniversaryId}
          href={'/read/' + t.anniversaryId}
          onClick={(event) => {
            event.preventDefault()
            props.onChangeMode(Number(event.target.id))
          }}
        >
          {t.title}
        </a>
      </li>
    )
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  )
}


function Modal(props) {
  return (
    <article>
      <h2>Create anniversaries</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const title = event.target.title.value

          props.onCreate(title)
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const title = event.target.title.value
          const body = event.target.body.value
          props.onCreate(title, body)
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const title = event.target.title.value
          const body = event.target.body.value
          props.onUpdate(title, body)
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value)
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  )
}

const App = () => {
  const [anniversaries, setAnniversaries] = useState([
    { anniversaryId: 1, title: '100일입니다' },
    { anniversaryId: 2, title: '졸업' },
    { anniversaryId: 3, title: '생일' },
  ])
  const [mode, setMode] = useState('READ')
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(4)
  const [anniversaryId, setAnniversaryId] = useState(anniversaries.length)
  const [nextAnniversaryId, setNextAnniversaryId] = useState(anniversaryId + 1)


  //이 부분이 중간에 content에
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: '내 정보',
      body: (
        <article>
          <img src="" />
          <h4>김현수</h4>
          <h4>2001.07.26</h4>
          <h4>계좌번호: 01001010101010101</h4>
          <button
            onClick={(event) => {
              event.preventDefault()
              setMode('MODAL')
            }}
          >
            +
          </button>
          <button /*onClick={}*/>...</button>

          <Anniversaries anniversaries={anniversaries}></Anniversaries>
          <button>친구 목록 보기</button>
          <button>내가 남긴 후기 history</button>
        </article>
      ),
    },
    {
      id: 2,
      title: '받은 펀딩',
      body: (
        <article>
          <div /*map 으로 반복문 돌리기*/>
            <img src=""></img>
            <button>...</button>
            <h4>모자</h4>
            <h4>D-6</h4>
            <h4>30000원</h4>
            <h5>80%</h5>
          </div>
        </article>
      ),
    },
    {
      id: 3,
      title: '보낸 펀딩',
      body: (
        <article>
          <div /*map 으로 반복문 돌리기*/>
            <img src=""></img>
            <button>...</button>
            <h4>신발</h4>
            <h4>D-3</h4>
            <h4>20000원</h4>
            <h5>100%</h5>
          </div>
        </article>
      ),
    },
  ])

  let content = null
  //중간에 보여지는 내용들

  let contextControl = null
  //중간 내용 아래에 보이는 Update , Delete버튼


  //아무 기능 없이 보여주는 모드
  //맨 위에 기본 메뉴들은 Nav를 통해 보여주고 있고
  //여기서 read는 각 메뉴의 내용들을 보여준다는 의미이다
  if (mode === 'READ') {
    let title,body = null
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        //맨 처음엔 null이라 아무것도 안 뜸
        //id값은 Nav컴포넌트에서 클릭으로 정해짐
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Article body={body}></Article>
    contextControl = (
      <>
        <li>
          <a
            href={'/update/' + id}
            onClick={(event) => {
              event.preventDefault()
              //href를 통해 다른 곳으로 화면이 넘어가는 것을 막아줌
              //href는 단지 화면의 이동을 명시하기 위한 목적으로만 사용
              setMode('UPDATE')
            }}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = []
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i])
                }
              }
              setTopics(newTopics)
              setMode('WELCOME')
            }}
          />
        </li>
      </>
    )
  } 
  //
  else if (mode === 'CREATE') {
    content = (
      <Create
        //Create컴포넌트에 아래 함수를 넘겨서 새로운 목록을 만듬
        onCreate={(_title, _body) => {
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
    let title,
      body = null
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
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
            title: _title
          }
          const newAnniversaries = [...anniversaries]
          newAnniversaries.push(newAnniversary)
          setAnniversaries(newAnniversaries)
          setMode('READ')
          setAnniversaryId(nextAnniversaryId)
          setNextAnniversaryId(nextAnniversaryId + 1)
          console.log(newAnniversaries) //됨
          console.log(anniversaries)  //이게 안됨
        }}
      ></Modal> 
    )
    //이 모달창이 문제임
    //이게 각 기능들(내 정보,받은펀디,보낸펀딩)에 뜨는 content를 수정하는
    //부분인데 이게 추가가 안되는 상황
  }

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/user/:id/received/review" element={<ReviewList />} />
        <Route path="/user/:id/received/review/create" element={<ReviewCreate />} />
      </Routes> */}

      <Header></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ')
          setId(_id)
        }}
      ></Nav>

      {content}

      
      {/* <Anniversaries anniversaries={anniversaries}></Anniversaries> */}

      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault()
              setMode('CREATE')
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
      {/* 이 버튼들(create,update,Delete)은 사실 가장 
      메인메뉴인 내정보 받은펀딩 보낸펀딩 이거 3개를 지우고 삭제하는거라
      어차피 안 쓰이고 필요없어서 지워지게 될 예정 */}
    </>
  )
}

export default App
