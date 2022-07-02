import React, { useEffect, useState } from "react"; 
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios' 
import ReviewPage from "./ReviewPage"

export default function ReviewRow(props) {
  const [review, setReview] = useState({});
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setReview(props.review)
  }, [limit])

  const updateReview = (data) => {
    axios.put('/user/funding/review', data)    
    .then((response) => {    
        console.log(response)  
        return (
          <>
          </>
          // <Routes>
          //   <Route path="/user/funding/review" element={<ReviewPage mode={"update"} />} />
          // </Routes>
          // <ReviewPage mode={"update"}/>
          // <Link to="/about">About</Link>
        )
    })
    .catch(() => {
        console.log('update 실패');
        return(
          <>
            {/* <Routes>
              <Route path="/user/funding/review" element={<ReviewPage mode={"update"} />} />
            </Routes> */}
          </>
        )
    })
  }

  const deleteReview = (review) => {
    console.log('i want delete',review)
    axios.put('/user/funding/review')    
    .then((response) => {    
      return(<ReviewPage mode={"delete"}/>)
    })
    .catch(() => {
      console.log('delete 실패');
      return(<ReviewPage mode={"delete"}/>)
    })
  }
  
  return (
    <li className="review-row">
      <div>
        <div>
          <button onClick={event => updateReview(review.idx)}>수정</button>
          <button onClick={event => deleteReview(review.idx)}>삭제</button>
        </div>
        <div>
          <img className="gift-img" src={review.photo} />
        </div>
        <div className="gift-info">
          <div className="name">선물 이름: {review.name}</div>
          <div className="price">선물 가격: {review.price}</div>
          <div className="star">선물 별점: {review.star}</div>
          <div className="review">리뷰 내용: {review.review}</div>
        </div>
      </div>
    </li>
  );
}
