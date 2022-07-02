import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 

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
        // modeEvent('update');
    })
    .catch(() => {
        console.log('통신 실패');
    })
  }

  const deleteReview = (review) => {
    axios.put('/user/funding/review')    
    .then((response) => {    
        console.log(response)  
        // modeEvent('delete');
    })
    .catch(() => {
        console.log('통신 실패');
    })
  }
  
  return (
    <li className="review-row">
      <div>
        <div>
          <button onClick={updateReview(review.idx)}>수정</button>
          <button onClick={deleteReview(review.idx)}>삭제</button>
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
