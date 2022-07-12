import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const FundingList = ({ contributorList }) => {
  const [num, setNum] = useState(contributorList.length)
  const [limit, setLimit] = useState(5)
  //한 페이지당 보여줄 친구 목록수는 5명
  const [currentPage, setCurrentPage] = useState(1)

  const offset = (currentPage - 1) * limit
  //한 페이지당 보여줄 목록이 [offest]~[offest+limit] 까지
  //ex) 3페이지이고 한 페이지당 보여줄 갯수(limit)가 5라고 한다면
  //[10]~[14]를 보여주는 것이다

  return (
    <>
      <header>
        <div>펀딩 리스트</div>
      </header>
      <main>
        {/* 
            offest부터 offset + limit부분을 여기서 보여줌
            보여주는 부분을 여기서 slice로 해도 되고 따로 위에서 useState로
            관리해도 됨
        */}
        {contributorList.slice(offset, offset + limit).map(({ id, name }) => (
          <article key={id}>
            <p>
              {id}. {name}
            </p>
          </article>
        ))}
      </main>
      <footer>
        {/* 여기서 사용되는 버튼들을 통해 위에 보여지는 부분을 조작 */}
        <Pagination
          total={num}
          limit={limit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </footer>
    </>
  )
}

export default FundingList
