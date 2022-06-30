import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const FundingList = ({ contributorList, contributorNum }) => {

  const [num, setNum] = useState(contributorList.length)
  const [pagecount, setPagecount] = useState(0)
  const [limit, setLimit] = useState(5)
  //한 페이지당 보여줄 친구 목록수는 5명

  const [currentPage, setCurrentPage] = useState(1)
  const [list, setList] = useState([])
  const [query, setQuery] = useState(1)

  const offset = (currentPage - 1) * limit;

//   useEffect(() => {
//     const count = Math.ceil(num / limit)
//     setPagecount(count)
//   }, [limit]) 


  return (
    <>
      현재 페이지 : {currentPage}
      <header>
        <h3>펀딩 리스트</h3>
      </header>
      <main>
        {contributorList.slice(offset, offset + limit).map(({ id, name }) => (
          <article key={id}>
            <p>
              {id}. {name}
            </p>
          </article>
        ))}
      </main>

      <footer>
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
