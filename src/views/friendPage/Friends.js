import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import {
  BsSearch,
  BsFillPersonPlusFill,
  BsStar,
  BsStarFill
} from "react-icons/bs";
import FriendTab from "./FriendTab";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const Friends = () => {
  axios.get("/user/friend");
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

  const [favorite, setFavList] = useState([
    { friendId: 1 },
    { friendId: 12 },
    { friendId: 15 }
  ]);

  //친구목록 배열 읽고 즐겨찾기 추가
  const addFavorite = () => {
    const user = {
      friendId
    };
    setFavList([...favorite, user]);
    setInputs({
      friendId: ""
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

  //친구추가
  function Create(props) {
    return (
      <article>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            const date = event.target.date.value;
            props.onCreate(title, body, date);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="기념일 이름" />
          </p>
          <p>
            <input type="text" name="date" placeholder="기념일 날짜" />
          </p>
          <p>
            <input type="text" name="body" placeholder="기념일 내용" />
          </p>
          <p>
            <input type="submit" value="Create"></input>
          </p>
        </form>
      </article>
    );
  }
  function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [date, setDate] = useState(props.date);
    return (
      <article>
        <h2>Update</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            const date = event.target.date.value;
            props.onUpdate(title, body, date);
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="기념일 이름"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </p>
          <p>
            <input
              type="text"
              name="body"
              placeholder="기념일 내용"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
          </p>
          <p>
            <input
              type="text"
              name="date"
              placeholder="기념일 날짜"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </p>
          <p>
            <input type="submit" value="Update"></input>
          </p>
        </form>
      </article>
    );
  }

  let nav = null;
  const [mode, setMode] = useState("READ");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  let contextControl = null;
  let content = null;

  if (mode === "READ") {
    let photoUrl,
      friendName,
      favorite = null;
    for (let i = 0; i < friendList.length; i++) {
      if (friendList[i].id === id) {
        photoUrl = friendList[i].photoUrl;
        friendName = friendList[i].friendName;
        favorite = friendList[i].favorite;
      }
    }
    //content = <Article  body={body}></Article>
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_photoUrl, _friendName, _favorite) => {
          const newTopic = {
            id: nextId,
            photoUrl: _photoUrl,
            friendName: _friendName,
            favorite: _favorite
          };
          const newTopics = [...friendList];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("NAV");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let photoUrl,
      friendName,
      favorite = null;
    for (let i = 0; i < friendList.length; i++) {
      if (friendList[i].id === id) {
        photoUrl = friendList[i].photoUrl;
        friendName = friendList[i].friendName;
        favorite = friendList[i].favorite;
      }
    }
    content = (
      <Update
        photoUrl={photoUrl}
        friendName={friendName}
        favorite={favorite}
        onUpdate={(title, body, date) => {
          const newTopics = [...friendList];
          const updatedTopic = {
            id: id,
            photoUrl: photoUrl,
            friendName: friendName,
            favorite: favorite
          };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }

          setTopics(newTopics);
          setMode("NAV");
        }}
      ></Update>
    );
  } else if (mode === "NAV") {
    nav = (
      <Nav
        topics={friendList}
        onChangeMode={(_id) => {
          setMode("ACLICKED");
          setId(_id);
        }}
      ></Nav>
    );
  }

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
          <View style={styles.box} key={item.friendId}>
            <Image style={styles.photoUrl} source={{ uri: item.photoUrl }} />
            <Link to="/friendtab">
              <Text style={styles.friendName}>{item.friendName}</Text>
            </Link>
          </View>
        ))}
      </ul>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <h4>Logo</h4>
            <BsSearch />
            <BsFillPersonPlusFill />
            <Text style={styles.name}></Text>
            {friendList.friendName}
          </View>
        </View>

        <View style={styles.body}>
          <div>
            <div className="search">
              <TextField
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
            <flatList
              style={styles.container}
              enableEmptySections={true}
              friendList={friendList}
            >
              {friendList.map(
                (item, index) =>
                  item.favorite && (
                    <View style={styles.box}>
                      <Image
                        style={styles.photoUrl}
                        source={{ uri: item.photoUrl }}
                      />
                      <Link to="/friendtab">
                        <Text style={styles.friendName}>{item.friendName}</Text>
                      </Link>
                      <BsStarFill
                        key={item.friendId}
                        onClick={() =>
                          onFavorite(item.friendId) &&
                          addFavorite(item.friendId)
                        }
                      />
                    </View>
                  )
              )}
            </flatList>
            friendList
            {friendList.map(
              (item, index) =>
                !item.favorite && (
                  <View style={styles.box}>
                    <Image
                      style={styles.photoUrl}
                      source={{ uri: item.photoUrl }}
                    />
                    <Link to="/friendtab">
                      <Text style={styles.friendName}>{item.friendName}</Text>
                    </Link>
                    <BsStar
                      key={item.friendId}
                      onChange={onChange}
                      onClick={() =>
                        onFavorite(item.friendId) && addFavorite(item.friendId)
                      }
                    />
                  </View>
                )
            )}
          </div>

          <button
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            기념일 등록하기
          </button>
          <br></br>
          {contextControl}
        </View>
      </View>
    </>
  );
};

export default Friends;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#eeee"
  },
  headerContent: {
    padding: 30,
    alignItems: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 10
  },
  photoUrl: {
    width: 60,
    height: 60
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    padding: 30,
    backgroundColor: "pink"
  },
  box: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  friendName: {
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10
  }
});
