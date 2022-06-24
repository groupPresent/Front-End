import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Navbar from '../common/NavBar'
import Search from './components/Search'
import EventDay from './components/EventDay'
import Recommand from './components/Recommand'

const Main = () => {
  return (
    <>
    <Navbar/>
    <hr/>
    <Search/>
    <EventDay/>
    <hr/>
    <Recommand/>

    <br/>
    <br/>
    <button>+</button>
    </>
  )
}

export default Main
