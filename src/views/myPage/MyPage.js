import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import '../common/modal.css'
import Modal from '../common//Modal';

function Article(props){
    return <article>
      
    </article>
  }
  

  
  function Header(props){
    return <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  }
  
  
  function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title} | {t.body} | {t.date}</a>
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
  
  
  function Create(props){
    return <article>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const date = event.target.date.value;
        props.onCreate(title, body, date);
      }}>
        <p><input type="text" name="title" placeholder="기념일 이름"/></p>
        <p><input type="text" name="date" placeholder="기념일 날짜"/></p>
        <p><input type="text" name="body" placeholder="기념일 내용"/></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  }
  function Update(props){
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [date, setDate] = useState(props.date);
    return <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const date = event.target.date.value;
        props.onUpdate(title, body, date);
      }}>
        <p><input type="text" name="title" placeholder="기념일 이름" value={title} onChange={event=>{
          setTitle(event.target.value);
        }}/></p>
        <p><input type="text" name="body" placeholder="기념일 내용" value={body} onChange={event=>{
          setBody(event.target.value);
        }}/></p>
        <p><input type="text" name="date" placeholder="기념일 날짜" value={date} onChange={event=>{
          setDate(event.target.value);
        }}/></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
  }

  const MyPage = () => {

    
    let nav = null;
    const [anniversaries, setAnniversaries] = useState([
      {anniversaryId:1, title:'100일입니다'},
      {anniversaryId:2, title:'졸업'},
      {anniversaryId:3, title:'생일'}
    ]);
    const [mode, setMode] = useState('READ');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [anniversaryId, setAnniversaryId] = useState(anniversaries.length);
    const [nextAnniversaryId, setNextAnniversaryId] = useState(anniversaryId + 1);
  
    const [topics, setTopics] = useState([
      {id:1, title:'남자친구랑 100일', body:'남친이랑 100일입니다!', date:'0903'},
      {id:2, title:'퇴사', body:'퇴사일이에요', date:'0303'},
      {id:3, title:'졸업', body:'졸업이다!', date:'0202'}
    ]);
     let contextControl = null;
    let content = null;
   
    if(mode === 'READ'){
      let title, body, date = null;
      for(let i=0; i<topics.length; i++){
        if(topics[i].id === id){
          title = topics[i].title;
          body = topics[i].body;
          date = topics[i].date;
        }
      }
      //content = <Article  body={body}></Article>
      
    } else if(mode === 'CREATE'){
      content = <Create onCreate={(_title, _body, _date)=>{
        const newTopic = {id:nextId, title:_title, body:_body, date:_date}
        const newTopics = [...topics]
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('NAV');
        setId(nextId);
        setNextId(nextId+1);
      }}></Create>
    } else if(mode === 'UPDATE'){
      let title, body, date = null;
      for(let i=0; i<topics.length; i++){
        if(topics[i].id === id){
          title = topics[i].title;
          body = topics[i].body;
          date = topics[i].date;
        }
      }
      content = <Update title={title} body={body} date = {date} onUpdate={(title, body, date)=>{
        const newTopics = [...topics]
        const updatedTopic = {id:id, title:title, body:body, date:date}
        for(let i=0; i<newTopics.length; i++){
          if(newTopics[i].id === id){
            newTopics[i] = updatedTopic;
            break;
          }
        }
  
  
        setTopics(newTopics);
        setMode('NAV');
      }}></Update>
    }
    else if(mode === 'NAV'){
     nav = <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('ACLICKED');
        setId(_id);
      }}></Nav>
    } 
    else if (mode === 'ACLICKED'){
      contextControl = <>
        <li><button class = "updateButton" href={'/update/'+id} onClick={event=>{
          event.preventDefault();
          setMode('UPDATE');
        }}>수정</button></li>
        <li><input class = "deleteButton" type="button" value="삭제" onClick={()=>{
          const newTopics = []
          for(let i=0; i<topics.length; i++){
            if(topics[i].id !== id){
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

    return (
      <>
      
     
     
     
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal> 
   
        <Header></Header>

        <ul>
        <li><a href = "mypage">내 정보</a></li>
        <li><a href = "receivedfunding">받은 펀딩</a></li>
        <li><a href = "sentfunding">보낸 펀딩</a></li>
        </ul>
        <h2>내 사진</h2>
        <h2>이름</h2>
        <h2>생년월일</h2>
        <h2>계좌번호</h2>
        
          <button href="/create" onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>기념일 등록하기</button>
          <br></br>
          {contextControl}
      
        <button onClick={event=>{
            event.preventDefault();
            setMode('NAV');
          }}>기념일 정보</button>
        {nav}
        {content}

        
        
        <button onClick={openModal}>탈퇴하기</button>

  
      </>
      
        
      
    );
        }
  
  
  export default MyPage;
  