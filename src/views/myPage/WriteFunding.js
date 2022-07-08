import React, { useEffect, useState } from "react"; 
import axios from 'axios'; 
// import ReviewList from "./ReviewList";
import Write from "../Write/Write";
import FundingList from "../detailPage/FundingList";

export default function WriteFundingPage(props) {

  const FUNDING_API_URL = '/user/funding'
  const [mode, setMode] = useState(props.mode); // get, post, update, delete
  const [fundingList, setFundingList] = useState([]);
  const [fundingId, setFundingId] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    // axios.get(FUNDING_API_URL)    
    // .then((reviews) => {   
    //     setFundingList(reviews.reviewList);  
    //     setMode('get');
    // })
    // .catch(() => {
    //     console.log(props.mode, '실패');    
        // setFundingList(reviews.reviewList); 
        setMode(props.mode);
    // })
  }, [limit])

  if (mode === 'post') {
    return (
      <Write url={FUNDING_API_URL} type={"funding"} writingMode={mode}/>// modeEvent={setMode}
    )
  } else if (mode === 'update') {
      console.log('update')
      console.log(fundingId)
      return (
        <Write url={FUNDING_API_URL} writingType={"funding"} writingMode={mode} funding={FundingList[fundingId]} reviewModeEvent={setMode}/>
      )
  // } else if (mode === 'delete') {
  //     console.log('delete')
  } else {
      console.log('nothing')
  }
}