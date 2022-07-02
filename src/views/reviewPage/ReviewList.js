import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewRow from "./ReviewRow";
import axios from 'axios';

// const API_URL = '/user/funding/review'

export default function ReviewList(reviewList) {
  return (
    <>
      <h1>Leview list</h1>
      <ul className="reviewListView">
        {!reviewList.reviewList.length && <h4>선물 후기가 없습니다.</h4>}
        {reviewList.reviewList?.map((review) => {
          return (
            <ReviewRow
              key={review.idx}
              review={review}
            />
          );
        })}
      </ul>
    </>
  );
}
