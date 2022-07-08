import React, { useEffect, useState } from "react"; 
import axios from 'axios'; 
// import ReviewList from "./ReviewList";
import Write from "../Write/Write";

export default function WriteFundingPage(props) {


  const FUNDING_API_URL = '/user/funding'
  const [mode, setMode] = useState(props.mode); // get, post, update, delete
  const [reviewList, setReviewList] = useState([]);
  const [reviewId, setReviewId] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    axios.get(FUNDING_API_URL)    
    .then((reviews) => {   
        setReviewList(reviews.reviewList);  
        setMode('get');
    })
    .catch(() => {
        console.log(props.mode, '실패');    
        // setReviewList(reviews.reviewList); 
        setMode(props.mode);
    })
  }, [limit])

  if (mode === 'post') {
    return (
  //       <ReviewList url={REVIEW_API_URL} reviewList={reviewList} modeEvent={setMode} IdEvent={setReviewId}/>// modeEvent={setMode}
  //     )
  // } else if (mode === 'post') {
  //     return (
          <Write url={REVIEW_API_URL} type={"reivew"} writingMode={mode}/>// modeEvent={setMode}
      )
  } else if (mode === 'update') {
      console.log('update')
      console.log(reviewId)
      return (
          <Write url={REVIEW_API_URL} writingType={"review"} writingMode={mode} review={reviewList[reviewId]} reviewModeEvent={setMode}/>
      )
  } else if (mode === 'delete') {
      console.log('delete')
  } else {
      console.log('nothing')
  }
}