import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";

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

const App = () => {

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
    {id:1, title:'내 정보', body: <article>
      <img src = "" />
      <h4>김현수</h4>
      <h4>2001.07.26</h4>
      <h4>계좌번호: 01001010101010101</h4>
      <button onClick={event=>{
        event.preventDefault();
        setMode('MODAL');
      }}>+</button>
      <button /*onClick={}*/>...</button>
        
        <Anniversaries anniversaries = {anniversaries}></Anniversaries>
      <button>친구 목록 보기</button>
      <button>내가 남긴 후기 history</button>
    </article>},
    {id:2, title:'받은 펀딩', body:<article>
      <div /*map 으로 반복문 돌리기*/> 
        <img src = ""></img>
        <button>...</button>
        <h4>모자</h4>
        <h4>D-6</h4>
        <h4>30000원</h4>
        <h5>80%</h5>
      </div>
    </article>},
    {id:3, title:'보낸 펀딩', body:<article>
      <div /*map 으로 반복문 돌리기*/>
        <img src = ""></img>
        <button>...</button>
        <h4>신발</h4>
        <h4>D-3</h4>
        <h4>20000원</h4>
        <h5>100%</h5>
      </div>
    </article>}
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
        setMode('WELCOME');
      }} /></li>
    </>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }


      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  else if(mode === 'MODAL'){
    content = <Modal onCreate={(_title, _body)=>{
      const newAnniversary = {anniversaryId:nextAnniversaryId, title:_title, body:_body}
      const newAnniversaries = [...anniversaries]
      newAnniversaries.push(newAnniversary);
      setAnniversaries(newAnniversaries);
      setAnniversaryId(anniversaryId+1);
      setMode('READ');
      console.log(newAnniversaries);
      console.log(anniversaries);
    }}></Modal>
  } 

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Header></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </>
    
      
    
  );
      }


export default App;
