import { Link } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import Navbar from '../common/NavBar'
import Search from './components/Search'
import EventDay from './components/EventDay'
import Recommand from './components/Recommand'

import './components/main.css';
//백그라운드 이미지 경로
import bg from "../../../src/img/background/basic.png";


import Menu from './components/Menu'

const Main = () => {

  const [menuClicked,setMenuClicked]=useState(false)

  const onClick=()=>{
    setMenuClicked(menuClicked ? false : true)
  }

  //백그라운드 이미지 설정
  useEffect(() => {
    document.body.style.background = `url(${bg}) repeat-y center top / cover`;
  }, []);

  return (
    <div class = "main">
   <Navbar></Navbar>

    <hr/>
    <Search/>
    <EventDay/>
    <hr/>
    <Recommand/>
    <br/>
    <br/>



    
    </div>

  )
}

export default Main
