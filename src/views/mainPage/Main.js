import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Navbar from '../common/NavBar'
import Search from './components/Search'
import EventDay from './components/EventDay'
import Recommand from './components/Recommand'
import './components/main.css';

const Main = () => {

  const [menuClicked,setMenuClicked]=useState(false)

  const onClick=()=>{
    setMenuClicked(menuClicked ? false : true)
  }

  return (
    <>
    <Navbar />
    <Search/>
    <EventDay/>
    <Recommand/>
    </>

  )
}

export default Main
