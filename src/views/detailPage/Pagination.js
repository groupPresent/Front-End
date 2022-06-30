import React from 'react'

const Pagination = ({ total, limit, currentPage, setCurrentPage }) => {

  const numPages = Math.ceil(total / limit)
  //목록의 갯수에 따른 전체 페이지 수

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {new Array(numPages).fill().map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            // aria-current={currentPage === i + 1 ? 'currentPage' : null}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numPages}>
          &gt;
        </button>
      </nav>
    </div>
  )
}

export default Pagination
