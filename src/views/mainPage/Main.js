import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Navbar from '../common/NavBar'
import Search from './components/Search'
import EventDay from './components/EventDay'
import Recommand from './components/Recommand'
import Menu from './components/Menu'

const Main = () => {

  const [menuClicked,setMenuClicked]=useState(false)

  const onClick=()=>{
    setMenuClicked(menuClicked ? false : true)
  }

  return (
    <>
    <h2>메인 페이지</h2>

    <button onClick={onClick}>(메뉴)</button>
    {menuClicked&& <Menu/>}
    <hr/>
    <Search/>
    <EventDay/>
    <hr/>
    <Recommand/>
    <br/>
    <br/>


    
    </>
  )
}

export default Main
