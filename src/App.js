import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";
import MyPage from "./views/myPage/MyPage";
import ReceivedFunding from "./views/myPage/ReceivedFunding";
import SentFunding from "./views/myPage/SentFunding";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/receivedfunding" element={<ReceivedFunding />} />
        <Route path="/sentfunding" element={<SentFunding />} />
      </Routes>
    </>
  );
};

export default App;
