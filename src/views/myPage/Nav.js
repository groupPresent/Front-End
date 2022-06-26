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
            // ���⼭ Ŭ���� ������ id�� setId�� ������ �Ǿ
            //�Ʒ��� �� id���� ���� ������ �������� ��
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
