import React, { useEffect, useState, useCallback } from "react"; 
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios' 
import ReviewPage from "./ReviewPage"


export default function ReviewRow(props) {
  const [review, setReview] = useState({});
  const [url, setUrl] = useState('');
  const [limit, setLimit] = useState(0);

  const changeMode = useCallback(type => {
    props.modeEvent(type)
  }, [props.modeEvent])

  useEffect(() => {
    setReview(props.review);
    setUrl(props.url);
  }, [limit])

  const updateReview = (review) => {
    axios.put(url, review)    
    .then((response) => {    
        console.log(response)  
        changeMode('update');
    })
    .catch(() => {
        console.log('i want update',review);
        changeMode('update');
    })
  }

  const deleteReview = (review) => {
    axios.put(url)    
    .then((response) => {    
      changeMode('get');
    })
    .catch(() => {
      console.log('i want delete',review)
      changeMode('get');
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
