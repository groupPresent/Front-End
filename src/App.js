import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";
import "./styles.css";
import Friends from "./views/friendPage/Friends";
import FriendTab from "./views/friendPage/FriendTab";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Friends />} />
        <Route path="/friendtab" element={<FriendTab />} />
      </Routes>
    </>
  );
};

export default App;
