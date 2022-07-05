import React, { useEffect, useState } from "react"; 
import axios from 'axios'; 
import ReviewList from "./ReviewList";
import Write from "./Write";

export default function ReviewPage(props) {
    console.log("mode is",props.mode);
    const reviews = {
        "reviewList" : [{
          idx: "0",
          name: "아이폰",
          photo: "/",
          star: "5점",
          price: 1000000,
          review: "아이폰 좋앙"
        },
        { 
          idx: "1", 
          name: "맥북", 
          photo: "/", 
          star: "4점",
          price: 5000000, 
          review: "m2칩 나왔대" 
        }]
      }; 

    const REVIEW_API_URL = '/user/funding/review'
    const [mode, setMode] = useState(props.mode); // get, post, update, delete
    const [reviewList, setReviewList] = useState([]);
    const [reviewId, setReviewId] = useState(0);
    const [limit, setLimit] = useState(0);

    if (props.limit_num !== 'false') {
        console.log('limit yes')
        setLimit = limit += 1;
    }

    // //컴포넌트가 불려왔을 때 한 번만 axios 통해 가져온 data를 출력
    useEffect(() => {
        axios.get(REVIEW_API_URL)    
        .then((reviews) => {   
            setReviewList(reviews.reviewList);  
            setMode('get');
        })
        .catch(() => {
            console.log(props.mode, '실패');    
            setReviewList(reviews.reviewList); 
            setMode(props.mode);
        })
    }, [limit])


    if (mode === 'get') {
        return (
            <ReviewList url={REVIEW_API_URL} reviewList={reviewList} modeEvent={setMode} IdEvent={setReviewId}/>// modeEvent={setMode}
        )
    } else if (mode === 'post') {
        return (
            <Write url={REVIEW_API_URL} type={"reivew"}/>// modeEvent={setMode}
        )
    } else if (mode === 'update') {
        console.log('update')
        console.log(reviewId)
        return (
            <Write url={REVIEW_API_URL} type={"review"} review={reviewList[reviewId]} reviewModeEvent={setMode}/>
        )
    } else if (mode === 'delete') {
        console.log('delete')
    } else {
        console.log('nothing')
    }
}