import React from 'react'

const Nav = ({topics,onChangeMode}) => {
  const lis = []
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i]
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault()
            onChangeMode(Number(event.target.id))
            // 여기서 클릭한 내용의 id로 setId가 실행이 되어서
            //아래에 이 id값을 통한 내용이 보여지게 됨
          }}
        >
          {t.title}
        </a>
      </li>
    )
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  )
}

export default Nav
