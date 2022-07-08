import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../common/NavBar'
import "./friend.css";
import starEmpty from './friendImages/2.starEmpty.png';
import starFull from "./friendImages/2.starFull.png";
import line from "./friendImages/2.line.png";
import Highlight from "./friendImages/3.friendList.png";
import myImage2 from "./friendImages/4.myImage2.png";

const Friends = () => {
  //친구 목록 조회
  const [friendList, setFullList] = useState([
    {
      friendId: 1,
      photoUrl: myImage2,
      friendName: "boemin",
      favorite: false
    },
    {
      friendId: 2,
      photoUrl: myImage2 ,
      friendName: "boemin",
      favorite: false
    },
    {
      friendId: 3,
      photoUrl: myImage2 ,
      friendName: "문하늘",
      favorite: false
    },
    {
      friendId: 4,
      photoUrl: myImage2 ,
      friendName: "김민호",
      favorite: false
    },
    {
      friendId: 5,
      photoUrl: myImage2,
      friendName: "이하늘",
      favorite: false
    },
    {
      friendId: 6,
      photoUrl: myImage2,
      friendName: "김정연",
      favorite: true
    },
    {
      friendId: 7,
      photoUrl: myImage2,
      friendName: "강하늘",
      favorite: false
    }
  ]);

  //정렬
  friendList.sort((a, b) => a.friendName.localeCompare(b.friendName));
  
  //친구 즐겨찾기 등록/취소
  const [inputs, setInputs] = useState({
    friendId: ""
  });
  const { friendId } = inputs;
  const onChange = (e) => {
    const { friendId, value } = e.target;
    setInputs({
      ...inputs,
      [friendId]: value
    });
  };

  //별표 클릭하면 즐겨찾기 상태 변경
  const onFavorite = (friendId) => {
    setFullList(
      friendList.map((user) =>
        user.friendId === friendId
          ? { ...user, favorite: !user.favorite }
          : user
      )
    );
  };

  //친구 검색
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function List(props) {
    const filteredData = friendList.filter((el) => {
      if (props.input === "") {
        return "";
      } else {
        return el.friendName.toLowerCase().includes(props.input);
      }
    });
    return (
      <ul>
        {filteredData.map((item) => (
          <div key={item.friendId}>
            <img src={item.photoUrl} />
            <Link to="/Tab1">{item.friendName}</Link>
          </div>
        ))}
      </ul>
    );
  }

  const imagestyle = {
    height: "4%",  
    width: "4%",
  };

  const starStyle = {
    height: "16pt",  
    width: "16pt",
  };


  return (
    <div class="friendsBG">
      <Navbar />
      <div class="friendsBox">
        <img src={Highlight} class="highlight"/>
        <div friendList={friendList}>
          {friendList.map(
            (item, index) =>
              item.favorite && (
                <div>
                  <img src={item.photoUrl} style = {imagestyle}/>
                  <Link to="/Tab1"><button style={{backgroundColor:'transparent'}}>{item.friendName}</button></Link>
                  <img src={line}/>
                  <img src={starFull}
                    style = {starStyle}
                    key={item.friendId}
                    onClick={() => onFavorite(item.friendId)}
                  />
                </div>
              )
          )}
        </div>
        {friendList.map(
          (item, index) =>
            !item.favorite && (
              <div>
                <img src={item.photoUrl} style = {imagestyle} />
                <Link to="/Tab1"><button style={{backgroundColor:'transparent'}}>{item.friendName}</button></Link>
                <img src={line}/>
                <img src={starEmpty} style = {starStyle}
                  key={item.friendId}
                  onChange={onChange}
                  onClick={() => onFavorite(item.friendId)}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Friends;
