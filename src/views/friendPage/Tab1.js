import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../common/NavBar'
import "./friend.css";
import myDdays from './friendImages/4.myDdays.png';
import info_button from './friendImages/3.info_button.png';

export default function Tab1() {
  
  const imagestyle = {
    height: "80px",  
    width: "80px"
  };

  //친구 마이페이지 -친구 정보 조회
  const [friendInfo] = useState([
    {
      id: "0",
      friendPhoto: "https://bootdey.com/img/Content/avatar/avatar6.png",
      friendName: "beomin",
      birthDay: "6/8",
      anniversaryList: [
        {
          id: 1,
          anniversaryName: "생일",
          anniversaryDate: "Jun 8, 2022",
          anniversaryContent: "돈내놔"
        },
        {
          id: 2,
          anniversaryName: "생일2",
          anniversaryDate: "Jun 9, 2022",
          anniversaryContent: "돈내놔"
        }
      ]
    }
  ]);

  //기념일 정보 띄우기
  function Nav(props) {
    
    let tmp=[]
    friendInfo.map(friend=>(friend.anniversaryList).map(anniversaryList=>tmp.push(
      <div key={anniversaryList.id} >
        <div
          id={anniversaryList.id}
          href={"/read/" + anniversaryList.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {anniversaryList.anniversaryName} | {anniversaryList.anniversaryDate} | {anniversaryList.anniversaryContent}
        </div>
      </div>
    )))

    return (
      <nav>
        <ul>{tmp}</ul>
      </nav>
    );
  }

  let nav = null;
  const [mode, setMode] = useState("READ");
  const [id, setId] = useState(null);

  let content = null;

  if (mode === "NAV") {
    nav = (
      <Nav
        friendInfo={friendInfo}
        onChangeMode={(_id) => {
          setMode("ACLICKED");
          setId(_id);
        }}
      ></Nav>
    );
  }

  function FriendInfo({ friendInfo }) {
    return (
      <>
        <div class="friendInfo">
          <img src={friendInfo.friendPhoto} style = {imagestyle}/>
          <b>{friendInfo.friendName}</b>
        </div>
      </>
    );
  }


  return (
    <div class="Tab1BG">
      <Navbar />
      <section id="wrapper">
            <div class="content">
                <div class="tabs">
                 <Link to="/Tab1"><button class="buttonSt" style={{
                  backgroundColor: 'transparent', color:"white"
                  }}>친구의 정보</button></Link>
                 <Link to="/Tab2"><button class="buttonSt" style={{
                  backgroundColor: 'transparent', color:"white"}}>받은 펀딩</button></Link>
                </div>
            </div>
      </section>

      <div class="showAnniversaryBox">
        {friendInfo.map((friendInfo) => (
          <FriendInfo friendInfo={friendInfo} key={friendInfo.id} />
        ))}
      <div class="showAnniversary">
        <div  style={{color:"white" }} class="myDdays">My D-days</div>
        <div class="anniversaryList">
          <img 
            src={info_button}
            onClick={(event) => {
              event.preventDefault();
              setMode("NAV");
            }}
          />
          {nav}
          {content}
        </div>
      </div>
    </div>
    </div>
  );
}
