import React from 'react'

const Anniversaries = () => {

  const [anniversaries, setAnniversaries] = useState([
    { anniversaryId: 1, title: '100��' },
    { anniversaryId: 2, title: '���� ��' },
    { anniversaryId: 3, title: '����' },
  ])
  
  const lis = []
  for (let i = 0; i < props.anniversaries.length; i++) {
    let t = props.anniversaries[i]
    lis.push(
      <li key={t.anniversaryId}>
        <a
          id={t.anniversaryId}
          href={'/read/' + t.anniversaryId}
          onClick={(event) => {
            event.preventDefault()
            props.onChangeMode(Number(event.target.id))
          }}
        >
          {t.title}
        </a>
      </li>,
    )
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  )
}

export default Anniversaries
