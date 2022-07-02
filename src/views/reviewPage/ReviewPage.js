import React, { useEffect, useState } from "react"; 
import axios from 'axios'; 
import ReviewList from "./ReviewList";
import ReviewWrite from "./Write";

// console.log("hi");

export default function ReviewPage() {
    const reviews = {
        "reviewList" : [{
          idx: "1",
          name: "아이폰",
          photo: "/",
          star: "5점",
          price: 1000000,
          review: "아이폰 좋앙"
        },
        { 
          idx: "2", 
          name: "맥북", 
          photo: "/", 
          star: "4점",
          price: 5000000, 
          review: "m2칩 나왔대" 
        }]
      }; 

    const API_URL = '/user/funding/review'
    const [mode, setMode] = useState(''); // get, post, update, delete
    const [reviewList, setReviewList] = useState([]);
    const [limit, setLimit] = useState(0);

    // //컴포넌트가 불려왔을 때 한 번만 axios 통해 가져온 data를 출력
    useEffect(() => {
        axios.get(API_URL)    
        .then((reviews) => {   
            console.log(reviews.reviewList);
            setReviewList(reviews.reviewList);  
            setMode('get');
        })
        .catch(() => {
            // console.log('통신 실패');    
            setReviewList(reviews.reviewList); 
            setMode('get');
        })
    }, [limit])


    if (mode === 'get') {
        return (
            <ReviewList reviewList={reviewList}/>// modeEvent={setMode}
        )
    } else if (mode === 'post') {
        return (
            <ReviewWrite/>// modeEvent={setMode}
        )
    } else if (mode === 'update') {
        return (
            <ReviewWrite />
        )
    }
}