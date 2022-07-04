import React, { useState } from "react";
// import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Friends = () => {
  //친구 목록 조회
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
            <Link to="/friendtab">{item.friendName}</Link>
          </div>
        ))}
      </ul>
    );
  }

  return (
    <>
      {friendList.friendName}

      <div>
        <div className="search">
          <div
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List input={inputText} />
      </div>
      <div>
        favorite
        <div friendList={friendList}>
          {friendList.map(
            (item, index) =>
              item.favorite && (
                <div>
                  <img src={item.photoUrl} />
                  <Link to="/friendtab">{item.friendName}</Link>
                  <button
                    key={item.friendId}
                    onClick={() => onFavorite(item.friendId)}
                  >star fill</button>
                </div>
              )
          )}
        </div>
        friendList
        {friendList.map(
          (item, index) =>
            !item.favorite && (
              <div>
                <img src={item.photoUrl} />
                <Link to="/friendtab">{item.friendName}</Link>
                <button
                  key={item.friendId}
                  onChange={onChange}
                  onClick={() => onFavorite(item.friendId)}
                >
                star empty
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Friends;
