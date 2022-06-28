import React from 'react'

const Anniversaries = ({ anniversaries, deleteAnniversary }) => {
  return (
    <>
      {anniversaries.map((item) => (
        <AnniversaryList
          item={item}
          key={item.id}
          deleteAnniversary={deleteAnniversary}
        />
      ))}
    </>
  )
}

const AnniversaryList = ({ item, deleteAnniversary }) => {
  return (
    <>
      <ul>
        <li>{item.title}</li>
        <li>{item.date}</li>
        <li>{item.description}</li>
      </ul>
      <button type="button" onClick={() => deleteAnniversary(item)}>
        삭제하기
      </button>
      {/* <button type="button" onClick={}>수정하기</button> */}
    </>
  )
}

export default Anniversaries
