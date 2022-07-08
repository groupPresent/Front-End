import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

const Search = () => {
  const [friendList, setFullList] = useState([
    {
      friendId: 1,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
      friendName: "boemin",
      favorite: false
    },
    {
      friendId: 2,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
      friendName: "boemin",
      favorite: false
    },
    {
      friendId: 3,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar3.png",
      friendName: "김현수",
      favorite: false
    },
    {
      friendId: 4,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar4.png",
      friendName: "김민호",
      favorite: false
    },
    {
      friendId: 5,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
      friendName: "boemin",
      favorite: false
    },
    {
      friendId: 12,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
      friendName: "boemin",
      favorite: true
    },
    {
      friendId: 15,
      photoUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
      friendName: "boemin",
      favorite: false
    }
  ]);

  //친구 검색
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const imagestyle = {
    height: "4%",  
    width: "4%",
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
            <div>
            <img src={item.photoUrl} style = {imagestyle}/>
            <Link to="/Tab1">
              <button style={{backgroundColor:'transparent'}}>{item.friendName}</button>
            </Link>
            </div>
        ))}
      </ul>
    );
  }

  return (
    <>
    <div class = "divFriendsInput">
      <input
        placeholder=" | 누구의 기념일이 궁금하신가요?"
        onChange={inputHandler}
        class = "friendsInput"
      />
      </div>
      <button type="submit" /*class='magnifier'*/></button>
      <List input={inputText} />
    </>
  )
}

export default Search;



