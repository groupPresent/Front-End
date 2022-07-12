import React, { useState } from "react";

export default function Tab1() {
  //친구 마이페이지 -친구 정보 조회
  const [friendInfo] = useState([
    {
      id: "0",
      friendPhoto: "https://bootdey.com/img/Content/avatar/avatar6.png",
      friendName: "beomin?",
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

  function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(
        <li key={t.id}>
          <a
            id={t.id}
            href={"/read/" + t.id}
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }}
          >
            {t.anniversaryName} | {t.anniversaryDate} | {t.anniversaryContent}
          </a>
        </li>
      );
    }

    return (
      <nav>
        <ul>{lis}</ul>
      </nav>
    );
  }

  let nav = null;
  const [mode, setMode] = useState("READ");
  const [id, setId] = useState(null);

  const [topics, setTopics] = useState([
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
  ]);
  let content = null;

  if (mode === "NAV") {
    nav = (
      <Nav
        topics={topics}
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
        <div>
          <img src={friendInfo.friendPhoto} />
          <b>{friendInfo.friendName}</b>
        </div>
      </>
    );
  }

  function use_for(friendInfo) {
    const result = [];

    for (let i = 0; i < friendInfo[0].anniversaryList.length; i++) {}

    return result;
  }

  return (
    <>
      <div>
        {friendInfo.map((friendInfo) => (
          <FriendInfo friendInfo={friendInfo} key={friendInfo.id} />
        ))}
        {use_for(friendInfo)}
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          setMode("NAV");
        }}
      >
        기념일 정보
      </button>
      {nav}
      {content}
    </>
  );
}
