import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import UserReceivedFunding from "./User/UserReceivedFunding";


function Article(props){
    return <article>
      {props.body}
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
        }}>{t.title}</a>
      </li>)
       // console.log(props.topics.length);
    }
  
    return <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  }
  
  function Anniversaries(props){
    const lis = []
    for(let i=0; i<props.anniversaries.length; i++){
      let t = props.anniversaries[i];
      lis.push(<li key={t.anniversaryId}>
        <a id={t.anniversaryId} href={'/read/'+t.anniversaryId} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>)
  
     // console.log(props.anniversaries.length);
    }
    return <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  }
  
  
  // 
  
  function Modal(props){
    return <article>
    <h2>Create anniversaries</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      
      props.onCreate(title, );
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
  }
  
  function Create(props){
    return <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  }
  function Update(props){
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
          setTitle(event.target.value);
        }}/></p>
        <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
  }

  const ReceivedFunding = () => {
  /* map 으로 돌려야 하나..? 데이터를 받아와서 div 를 여러 개 만들어야 하는데.. 일단 노마드코더 영화 앱 참고하기*/
    return (
      <>
      
       <ul>
        <li><a href = "mypage">내 정보</a></li>
        <li><a href = "receivedfunding">받은 펀딩</a></li>
        <li><a href = "sentfunding">보낸 펀딩</a></li>
        </ul>
       <UserReceivedFunding></UserReceivedFunding>
      <div>
       </div>
        <button>+</button>
      </>
      
        
      
    );
        }
  
  
  export default ReceivedFunding;
  