import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import './customerService.css';

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
      lis.push(<li class = "customerServiceNav" key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>)

       // console.log(props.topics.length);
    }
    
    return <nav>
      <ul >
      
        {lis}
        
      </ul>
    </nav>
  }
  
  
  
  const CustomerService = () => {

      const [mode, setMode] = useState('READ');
      const [id, setId] = useState(1);
      const [nextId, setNextId] = useState(4);
      
      const [topics, setTopics] = useState([
        {id:1, title:'1', body:
        <table>
        <tr>1. 1번 질문입니다. </tr>
        <tr>2. 2번 질문입니다. </tr>
        <tr>3. 3번 질문입니다. </tr>
        <tr>4. 4번 질문입니다. </tr>
        <tr>5. 5번 질문입니다. </tr>
    </table>
    
    },
        {id:2, title:'2', body:<article>
          <table>
              <tr>6. 6번 질문입니다. </tr>
              <tr>7. 7번 질문입니다. </tr>
              <tr>8. 8번 질문입니다. </tr>
              <tr>9. 9번 질문입니다. </tr>
              <tr>10. 10번 질문입니다. </tr>
          </table>
        </article>},
        {id:3, title:'3', body:
        <table>
              <tr>11. 11번 질문입니다. </tr>
              <tr>12. 12번 질문입니다. </tr>
              <tr>13. 13번 질문입니다. </tr>
              <tr>14. 14번 질문입니다. </tr>
              <tr>15. 15번 질문입니다. </tr>
          </table>
    }
      ]);
      
      let content = null;
      let contextControl = null;
      if(mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
          if(topics[i].id === id){
            title = topics[i].title;
            body = topics[i].body;
          }
        }
        content = <Article  body={body}></Article>
        contextControl = <>
          <li><a href={'/update/'+id} onClick={event=>{
            event.preventDefault();
            setMode('UPDATE');
          }}>Update</a></li>
          <li><input type="button" value="Delete" onClick={()=>{
            const newTopics = []
            for(let i=0; i<topics.length; i++){
              if(topics[i].id !== id){
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
           
          }} /></li>
        </>
      } 
      

    return (
      <>
          <h1>FAQs</h1>
          {content}
          <Header></Header>
         
        <Nav topics={topics} onChangeMode={(_id)=>{
          setMode('READ');
          setId(_id);
        }}></Nav>
       
       
        
         
      </>
      
        
      
    );
        }
  
  
  export default CustomerService;
  