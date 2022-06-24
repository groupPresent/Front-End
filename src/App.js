import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import { Route, Routes } from "react-router-dom";
import Main from "./views/mainPage/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
