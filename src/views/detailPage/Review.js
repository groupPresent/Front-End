import React, { useState } from 'react'

const Review = ({ commentList }) => {
  const [comment, setComment] = useState('')
  const [commentArray, setCommentArray] = useState(commentList)

  const onChange = (e) => {
    setComment(e.target.value)
  }

  const onSubmit = (e) => {
    //이벤트가 발생해도 `submit` 새로고침을 막는 함수
    //왜냐하면 아래의 조건문처럼 입력값이 없는 경우에는
    //함수를 끝내야 하는데 이게 없으면 무조건적으로 새로고침이 일어나게 됨?
    e.preventDafault()
    if (comment === '') {
      //댓글이 공백이라면 바로 리턴하여 함수를 끝낸다.
      return
    }

    const currentComment = {
      commenter: '민호',
      content: comment,
    }

    setCommentArray([...commentArray, currentComment])

    setComment('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="writing-comment">
        <input
          type="text"
          placeholder="댓글달기"
          value={comment}
          onChange={onChange}
        />
        <button type="submit">게시</button>
      </form>

      {/* { commenter: '버민', content: 'ㅋ왜태어났냐' }, */}
      <div className='comment-list'>
        <ul>
          {commentArray.map((item, index) => (
            <li key={index}>
              <p className='writer'>{item.commenter}</p>
              <p className='content'>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
//onclick으로 구현하면 되는데 왜 form의 submit으로 하면
//죄다 초기화가 되는거지?
export default Review
