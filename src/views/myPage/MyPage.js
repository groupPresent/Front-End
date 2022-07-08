import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import '../common/modal.css'
import Modal from '../common//Modal';
import axios from 'axios';
import UserName from "./User/UserName";
import UserAccount from "./User/UserAccount";
import UserBirth from "./User/UserBirth";
import UserPhoto from "./User/UserPhoto";
import UserReceivedFunding from "./User/UserReceivedFunding";
import Navbar from "../common/NavBar";
import "./myPage.css";
//백그라운드 이미지 경로
import bg from "../../../src/img/background/withLeaf.png";

function Article(props) {
  return <article>

  </article>
}

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}


function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.date} / {t.title} / {t.body}</a>
    </li>)
    // console.log(props.topics.length);
  }

  return <nav>
    <ul>
      {lis}
    </ul>
  </nav>
}


// 


function Create(props) {
  return <article>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const date = event.target.date.value;
      props.onCreate(title, body, date);
    }}>
      <div class = "createForm">
      <p><input type="text" name="date" placeholder="기념일 날짜" /></p>
      <p><input type="text" name="title" placeholder="기념일 이름" /></p>
      <p><input type="text" name="body" placeholder="기념일 내용" /></p>
      <p><input class = "createButton" type="submit" value="등록하기"></input></p>
      </div>
    </form>
  </article>
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [date, setDate] = useState(props.date);
  return <article>

    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const date = event.target.date.value;
      props.onUpdate(title, body, date);
    }}>
      <p><input type="text" name="title" placeholder="기념일 이름" value={title} onChange={event => {
        setTitle(event.target.value);
      }} /></p>
      <p><input type="text" name="body" placeholder="기념일 내용" value={body} onChange={event => {
        setBody(event.target.value);
      }} /></p>
      <p><input type="text" name="date" placeholder="기념일 날짜" value={date} onChange={event => {
        setDate(event.target.value);
      }} /></p>
      <p><input class = "updateBtn" type="submit" value="수정하기"></input></p>
    </form>
  </article>
}

const MyPage = () => {

  //백그라운드 이미지 설정
  useEffect(() => {
    document.body.style.background = `url(${bg}) repeat-y center top / cover`;
  }, []);
  
  document.body.style.backgroundImage = "/src/img/background/withLeaf.png";

  let nav = null;
  const [anniversaries, setAnniversaries] = useState([
    { anniversaryId: 1, title: '100일입니다' },
    { anniversaryId: 2, title: '졸업' },
    { anniversaryId: 3, title: '생일' }
  ]);
  const [mode, setMode] = useState('READ');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [anniversaryId, setAnniversaryId] = useState(anniversaries.length);
  const [nextAnniversaryId, setNextAnniversaryId] = useState(anniversaryId + 1);

  const [topics, setTopics] = useState([
    { id: 1, title: '100일', body: '남친이랑 100일이다!!', date: '2022.07.03' },
    { id: 2, title: '퇴사', body: '퇴사일이에요ㅎㅎ', date: '2022.08.03' },
    { id: 3, title: '졸업', body: '졸업이다!', date: '2022.09.01' }
  ]);
  let contextControl = null;
  let content = null;

  if (mode === 'READ') {
    let title, body, date = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {

        title = topics[i].title;
        body = topics[i].body;
        date = topics[i].date;
      }
    }
    //content = <Article  body={body}></Article>

  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body, _date) => {
      const newTopic = { id: nextId, title: _title, body: _body, date: _date }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('NAV');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === 'UPDATE') {
    let title, body, date = null;
    for (let i = 0; i < topics.length; i++) {

      if (topics[i].id === id) {

        title = topics[i].title;
        body = topics[i].body;
        date = topics[i].date;
      }
    }
    content = <Update title={title} body={body} date={date} onUpdate={(title, body, date) => {
      const newTopics = [...topics]
      const updatedTopic = { id: id, title: title, body: body, date: date }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }


      setTopics(newTopics);
      setMode('NAV');
    }}></Update>
  }
  else if (mode === 'NAV') {
    nav = <Nav topics={topics} onChangeMode={(_id) => {
      setMode('ACLICKED');
      setId(_id);
    }}></Nav>
  }
  else if (mode === 'ACLICKED') {
    contextControl = <>
      <li><button class="updateButton" href={'/update/' + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>수정</button></li>
      <li><input class="deleteButton" type="button" value="삭제" onClick={() => {
        const newTopics = []
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('NAV');
      }} /></li>
    </>
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  function myPresenToClick(e) {
    window.location.href = "/mypage"
  }
  function receivedFundingBtnClick(e) {
    window.location.href = "/receivedfunding"
  }
  function sentFundingBtnClick(e) {
    window.location.href = "/sentfunding"
  }

  return (
    <div class="mypage">


      <Modal open={modalOpen} close={closeModal} header="탈퇴하기">
      </Modal>

      <Navbar></Navbar>

      <div class="divButtons">
        <div class="buttons">
          <button class='myPresenTo' onClick={myPresenToClick}>My PresenTo</button>
          <button class='receivedFundingBtn' onClick={receivedFundingBtnClick}>받은 펀딩</button>
          <button class='sentFundingBtn' onClick={sentFundingBtnClick}>보낸 펀딩</button>
        </div>
      </div>
      <div class = "divUserImage">
        <div class = "userImage">
        </div>
        <div class="divUserInfo">
        <div class="userinfo">
          <p><UserName></UserName></p>
          <p><UserBirth></UserBirth></p>
          <p>계좌번호: <UserAccount></UserAccount></p>
        </div>
      </div>
      </div>
     
 
    <div class = "divMyDdays">
    <p class = "dDayTitle">My D-days</p>
      <div class="myDdays">
        <div class = "abuttons">
        <button href="/create" class="aBtn" onClick={event => {
          event.preventDefault();
          setMode('CREATE');
        }}>기념일 등록하기</button>
        <br></br>
        <button class="aBtn" onClick={event => {
          event.preventDefault();
          setMode('NAV');
        }}>기념일 정보 보기</button>
        <div class = "divContextControl">
        <div class = "contextControl">
         {contextControl}
         </div>
         </div>
        </div>
      </div>
    </div>
    <div class = "contentNav">
      {nav}
    </div>
      {content}
      <div class = "divDelete">
        <button class="delete" onClick={openModal}>탈퇴하기</button>
      </div>
    </div>
  );
}


export default MyPage;
