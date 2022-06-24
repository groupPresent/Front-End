import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        placeholder="친구를 검색해 주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">(돋보기 아이콘)</button>
    </>
  )
}

export default Search
