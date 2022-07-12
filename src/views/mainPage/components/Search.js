import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
    <div class = "divFriendsInput">
      <input
        placeholder=" | 누구의 기념일이 궁금하신가요?"
        value={value}
        onChange={onChange}
        class = "friendsInput"
      />
      </div>
      <button type="submit" /*class='magnifier'*/></button>
    </>
  )
}

export default Search


