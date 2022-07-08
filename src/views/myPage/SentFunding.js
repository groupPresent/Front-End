import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import UserSentFunding from "./User/UserSentFunding";
import "./sentFunding.css"
import Navbar from "../common/NavBar";

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


  function myPresenToClick(e) {
    window.location.href = "/mypage"
  }
  function receivedFundingBtnClick(e) {
    window.location.href = "/receivedfunding"
  }
  function sentFundingBtnClick(e) {
    window.location.href = "/sentfunding"
  }


  const SentFunding = () => {
  
    return (
      <div class = "sentFunding">
        <Navbar></Navbar>
    

        <div class="divButtons">
        <div class="buttons">
          <button class='myPresenTo' onClick={myPresenToClick}>My PresenTo</button>
          <button class='receivedFundingBtn' onClick={receivedFundingBtnClick}>받은 펀딩</button>
          <button class='sentFundingBtn' onClick={sentFundingBtnClick}>보낸 펀딩</button>
        </div>
      </div>

              <UserSentFunding></UserSentFunding>
       
      </div>
      
        
      
    );
        }
  
  
  export default SentFunding;
  