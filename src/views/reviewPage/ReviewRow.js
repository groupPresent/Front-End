import React, { useEffect, useState, useCallback } from "react"; 
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios' 
import ReviewPage from "./ReviewPage"
//백그라운드 이미지 경로
import bg from "../../../src/img/background/withRibon2.png";
import "../../css/components/box.css"
import "../../css/components/button.css"


export default function ReviewRow(props) {
  const [review, setReview] = useState({});
  const [limit, setLimit] = useState(0);

  const changeMode = useCallback(type => {
    props.modeEvent(type)
  }, [props.modeEvent])

  useEffect(() => {
    setReview(props.review);
    document.body.style.background = `url(${bg}) repeat-y center top / cover`;
  }, [limit])

  const updateReview = (review) => {
    axios.put('/user/funding/review', review)    
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
    axios.put('/user/funding/review')    
    .then((response) => {    
      changeMode('get');
    })
    .catch(() => {
      console.log('i want delete',review)
      changeMode('get');
    })
  }
  
  return (
    <li className="review-row basic-box">
      <span className="book-mark"><div></div><div></div></span>
      <div className="review-box">
        <div className="gift-info">
          <div className="gift-img">
            <img src={review.photo} />
          </div>

          <div className="gift-detail">
            <div className="name">선물 이름: {review.name}</div>
            <div className="price">선물 가격: {review.price}</div>
            <div className="star">선물 별점: {review.star}</div>
          </div>
        </div>

        <div className="review-content">
          <div>리뷰 내용: {review.review}</div>
        </div>

        <div className="btn-wrap">
          <button className="highlight-btn" onClick={event => updateReview(review.idx)}><span>후기 수정</span></button>
          <button className="highlight-btn" onClick={event => deleteReview(review.idx)}><span>후기 삭제</span></button>
        </div>
      </div>
    </li>
  );
}
